import { Args, Query, Resolver } from '@nestjs/graphql';
import { NodeJSON } from '../databases/fs-tree.database';
import { DocumentNode } from './documents-tree.gql-model';
import { DocumentsService } from './documents.service';

@Resolver((of) => DocumentNode)
export class DocumentTreeResolver {
  constructor(private readonly service: DocumentsService) {}

  @Query((returns) => [DocumentNode])
  async getNodes(
    @Args('root') root: string,
    @Args('id', { nullable: true }) id?: string
  ): Promise<NodeJSON[]> {
    return this.service.getFolder(root, id);
  }
}
