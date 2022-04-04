import { Field, ObjectType } from '@nestjs/graphql';
import { File, NodeJSON } from '../databases/fs-tree.database';

@ObjectType()
export class DocumentNodeFile implements File {
  @Field()
  id: string;
  @Field()
  title: string;
}

@ObjectType()
export class DocumentNode implements NodeJSON {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  slug: string;

  @Field()
  icon: string;

  @Field((type) => [DocumentNodeFile])
  files: File[];

  @Field((type) => [DocumentNode])
  children: NodeJSON[];

  @Field((type) => DocumentNode)
  parent: NodeJSON;
}
