import { Provider } from '@angular/core';
import {
  APPLICATION_COLLECTION_PROVIDER,
  USER_APPLICATION_COLLECTION_PROVIDER,
} from '@central-factory/applications/__generated__/collections/application';
import { USER_ASSETS_COLLECTION_PROVIDER } from '@central-factory/assets/collections/user-assets.collection';
import { USER_AVATAR_COLLECTION_PROVIDER } from '@central-factory/avatars/__generated__/collections/avatar';
import { USER_KNOWLEDGE_SYMBOL_COLLECTION_PROVIDER } from '@central-factory/knowledge/__generated__/collections/knowledge-symbol';
import { USER_PERMISSION_COLLECTION_PROVIDER } from '@central-factory/permissions/__generated__/collections/permission';
import { USER_PREFERENCES_COLLECTION_PROVIDER } from '@central-factory/preferences/collections/user-preferences.collection';
import { USER_TOPIC_COLLECTION_PROVIDER } from '@central-factory/topics/__generated__/collections/topic';

export const collectionsProviders: Provider[] = [
  APPLICATION_COLLECTION_PROVIDER,
  USER_APPLICATION_COLLECTION_PROVIDER,
  USER_TOPIC_COLLECTION_PROVIDER,
  USER_PERMISSION_COLLECTION_PROVIDER,
  USER_PREFERENCES_COLLECTION_PROVIDER,
  USER_AVATAR_COLLECTION_PROVIDER,
  USER_ASSETS_COLLECTION_PROVIDER,
  USER_KNOWLEDGE_SYMBOL_COLLECTION_PROVIDER,
];
