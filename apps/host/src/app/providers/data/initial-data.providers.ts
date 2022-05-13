import { USER_APPLICATIONS_INITIAL_DATA_PROVIDER } from '@central-factory/applications/data/base/user-applications.data';
import { CUSTOMIZATION_INITIAL_DATA_PROVIDER } from '@central-factory/preferences/data/base/customization/customization.data';
import { USER_TOPICS_INITIAL_DATA_PROVIDER } from '@central-factory/topics/data/base/user-topics.data';

export const initialDataProviders = [
  USER_APPLICATIONS_INITIAL_DATA_PROVIDER,
  USER_TOPICS_INITIAL_DATA_PROVIDER,
  CUSTOMIZATION_INITIAL_DATA_PROVIDER,
];
