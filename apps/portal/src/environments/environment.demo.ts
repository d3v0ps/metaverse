import { Environment } from './environment.interface';

/** Development environment config */
export const environment: Environment = {
  production: false,
  demo: false,
  useMocks: false,
  autologin: true,
  showSplashScreen: false,

  citiesUrl:
    'https://parseapi.back4app.com/classes/Continentscountriescities_City?order=-population',
  citiesAppId: 'qJUnkLQtV1PhCFAaQJoLYNTWORGrCbckS81g4FKH', // This is your app's application id
  citiesApiKey: 'eoWJyk5sqEBGUX6gWM3fNpUjsWLURFUXIEwCFP8x', // This is your app's REST API key

  repositoryUrl:
    'https://raw.githubusercontent.com/central-factory/web-application-manifests/main',
  worldUrl: 'assets/worlds/repository.json',
  hostUrl: 'http://localhost:3333/api/001?id=root/systems/programming',
  webUrl: 'http://localhost:3000',
  documentationUrl: 'http://localhost:3000/docs',
  blogUrl: 'http://localhost:3000/blog',
  developersUrl: 'http://localhost:3000/developers',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
