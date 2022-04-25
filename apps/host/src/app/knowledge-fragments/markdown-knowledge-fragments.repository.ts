import { Injectable } from '@nestjs/common';
import {
  MarkdownKnowledgeFragmentsDatabase,
  TaxonomyLeafJSON,
  TaxonomySymbol,
} from './markdown-knowledge-fragments.database';

@Injectable()
export class MarkdownKnowledgeFragmentsRepository {
  constructor(private database: MarkdownKnowledgeFragmentsDatabase) {}

  async findById(root: string, id: string): Promise<TaxonomySymbol> {
    const [dbResult] = await this.database.read({ root, id });

    return dbResult;
  }

  async getContent(root: string, id: string): Promise<string> {
    const dbResult = await this.database.readContent({ root, id });

    return dbResult;
  }

  async find(root: string): Promise<TaxonomySymbol[]> {
    const dbResult = await this.database.read({ root });

    return dbResult;
  }

  async findTaxonomies(root: string): Promise<TaxonomyLeafJSON[]> {
    const dbResult = await this.database.readTaxonomies({ root });

    return dbResult;
  }

  async findTaxonomiesTree(
    root: string,
    id?: string,
    depth = 0
  ): Promise<TaxonomyLeafJSON[]> {
    const dbResult = await this.database.readTaxonomiesTree(
      {
        root,
        id,
      },
      depth
    );

    return dbResult;
  }
}
