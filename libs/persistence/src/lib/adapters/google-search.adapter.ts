import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import * as puppeteer from 'puppeteer';
import { from, map, Observable } from 'rxjs';
import { RepositoryAdapter } from '../adapter';

export type SearchResult = {
  content?: string;
  url?: string;
  title?: string;
};

@Injectable()
export class GoogleSearchRepositoryAdapter
  implements RepositoryAdapter<SearchResult, string>
{
  private cache = new Map<string, SearchResult[]>();

  find(query: string): Observable<SearchResult[]> {
    return from(this.search(query));
  }

  findOne(query: string): Observable<SearchResult> {
    return from(this.search(query)).pipe(map((results) => results[0]));
  }

  private async search(query: string): Promise<SearchResult[]> {
    const inCache = this.cache.get(query);

    if (inCache) {
      return inCache;
    }

    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(`https://google.com/search?q=${query}`);
    const [button] = await page.$x("//button[contains(., 'Acepto')]");
    if (!button) {
      throw new Error('Confirmation button not found');
    }

    await button.click();

    const elements = await page.$$('.tF2Cxc');

    const results = await Promise.all(
      elements.map(async (result) => {
        const content = await page.evaluate((el) => el.innerHTML, result);
        const $ = cheerio.load(content);

        const url = $('a').attr('href');
        const title = $('h3').text();

        return {
          content,
          url,
          title,
        };
      })
    );

    this.cache.set(query, results);

    browser.close();

    return results;
  }
}
