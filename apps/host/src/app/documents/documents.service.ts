import {
  ContentType,
  Document,
  Section,
} from '@central-factory/notes/models/meta';
import { FSTreeRepository } from '@central-factory/persistence/repositories/fs-tree.repository';
import { GoogleSearchRepository } from '@central-factory/persistence/repositories/google-search.repository';
import { Controller } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Controller()
export class DocumentsService {
  constructor(
    private readonly repository: FSTreeRepository,
    private readonly searchRepository: GoogleSearchRepository
  ) {}

  async getRoot(root: string) {
    return this.repository.findTree({ root });
  }

  async getFolder(root: string, id: string) {
    return this.repository.findTree({ root, id });
  }

  async getDocument(root: string, id: string): Promise<Document> {
    const documentSection = await this.getDocumentSection(root, id);

    const { title, queryString } = documentSection.documents[0].meta;
    const searchSection = await this.getSearchSection(id, queryString);

    return {
      id,
      meta: {
        title,
      },
      sections: [documentSection, searchSection],
    };
  }

  async updateDocument(
    root: string,
    id: string,
    content: string
  ): Promise<void> {
    return lastValueFrom(
      this.repository.upsert({ root, id, content, type: 'file' })
    ).then(() => {
      return;
    });
  }

  private async getSearchSection(
    id: string,
    queryString: string
  ): Promise<Section> {
    const searchResults = await lastValueFrom(
      this.searchRepository.find(queryString)
    );

    return {
      id: `${id}.search`,
      title: 'Search Results',
      documents: searchResults.map((result) => ({
        id: `${id}.search.${result.url}`,
        meta: {
          contentType: ContentType.PAGE,
          title: result.title,
          sourceUrl: result.url,
        },
      })),
    };
  }

  private async getDocumentSection(root: string, id: string): Promise<Section> {
    const result = await lastValueFrom(this.repository.findOne({ root, id }));

    if (!result) {
      return {
        id,
        title: 'Not Found',
        content: '',
        documents: [
          {
            id,
            meta: {
              contentType: ContentType.TEXT,
              title: 'Not Found',
            },
          },
        ],
      };
    }

    const { id: fileId, content, title, slug, children = [] } = result;
    const parent = slug.split('/').slice(0, -1).pop();

    const queryString = parent ? `${parent} ${title}` : title;

    return {
      id,
      title,
      content,
      documents: [
        {
          id: fileId,
          content,
          meta: {
            contentType: ContentType.TEXT,
            title,
            queryString,
          },
        },
        ...children,
      ],
    };
  }
}
