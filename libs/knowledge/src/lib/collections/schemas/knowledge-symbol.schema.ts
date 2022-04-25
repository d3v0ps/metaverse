import type {
  RxCollection,
  RxDocument,
  RxJsonSchema,
} from 'rxdb/dist/types/types';
import type { KnowledgeSymbol } from '../../models/knowledge-symbol';

export type KnowledgeSymbolDocType = KnowledgeSymbol & {
  createdAt?: Date;
  updatedAt?: Date;
  _attachments?: any;
};

export type KnowledgeSymbolDocument = RxDocument<KnowledgeSymbolDocType>;

export type UserKnowledgeSymbolsCollection =
  RxCollection<KnowledgeSymbolDocument>;

export const knowledgeSymbolSchema: RxJsonSchema<
  Omit<KnowledgeSymbolDocType, '_attachments'>
> = {
  title: 'Knowledge Symbols',
  description: 'Knowledge Symbols',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'Id',
    },
    meta: {
      type: 'object',
      description: 'Meta',
    },
    title: {
      type: 'string',
      description: 'Title',
    },
    icon: {
      type: 'string',
      description: 'Title',
    },
    fragments: {
      type: 'array',
      items: {
        type: 'object',
        description: 'Symbol Fragment',
      },
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
      description: 'Created at',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
      description: 'Updated at',
    },
  },
  attachments: {
    encrypted: false,
  },
};
