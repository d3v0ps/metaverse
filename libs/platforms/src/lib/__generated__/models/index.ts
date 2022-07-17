/* eslint-disable @typescript-eslint/no-explicit-any */

export enum SymbolType {
  Alias = 'alias',
  Array = 'array',
  Primitive = 'primitive',
  Record = 'record',
  Scalar = 'scalar',
  Type = 'type',
  Union = 'union',
}

export type Application = {
  domains?: Domain[];

  package?: Package;

  readme?: string;

  workspace?: Workspace;
  _attachments?: any;
};

export type Author = {
  name?: string;
  _attachments?: any;
};

export type Domain = {
  name?: string;
  tokens?: TokensSchema[];
  _attachments?: any;
};

export type EnumToken = {
  name: string;
  type?: string;
  description?: string;
  label?: string;

  properties: Prop[];
  _attachments?: any;
};

export type ImportToken = {
  name: string;

  path: string;
  _attachments?: any;
};

export type Package = {
  author?: Author;

  dependencies?: any;

  description?: string;

  devDependencies?: any;

  license?: string;

  name: string;

  private?: boolean;

  readme?: string;

  scripts?: any;
  type?: string;

  version?: string;
  _attachments?: any;
};

export type Prop = {
  id: string;
  name?: string;
  description?: string;
  label?: string;
  raw?: Typing;
  required?: boolean;
  symbol: SymbolType;
  type: string;

  _attachments?: any;
};

export type PropItem = {
  _attachments?: any;
};

export enum RecommendationState {
  workingDraft = 'workingDraft',
  candidateRecommendation = 'candidateRecommendation',
  proposedRecommendation = 'proposedRecommendation',
  recommendation = 'recommendation',
  stable = 'stable',
  deprecated = 'deprecated',
}

export type TokensSchemaInput = {
  name?: string;
  domain?: string;
  state?: RecommendationState;
  file?: string;
  types?: Record<string, Typing | string>;
  roots?: string[];
  imports?: Record<string, string>;
  enums?: Record<string, Record<string, string>>;
};

export type TokensSchema = {
  state: RecommendationState;
  description?: string;
  domain: string;

  enums: EnumToken[];

  file?: string;

  imports: ImportToken[];

  name: string;

  roots: string[];

  types: TypeToken[];
  _attachments?: any;
};

export type TypeToken = {
  name: string;
  description?: string;
  label?: string;
  properties: Prop[];
  raw: Typing;
  symbol: SymbolType;
  extendsType?: string;

  _attachments?: any;
};

export type Typing = {
  name?: string;
  $extends?: string;
  $label?: string;
  $description?: string;

  required?: boolean;

  type?: string;
  _attachments?: any;
};

export type Workspace = {
  projects?: {
    [key: string]: WorkspaceProject;
  };

  version?: string;
  _attachments?: any;
};

export type WorkspaceProject = {
  architect?: any;

  prefix?: string;

  projectType?: string;

  root?: string;

  sourceRoot?: string;

  tags?: string[];
  _attachments?: any;
};
