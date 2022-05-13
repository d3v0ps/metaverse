/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

export enum SymbolType {
  Alias = 'alias',
  Array = 'array',
  Primitive = 'primitive',
  Record = 'record',
  Scalar = 'scalar',
  Type = 'type',
  Union = 'union',
}

export enum RecommendationState {
  workingDraft = 'workingDraft',
  candidateRecommendation = 'candidateRecommendation',
  proposedRecommendation = 'proposedRecommendation',
  recommendation = 'recommendation',
  stable = 'stable',
  deprecated = 'deprecated',
}

registerEnumType(RecommendationState, { name: 'RecommendationState' });
registerEnumType(SymbolType, { name: 'SymbolType' });

@ObjectType()
export class Typing {
  @Field((type) => String)
  name?: string;

  @Field((type) => Boolean)
  required?: boolean;

  @Field((type) => String)
  type?: string;
}

@ObjectType()
export class Prop {
  @Field((type) => String)
  name?: string;
  @Field((type) => Typing)
  raw?: Typing;

  @Field((type) => Boolean)
  required?: boolean;
  @Field((type) => SymbolType)
  symbol!: SymbolType;

  @Field((type) => String)
  type?: string;
}

@ObjectType()
export class Author {
  @Field((type) => String)
  name?: string;
}

@ObjectType()
export class EnumToken {
  @Field((type) => String)
  name!: string;

  @Field((type) => [Prop])
  properties!: Prop[];
}

@ObjectType()
export class ImportToken {
  @Field((type) => String)
  name!: string;

  @Field((type) => String)
  path!: string;
}

@ObjectType()
export class TypeToken {
  @Field((type) => String)
  name!: string;

  @Field((type) => [Prop])
  properties!: Prop[];

  @Field((type) => Typing)
  raw!: Typing;

  @Field((type) => SymbolType)
  symbol!: SymbolType;
}

@ObjectType()
export class TokensSchema {
  @Field((type) => RecommendationState)
  state?: RecommendationState;
  @Field((type) => String)
  description?: string;

  @Field((type) => [EnumToken])
  enums!: EnumToken[];

  @Field((type) => String)
  file?: string;

  @Field((type) => [ImportToken])
  imports!: ImportToken[];

  @Field((type) => String)
  name!: string;
  @Field((type) => String)
  domain!: string;

  @Field((type) => [String])
  roots!: string[];

  @Field((type) => [TypeToken])
  types!: TypeToken[];
}

@ObjectType()
export class Domain {
  @Field((type) => String)
  name?: string;
  @Field((type) => [TokensSchema])
  tokens?: TokensSchema[];
}

@ObjectType()
export class Package {
  @Field((type) => Author)
  author?: Author;

  @Field((type) => GraphQLJSON)
  dependencies?: any;

  @Field((type) => String)
  description?: string;

  @Field((type) => GraphQLJSON)
  devDependencies?: any;

  @Field((type) => String)
  license?: string;

  @Field((type) => String)
  name!: string;

  @Field((type) => Boolean)
  private?: boolean;

  @Field((type) => String)
  readme?: string;

  @Field((type) => GraphQLJSON)
  scripts?: any;

  @Field((type) => String)
  version?: string;
}

@ObjectType()
export class WorkspaceProject {
  @Field((type) => GraphQLJSON)
  architect?: any;

  @Field((type) => String)
  prefix?: string;

  @Field((type) => String)
  projectType?: string;

  @Field((type) => String)
  root?: string;

  @Field((type) => String)
  sourceRoot?: string;

  @Field((type) => [String])
  tags?: string[];
}

@ObjectType()
export class Workspace {
  @Field((type) => GraphQLJSON)
  projects?: any;

  @Field((type) => String)
  version?: string;
}

@ObjectType()
export class Application {
  @Field((type) => [Domain])
  domains?: Domain[];

  @Field((type) => Package)
  package?: Package;

  @Field()
  readme?: string;

  @Field((type) => Workspace)
  workspace?: Workspace;
}
