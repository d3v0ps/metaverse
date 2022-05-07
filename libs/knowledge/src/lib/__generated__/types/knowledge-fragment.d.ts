
import { Displayable } from './core';
import { Indexable } from './core';
import { Loadable } from './core';

export { Displayable } from './core';
export { Indexable } from './core';
export { Loadable } from './core';


export enum KnowledgeFragmentKind {
  Markdown = 'Markdown',
  Image = 'Image',
  Video = 'Video',
  Component = 'Component',
  RelatedContent = 'RelatedContent',
}



export type KnowledgeFragment = Indexable & (Loadable | Displayable)


export type Root = KnowledgeFragment;
