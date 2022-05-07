import type { Avatar } from '@central-factory/avatars/__generated__/models';

/* eslint-disable @typescript-eslint/no-explicit-any */
export enum MimeType {
  TEXT_PLAIN = 'text/plain',
  TEXT_HTML = 'text/html',
  TEXT_MARKDOWN = 'text/markdown',
  IMAGE_JPEG = 'image/jpeg',
  IMAGE_GIF = 'image/gif',
  IMAGE_SVG = 'image/svg+xml',
  IMAGE_TIFF = 'image/tiff',
  IMAGE_WEBP = 'image/webp',
  AUDIO_MPEG = 'audio/mpeg',
  AUDIO_MIDI = 'audio/mdi',
  AUDIO_OGG = 'audio/ogg',
  AUDIO_WEBM = 'audio/webm',
  VIDEO_WEBM = 'video/webm',
  VIDEO_MP4 = 'video/mp4',
  VIDEO_MPEG = 'video/mpeg',
  VIDEO_OGG = 'video/ogg',
  APPLICATION_JSON = 'application/json',
  APPLICATION_XML = 'application/xml',
  APPLICATION_PDF = 'application/pdf',
  APPLICATION_ZIP = 'application/zip',
  APPLICATION_OCTET_STREAM = 'application/octet-stream',
}

/**
 * ### The Elements of a Content Type:
 * * **Purpose**: Different forms of content bring goals to life. For example, the BBC aims to inform, educate, and entertain. Their content types, such as news, commentaries, and documentaries, bring their purpose to life.
 * * **Structure**: The structure of a piece of content serves two purposes: 1) it helps audiences know what to expect, and 2) it helps organizations reuse aspects of attributes of the structure in new ways. Think, for example, of a statistical chart from a white paper that’s reused in a blog post.
 * * **Social acceptance**: Content types help build a community. For instance, Buzzfeed’s catchy, gossipy content has a loyal following.
 */
export enum ContentType {
  //#region MimeType bases
  TEXT = 'text',
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
  JSON = 'json',
  /** Use `application/octet-stream` for MimeType  */
  UNKNOWN = 'unknown',
  //#endregion

  //#region Web2

  //#region TEXT & OTHER HTML VARIATIONS
  EBOOK = 'ebook',
  NEWS = 'news',
  COMMENT = 'comment',
  EMAIL = 'email',
  PAGE = 'page',
  //#endregion

  //#region VIDEO
  DOCUMENTARY = 'docummentary',
  MOVIE = 'movie',
  SHOW = 'show',
  CHANNEL = 'channel',
  //#endregion

  //#region AUDIO
  SONG = 'song',
  SONG_ALBUM = 'song-album',
  //#endregion

  //#endregion

  //#region Web3
  NFT = 'nft',
  //#endregion

  //#region Metaverse
  AVATAR = 'avatar',
  ASSET = 'asset',
  APPLICATION = 'application',
  DOCUMENT = 'document',
  ARTICLE = 'article',
  //#endregion
}

export type TextContent = string;

export type ImageContent = string;
export type AudioContent = string;
export type VideoContent = string;
export type JSONContent = any;
export type UnknownContent = unknown;
export type PageContent = string;

export type EmailOriginatorHeader = {
  from: string;
  sender: string;
  replyTo: string;
};

export type EmailDestinationHeader = {
  to: string;
  cc: string;
  bcc: string;
};

export type EmailTraceHeader = {
  received: string;
  returnPath: string;
};

export type EmailHeader = EmailOriginatorHeader &
  EmailDestinationHeader &
  EmailTraceHeader;

export type EmailContent = {
  header: EmailHeader;
  subject: string;
  body: string;
};

export type EbookChapter = {
  title: string;
  content: string;
};

export type EbookContent = {
  title: string;
  body: string;
  chapters: EbookChapter[];
};

export type NewsContent = {
  author: string;
  title: string;
  body: string;
};

export type CommentContent = {
  author: string;
  body: string;
};

export type DocumentaryContent = {
  title: string;
  body: string;
  ratings: Record<string, number>;
};
export type MovieContent = {
  title: string;
  body: string;
  ratings: Record<string, number>;
};

export type ShowContent = {
  title: string;
};
export type ChannelContent = string;
export type LiveChannelContent = string;
export type SocialMediaContent = string;
export type NFTContent = string;
export type AvatarContent = Avatar;
export type AssetContent = string;
export type ApplicationContent = string;
export type DocumentContent = string;
export type ArticleContent = string;

export type MetaAuthor = {
  id: string;
  name: string;
};

export type Meta = {
  mimeType?: MimeType;
  contentType?: ContentType;
  taxonomy?: string;
  index?: number;
  coverImage?: string;
  tags?: string[];
  sourceUrl?: string;
  authors?: MetaAuthor[];
  title?: string;
  description?: string;
  queryString?: string;
};

export type Content = any;

export type Section = {
  id: string;
  title: string;
  content?: Content;
  documents?: (Partial<Document> & Pick<Document, 'id'>)[];
};

export type Document = {
  id: string;
  meta: Meta;
  content?: Content;
  sections?: Section[];
};
