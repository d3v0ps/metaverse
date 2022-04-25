/* eslint-disable @typescript-eslint/no-explicit-any */

export enum NoteFragmentKind {
  Markdown = 'Markdown',
  Text = 'Text',
  Image = 'Image',
  Video = 'Video',
  Variation = 'Variation',
  Stats = 'Stats',
}

export type MarkdownFragment = { content: string };
export type TextFragment = { content: string };
export type ImageFragment = { content: string };
export type VideoFragment = { content: string };
export type VariationFragment = { content: { id: string; properties: Record<string, any> }; };
export type StatsFragment = { content: { id: string; properties: Record<string, any> }; };


export type NoteFragment = {
  kind: NoteFragmentKind;
} & MarkdownFragment | TextFragment | ImageFragment | VideoFragment | VariationFragment | StatsFragment;

export type NoteHeading = {
  title: string;
  subtitle?: string;
  description?: string;
  cover?: string;
  statistics?: Record<string, any>;
};

export type Note = {
  id: string;
  heading: NoteHeading,
  fragments: NoteFragment[];
}
