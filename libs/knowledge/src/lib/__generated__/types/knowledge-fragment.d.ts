import { Displayable, Indexable, Loadable } from './core';

export { Displayable, Indexable, Loadable } from './core';

export enum KnowledgeFragmentKind {
  Markdown = 'Markdown',
  Image = 'Image',
  Video = 'Video',
  Component = 'Component',
  RelatedContent = 'RelatedContent',
}

export type KnowledgeFragment = Indexable & (Loadable | Displayable);

export type Root = KnowledgeFragment;
