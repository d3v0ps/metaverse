import { Meta } from './core';
import { KnowledgeFragment } from './knowledge-fragment';

export { Meta } from './core';
export { KnowledgeFragment } from './knowledge-fragment';

export type KnowledgeSymbol = {
  id?: string;
  fragments?: KnowledgeFragment[];
  icon?: string;
  meta?: Meta;
  title?: string;
};

export type Root = KnowledgeSymbol;
