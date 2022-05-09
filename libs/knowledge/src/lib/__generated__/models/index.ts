/* eslint-disable @typescript-eslint/no-explicit-any */

export type Displayable = {
  component?: string;

  content: string;
  _attachments?: any;
}


export type Indexable = {
  id?: string;

  meta?: Meta;
  _attachments?: any;
}


export type KnowledgeFragment = {
  id?: string;

  meta?: Meta;

  src?: string;

  component?: string;

  content: string;
  _attachments?: any;
}


export type KnowledgeSymbol = {
  fragments?: KnowledgeFragment[];

  icon?: string;

  id?: string;

  meta?: Meta;

  title?: string;
  _attachments?: any;
}


export type Loadable = {
  src?: string;
  _attachments?: any;
}


export type Meta = {
  cover?: string;

  description?: string;

  subtitle?: string;

  title?: string;
  _attachments?: any;
}


