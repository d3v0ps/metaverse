import { Document } from '@central-factory/notes/models/meta';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { NodeJSON } from '../databases/fs-tree.database';
import { GoogleSearchRepository } from '../databases/google-search.repository';
import { DocumentsService } from './documents.service';

@Controller({
  path: 'documents',
})
export class DocumentsController {
  constructor(
    private readonly service: DocumentsService,
    private readonly googleSearchRepository: GoogleSearchRepository
  ) {}

  @Get('search?')
  async search(@Query('queryString') queryString: string) {
    return this.googleSearchRepository.search(queryString);
  }

  @Get(':root?')
  async getFolder(
    @Param('root') root: string,
    @Query('id') id?: string
  ): Promise<NodeJSON[]> {
    return this.service.getFolder(root, id);
  }

  @Get(':root/:id')
  async getDocument(
    @Param('root') root: string,
    @Param('id') id: string
  ): Promise<Document> {
    return this.service.getDocument(root, id);
  }
}
