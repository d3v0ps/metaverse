/** Environment interface for the portal app */
export interface Environment {
  /** Is production environment */
  production: boolean;
  /** Is demo environment */
  demo: boolean;
  /** Use mocks */
  useMocks: boolean;
  /** Autologin */
  autologin: boolean;
  /** Show splash screen */
  showSplashScreen: boolean;

  repositoryUrl: string;
  worldUrl: string;
  /** Url with the Metaverse's web site */
  webUrl: string;
  /** Url with the Metaverse's documentation site */
  documentationUrl: string;
  /** Url with the Metaverse's blog site */
  blogUrl: string;
  /** Url with the Metaverse's developers site */
  developersUrl: string;
}
