import { Environment } from './environment.interface';

/** Production environment config */
export const environment: Environment = {
  production: true,
  demo: false,
  useMocks: false,
  autologin: false,
  showSplashScreen: true,

  citiesUrl:
    'https://parseapi.back4app.com/classes/Continentscountriescities_City?order=-population',
  citiesAppId: 'qJUnkLQtV1PhCFAaQJoLYNTWORGrCbckS81g4FKH', // This is your app's application id
  citiesApiKey: 'eoWJyk5sqEBGUX6gWM3fNpUjsWLURFUXIEwCFP8x', // This is your app's REST API key

  repositoryUrl:
    'https://raw.githubusercontent.com/central-factory/web-application-manifests/main',
  worldUrl: 'assets/worlds/repository.json',
  hostUrl: 'http://localhost:3333/api/001?id=root/systems/programming',
  webUrl: 'https://central-factory.github.io/metaverse/apps/codex',
  documentationUrl:
    'https://central-factory.github.io/metaverse/apps/codex/docs',
  blogUrl: 'https://central-factory.github.io/metaverse/apps/codex/blog',
  developersUrl:
    'https://central-factory.github.io/metaverse/apps/codex/developers',
};
