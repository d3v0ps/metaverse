import { Environment } from './environment.interface';

/** Development environment config */
export const environment: Environment = {
  production: false,
  demo: true,
  useMocks: false,
  autologin: true,
  showSplashScreen: false,

  repositoryUrl:
    'https://raw.githubusercontent.com/central-factory/web-application-manifests/main',
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
