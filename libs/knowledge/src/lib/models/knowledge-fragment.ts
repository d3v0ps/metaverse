export enum KnowledgeFragmentKind {
  Markdown = 'Markdown',
  // Text = 'Text',
  Image = 'Image',
  Video = 'Video',
  Component = 'Component',
  RelatedContent = 'RelatedContent',
}

export type Meta = {
  title: string;
  subtitle?: string;
  description?: string;
  cover?: string;
};

export type Indexable = { id: string; meta: Meta };
export type Loadable = { src: string };
export type Displayable = { content: string; component?: string };

export const isLoadable = (
  fragment: KnowledgeFragment
): fragment is Indexable & Loadable => {
  return 'src' in fragment;
};
export const isDisplayable = (
  fragment: KnowledgeFragment
): fragment is Indexable & Displayable => {
  return 'content' in fragment;
};

export type KnowledgeFragment = Indexable & (Loadable | Displayable);
