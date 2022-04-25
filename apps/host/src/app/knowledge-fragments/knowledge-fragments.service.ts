import { Controller, Param } from '@nestjs/common';
import { MarkdownKnowledgeFragmentsRepository } from './markdown-knowledge-fragments.repository';

@Controller()
export class KnowledgeFragmentsService {
  constructor(
    private readonly repository: MarkdownKnowledgeFragmentsRepository
  ) {}

  async getData(root: string, id?: string) {
    return this.repository.findTaxonomiesTree(root, id);
  }

  async getSymbol(root: string, @Param('id') id: string) {
    return {
      ...(await this.repository.findById(root, id)),
      content: await this.repository.getContent(root, id),
    };
  }
}
