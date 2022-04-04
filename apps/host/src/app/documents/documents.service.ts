import {
  ContentType,
  Document,
  Section,
} from '@central-factory/notes/models/meta';
import { Controller } from '@nestjs/common';
import { FSTreeRepository } from '../databases/fs-tree.repository';
import { GoogleSearchRepository } from '../databases/google-search.repository';

@Controller()
export class DocumentsService {
  constructor(
    private readonly repository: FSTreeRepository,
    private readonly searchRepository: GoogleSearchRepository
  ) {}

  async getRoot(root: string) {
    return this.repository.findTree(root);
  }

  async getFolder(root: string, id: string) {
    return this.repository.findTree(root, id);
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

  private async getSearchSection(
    id: string,
    queryString: string
  ): Promise<Section> {
    const searchResults = await this.searchRepository.search(queryString);

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

  private async getDocumentSection(
    root: string,
    documentId: string
  ): Promise<Section> {
    const [file, content] = await Promise.all([
      this.repository.findById(root, documentId),
      this.repository.getContent(root, documentId),
    ]);

    const { title, id, slug } = file;
    const parent = slug.split('/').slice(0, -1).pop();

    const queryString = parent ? `${parent} ${title}` : title;

    return {
      id,
      title,
      content,
      documents: [
        {
          id: file.id,
          content,
          meta: {
            contentType: ContentType.TEXT,
            title,
            queryString,
          },
        },
      ],
    };
  }
}
