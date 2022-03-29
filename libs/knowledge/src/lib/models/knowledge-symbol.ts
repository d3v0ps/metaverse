/* eslint-disable @typescript-eslint/no-explicit-any */

import { KnowledgeFragment } from './knowledge-fragment';

export type Meta = {
  title: string;
  slug?: string;
  world?: string;
  taxonomy?: string;
  subtitle?: string;
  description?: string;
  cover?: string;
  statistics?: Record<string, any>;
};

export type KnowledgeSymbol = {
  id: string;
  meta: Meta;
  title: string;
  icon: string;
  fragments: KnowledgeFragment[];
};
