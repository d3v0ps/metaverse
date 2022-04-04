import { Args, Query, Resolver } from '@nestjs/graphql';
import { Document } from './documents.gql-model';
import { DocumentsService } from './documents.service';

@Resolver((of) => Document)
export class DocumentsResolver {
  constructor(private readonly service: DocumentsService) {}

  @Query((returns) => Document)
  async getDocument(
    @Args('root') root: string,
    @Args('id') id: string
  ): Promise<Document> {
    return this.service.getDocument(root, id);
  }
}
