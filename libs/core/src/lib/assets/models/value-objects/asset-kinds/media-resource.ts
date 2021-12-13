export enum MediaResourceKind {
  Image = 'image',
  Video = 'video',
  Audio = 'audio',
  Document = 'document',
  Other = 'other',
}

export interface MediaResource {
  kind: MediaResourceKind;
  url?: string;
}
