/* eslint-disable @typescript-eslint/no-explicit-any */

export type EnumToken = {
  name: string;

  properties: Prop[];
  _attachments?: any;
}


export type ImportToken = {
  name: string;

  path: string;
  _attachments?: any;
}


export type Package = {
  models: TokensSchema[];

  name: string;

  project: WorkspaceProject;

  readme?: string;
  _attachments?: any;
}


export type Prop = {
  name?: string;

  required?: boolean;

  type?: string;
  _attachments?: any;
}


export type PropItem = {
  _attachments?: any;
}


export type TokensSchema = {
  description?: string;

  enums: EnumToken[];

  file?: string;

  imports: ImportToken[];

  name: string;

  roots: string[];

  types: TypeToken[];
  _attachments?: any;
}


export type TypeToken = {
  isUnion: boolean;

  name: string;

  properties: Prop[];

  raw: Typing;
  _attachments?: any;
}


export type Typing = {
  name?: string;

  required?: boolean;

  type?: string;
  _attachments?: any;
}


export type Workspace = {
  [key: string]: WorkspaceProject;
  _attachments?: any;
}


export type WorkspaceProject = {
  root?: string;
  _attachments?: any;
}


