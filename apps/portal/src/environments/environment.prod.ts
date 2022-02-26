import { Environment } from './environment.interface';

/** Production environment config */
export const environment: Environment = {
  production: true,
  demo: false,
  useMocks: false,
  autologin: false,
  showSplashScreen: true,

  repositoryUrl:
    'https://raw.githubusercontent.com/central-factory/web-application-manifests/main',
  webUrl: 'https://aitorllamas.com/metaverse/apps/codex',
  documentationUrl: 'https://aitorllamas.com/metaverse/apps/codex/docs',
  blogUrl: 'https://aitorllamas.com/metaverse/apps/codex/blog',
  developersUrl: 'https://aitorllamas.com/metaverse/apps/codex/developers',
};
