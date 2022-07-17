import { Args, Query, Resolver } from '@nestjs/graphql';
import { DocumentNode } from './documents-tree.gql-model';
import { DocumentsService } from './documents.service';

@Resolver((of) => DocumentNode)
export class DocumentTreeResolver {
  constructor(private readonly service: DocumentsService) {}

  @Query((returns) => [DocumentNode])
  getNodes(
    @Args('root') root: string,
    @Args('id', { nullable: true }) id?: string
  ) {
    return this.service.getFolder(root, id);
  }
}
