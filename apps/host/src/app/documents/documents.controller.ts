import { GoogleSearchRepository } from '@central-factory/persistence/repositories/google-search.repository';
import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PlainBody } from '../decorators/plain-body.decorator';
import { RenderInterceptor } from '../interceptors/render.interceptor';
import { Document, NodeJSON, SearchResult } from './documents.oapi-model';
import { DocumentsService } from './documents.service';

@ApiTags('documents')
@Controller()
export class DocumentsController {
  constructor(
    private readonly service: DocumentsService,
    private readonly googleSearchRepository: GoogleSearchRepository
  ) {}

  @Get('search?')
  @ApiOkResponse({
    type: SearchResult,
    isArray: true,
  })
  @UseInterceptors(new RenderInterceptor('list'), CacheInterceptor)
  search(@Query('queryString') queryString: string) {
    return this.googleSearchRepository.find(queryString);
  }

  @Get(':root?')
  @ApiOkResponse({
    type: NodeJSON,
    isArray: true,
  })
  @UseInterceptors(new RenderInterceptor('list'), CacheInterceptor)
  getFolder(@Param('root') root: string, @Query('id') id?: string) {
    return this.service.getFolder(root, id);
  }

  @Get(':root/:id')
  @ApiOkResponse({
    type: Document,
  })
  @UseInterceptors(new RenderInterceptor('item'), CacheInterceptor)
  async getDocument(@Param('root') root: string, @Param('id') id: string) {
    const doc = await this.service.getDocument(root, id);
    return doc;
  }

  @Post(':root/:id')
  @ApiCreatedResponse()
  async updateDocument(
    @Param('root') root: string,
    @Param('id') id: string,
    @PlainBody() content: string
  ) {
    await this.service.updateDocument(root, id, content);
  }
}
