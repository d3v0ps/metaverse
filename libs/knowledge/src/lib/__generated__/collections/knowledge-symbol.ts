/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { KnowledgeSymbol } from '../types';

export type KnowledgeSymbolDocType = KnowledgeSymbol;
export type KnowledgeSymbolDocument = RxDocument<KnowledgeSymbolDocType>;
export type KnowledgeSymbolCollection = RxCollection<KnowledgeSymbolDocument>;

export const knowledgeSymbolSchema = {
  "additionalProperties": false,
  "properties": {
    "fragments": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "icon": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "meta": {
      "$ref": "#/definitions/Meta",
      "items": {
        "type": "object"
      }
    },
    "title": {
      "type": "string"
    }
  },
  "type": "object"
}

export const knowledgeSymbolRxSchema: RxJsonSchema<
  Omit<KnowledgeSymbolDocType, '_attachments'>
> = {
  ...knowledgeSymbolSchema as any,
  title: 'KnowledgeSymbol',
  description: 'Knowledge Symbol',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const KNOWLEDGE_SYMBOL_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'knowledgeSymbol',
    creator: {
      schema: knowledgeSymbolRxSchema,
    },
  },
  multi: true,
};

