



export type Prop = {
  name?: string;
  type?: string;
  required?: boolean;
};

export type PropItem = {
  [key: string]: string;
};

export type Typing = Prop | PropItem;

export type TypeToken = {
  name: string;
  isUnion: boolean;
  raw: Typing;
  properties: Prop[];
};

export type EnumToken = {
  name: string;
  properties: Prop[];
};

export type ImportToken = {
  name: string;
  path: string;
};

export type TokensSchema = {
  name: string;
  file?: string;
  description?: string;
  imports: ImportToken[];
  types: TypeToken[];
  enums: EnumToken[];
  roots: string[];
};

export type Root = Prop | PropItem | Typing | TypeToken | EnumToken | ImportToken | TokensSchema;
