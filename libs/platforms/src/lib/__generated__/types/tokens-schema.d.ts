export enum SymbolType {
  Array = 'array',
  Primitive = 'primitive',
  Record = 'record',
  Scalar = 'scalar',
  Type = 'type',
  Union = 'union',
}

export type Prop = {
  name?: string;
  raw?: Typing;
  required?: boolean;
  symbol: SymbolType;
  type?: string;
};

export type PropItem = {
  [key: string]: string;
};

export type Typing = Prop | PropItem;

export type TypeToken = {
  name: string;
  properties: Prop[];
  raw: Typing;
  symbol: SymbolType;
};

export type EnumToken = {
  name: string;
  properties: Prop[];
};

export type ImportToken = {
  name: string;
  path: string;
};

export enum RecommendationState {
  workingDraft = 'workingDraft',
  candidateRecommendation = 'candidateRecommendation',
  proposedRecommendation = 'proposedRecommendation',
  recommendation = 'recommendation',
  stable = 'stable',
  deprecated = 'deprecated',
}

export type TokensSchema = {
  name: string;
  symbol: SymbolType;
  state: RecommendationState;
  file?: string;
  description?: string;
  imports: ImportToken[];
  types: TypeToken[];
  enums: EnumToken[];
  roots: string[];
};

export type Root =
  | Prop
  | PropItem
  | Typing
  | TypeToken
  | EnumToken
  | ImportToken
  | TokensSchema;
