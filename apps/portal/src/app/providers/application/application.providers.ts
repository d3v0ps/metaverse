import { appInitializersProviders } from './app-initializers.providers';
import { startupApplicationsProviders } from './startup-applications.providers';

export const applicationProviders = [
  ...appInitializersProviders,
  ...startupApplicationsProviders,
];
