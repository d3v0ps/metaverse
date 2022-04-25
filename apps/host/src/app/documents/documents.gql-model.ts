import {
  ContentType,
  Document as TDocument,
  Meta as TMeta,
  Section as TSection,
} from '@central-factory/notes/models/meta';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Meta implements TMeta {
  @Field(() => String)
  contentType: ContentType;

  @Field(() => String)
  title: string;
}

@ObjectType()
export class Section implements TSection {
  @Field()
  id: string;

  @Field(() => String)
  title: string;
}

@ObjectType()
export class Document implements TDocument {
  @Field()
  id: string;
  @Field((type) => Meta)
  meta: TMeta;
  @Field((type) => [Section])
  sections?: TSection[];

  @Field({ nullable: true })
  content?: string;
}
