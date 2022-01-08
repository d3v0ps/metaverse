import { Environment } from './environment.interface';

/** Production environment config */
export const environment: Environment = {
  production: true,
  useMocks: true,
  autologin: false,
  showSplashScreen: true,

  webUrl: 'https://aitorllamas.com/metaverse/apps/codex',
  documentationUrl: 'https://aitorllamas.com/metaverse/apps/codex/docs',
  blogUrl: 'https://aitorllamas.com/metaverse/apps/codex/blog',
  developersUrl: 'https://aitorllamas.com/metaverse/apps/codex/developers',
};
