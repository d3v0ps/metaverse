/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class EnumToken {
  @Field()
  name!: string;

  @Field((type) => [Prop])
  properties!: Prop[];
}

@ObjectType()
export class ImportToken {
  @Field()
  name!: string;

  @Field()
  path!: string;
}

@ObjectType()
export class Package {
  @Field((type) => [TokensSchema])
  models!: TokensSchema[];

  @Field()
  name!: string;

  @Field((type) => WorkspaceProject)
  project!: WorkspaceProject;

  @Field()
  readme?: string;
}

@ObjectType()
export class Prop {
  @Field()
  name?: string;

  @Field()
  required?: boolean;

  @Field()
  type?: string;
}

@ObjectType()
export class PropItem {
}

@ObjectType()
export class TokensSchema {
  @Field()
  description?: string;

  @Field((type) => [EnumToken])
  enums!: EnumToken[];

  @Field()
  file?: string;

  @Field((type) => [ImportToken])
  imports!: ImportToken[];

  @Field()
  name!: string;

  @Field((type) => [String])
  roots!: string[];

  @Field((type) => [TypeToken])
  types!: TypeToken[];
}

@ObjectType()
export class TypeToken {
  @Field()
  isUnion!: boolean;

  @Field()
  name!: string;

  @Field((type) => [Prop])
  properties!: Prop[];

  @Field((type) => Typing)
  raw!: Typing;
}

@ObjectType()
export class Typing {
  @Field()
  name?: string;

  @Field()
  required?: boolean;

  @Field()
  type?: string;
}

@ObjectType()
export class Workspace {
  [key: string]: WorkspaceProject;
}

@ObjectType()
export class WorkspaceProject {
  @Field()
  root?: string;
}

