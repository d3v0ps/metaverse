import { STORE_APPLICATIONS_COLLECTION_PROVIDER } from '@central-factory/applications/collections/store-applications.collection';
import { USER_APPLICATIONS_COLLECTION_PROVIDER } from '@central-factory/applications/collections/user-applications.collection';
import { USER_ASSETS_COLLECTION_PROVIDER } from '@central-factory/assets/collections/user-assets.collection';
import { USER_AVATARS_COLLECTION_PROVIDER } from '@central-factory/avatars/collections/user-avatars.collection';
import { USER_KNOWLEDGE_COLLECTION_PROVIDER } from '@central-factory/knowledge/collections/user-knowledge.collection';
import { APPLICATION_PERMISSIONS_COLLECTION_PROVIDER } from '@central-factory/permissions/collections/application-permissions.collection';
import { USER_PREFERENCES_COLLECTION_PROVIDER } from '@central-factory/preferences/collections/user-preferences.collection';
import { USER_TOPICS_COLLECTION_PROVIDER } from '@central-factory/topics/collections/user-topics.collection';

export const collectionsProviders = [
  STORE_APPLICATIONS_COLLECTION_PROVIDER,
  USER_APPLICATIONS_COLLECTION_PROVIDER,
  USER_TOPICS_COLLECTION_PROVIDER,
  APPLICATION_PERMISSIONS_COLLECTION_PROVIDER,
  USER_PREFERENCES_COLLECTION_PROVIDER,
  USER_AVATARS_COLLECTION_PROVIDER,
  USER_ASSETS_COLLECTION_PROVIDER,
  USER_KNOWLEDGE_COLLECTION_PROVIDER,
];
