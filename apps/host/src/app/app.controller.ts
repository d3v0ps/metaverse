import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MarkdownKnowledgeFragmentsRepository } from './knowledge-fragments/markdown-knowledge-fragments.repository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly repository: MarkdownKnowledgeFragmentsRepository
  ) {}

  @Get(':root?')
  getData(@Param('root') root: string, @Query('id') id?: string) {
    return this.repository.findTaxonomiesTree(root, id);
  }

  @Get(':root/symbols/:id?')
  async getSymbol(@Param('root') root: string, @Param('id') id: string) {
    return {
      ...(await this.repository.findById(root, id)),
      content: await this.repository.getContent(root, id),
    };
  }
}
