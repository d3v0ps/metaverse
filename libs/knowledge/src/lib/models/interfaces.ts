import {
  Displayable,
  Indexable,
  KnowledgeFragment,
  Loadable,
} from '../__generated__/models';

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
