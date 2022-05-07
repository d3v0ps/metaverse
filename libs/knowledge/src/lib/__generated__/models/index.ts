/* eslint-disable @typescript-eslint/no-explicit-any */

export type Displayable = {
  component?: string;

  content: string;
}

export type Indexable = {
  id?: string;

  meta?: Meta;
}

export type KnowledgeFragment = {
  id?: string;

  meta?: Meta;

  src?: string;

  component?: string;

  content?: string;
}

export type KnowledgeSymbol = {
  fragments?: KnowledgeFragment[];

  icon?: string;

  id?: string;

  meta?: Meta;

  title?: string;
}

export type Loadable = {
  src?: string;
}

export type Meta = {
  cover?: string;

  description?: string;

  subtitle?: string;

  title?: string;
}

