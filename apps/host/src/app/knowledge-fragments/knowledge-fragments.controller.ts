import { Controller, Get, Param, Query } from '@nestjs/common';
import { KnowledgeFragmentsService } from './knowledge-fragments.service';

@Controller({
  path: 'knowledge-fragments',
})
export class KnowledgeFragmentsController {
  constructor(private readonly service: KnowledgeFragmentsService) {}

  @Get(':root?')
  getData(@Param('root') root: string, @Query('id') id?: string) {
    return this.service.getData(root, id);
  }

  @Get(':root/symbols/:id?')
  async getSymbol(@Param('root') root: string, @Param('id') id: string) {
    return this.service.getSymbol(root, id);
  }
}
