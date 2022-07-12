import {
  File,
  NodeJSON,
} from '@central-factory/persistence/adapters/fs-tree.adapter';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DocumentNodeFile implements File {
  @Field()
  id: string;
  @Field()
  title: string;
  @Field()
  type: string;
}

@ObjectType()
export class DocumentNode implements NodeJSON {
  @Field()
  id: string;
  @Field()
  type: string;

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
