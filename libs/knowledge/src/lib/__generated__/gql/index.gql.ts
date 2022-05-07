/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Displayable {
  @Field()
  component?: string;

  @Field()
  content?: string;
}

@ObjectType()
export class Indexable {
  @Field()
  id?: string;

  @Field((type) => Meta)
  meta?: Meta;
}

@ObjectType()
export class KnowledgeFragment {
  @Field()
  id?: string;

  @Field((type) => Meta)
  meta?: Meta;

  @Field()
  src?: string;

  @Field()
  component?: string;

  @Field()
  content?: string;
}

@ObjectType()
export class KnowledgeSymbol {
  @Field((type) => [KnowledgeFragment])
  fragments?: KnowledgeFragment[];

  @Field()
  icon?: string;

  @Field()
  id?: string;

  @Field((type) => Meta)
  meta?: Meta;

  @Field()
  title?: string;
}

@ObjectType()
export class Loadable {
  @Field()
  src?: string;
}

@ObjectType()
export class Meta {
  @Field()
  cover?: string;

  @Field()
  description?: string;

  @Field()
  subtitle?: string;

  @Field()
  title?: string;
}

