/** Environment interface for the portal app */
export interface Environment {
  /** Is production environment */
  production: boolean;
  /** Url with the Metaverse's web site */
  webUrl: string;
  /** Url with the Metaverse's documentation site */
  documentationUrl: string;
  /** Url with the Metaverse's blog site */
  blogUrl: string;
  /** Url with the Metaverse's developers site */
  developersUrl: string;
}
