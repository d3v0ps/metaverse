/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Provider } from '@angular/core';
import { ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { RxDocument, RxCollection, RxJsonSchema } from 'rxdb';
import { KnowledgeFragment } from '../types';

export type KnowledgeFragmentDocType = KnowledgeFragment;
export type KnowledgeFragmentDocument = RxDocument<KnowledgeFragmentDocType>;
export type KnowledgeFragmentCollection = RxCollection<KnowledgeFragmentDocument>;

export const knowledgeFragmentSchema = {
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "meta": {
      "$ref": "#/definitions/Meta",
      "items": {
        "type": "object"
      }
    },
    "src": {
      "type": "string"
    },
    "component": {
      "type": "string"
    },
    "content": {
      "type": "string"
    }
  },
  "required": [
    null,
    null,
    "content"
  ]
}

export const knowledgeFragmentRxSchema: RxJsonSchema<
  Omit<KnowledgeFragmentDocType, '_attachments'>
> = {
  ...knowledgeFragmentSchema as any,
  title: 'KnowledgeFragment',
  description: 'Knowledge Fragment',
  version: 0,
  keyCompression: true,
  primaryKey: 'id',
  type: 'object',
  attachments: {
    encrypted: false,
  },
};

export const KNOWLEDGE_FRAGMENT_COLLECTION_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_BASE_COLLECTIONS_TOKEN,
  useValue: {
    name: 'knowledgeFragment',
    creator: {
      schema: knowledgeFragmentRxSchema,
    },
  },
  multi: true,
};

