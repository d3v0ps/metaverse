import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { forkJoin, Observable, of, switchMap, tap } from 'rxjs';

export type CryptocurrencyListingsResponse = {
  data: {
    symbol: string;
    quote: {
      USD: {
        price: number;
      };
    };
  }[];
};

export type ExchangeRatesResponse = {
  base: string;
  rates: { [key: string]: number };
};

@Injectable()
export class ExchangesRatesService {
  private rates: Record<string, number> = {};

  constructor(private http: HttpService) {
    this.fetchExchangeRates().subscribe();
  }

  getExchangeRates(): Observable<Record<string, number>> {
    if (Object.keys(this.rates).length === 0) {
      return this.fetchExchangeRates().pipe(
        switchMap(() => this.getExchangeRates())
      );
    }

    return of(this.rates);
  }

  private fetchExchangeRates() {
    return forkJoin([
      this.fetchCryptoExchangeRates(),
      this.fetchFIATExchangeRates(),
    ]);
  }

  private fetchFIATExchangeRates() {
    return this.http
      .get<ExchangeRatesResponse>(
        `https://openexchangerates.org/api/latest.json`,
        {
          headers: {
            Authorization: `Token 1d586a8dbd5f45358a897d41bed4eae6`,
          },
        }
      )
      .pipe(
        tap((result) => {
          Object.entries(result.data.rates).forEach(([key, value]) => {
            this.rates[key.toUpperCase()] = value;
          });
        })
      );
  }

  private fetchCryptoExchangeRates() {
    return this.http
      .get<CryptocurrencyListingsResponse>(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': '2ad1b08a-5ab4-4a8f-85f7-ac2d71afc8aa',
          },
        }
      )
      .pipe(
        tap((response) => {
          response.data.data.forEach((item) => {
            this.rates[item.symbol.toUpperCase()] = 1 / item.quote.USD.price;
          });
        })
      );
  }
}
