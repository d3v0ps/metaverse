import { AppearanceInfo } from './appearance-info';

export enum AppearanceFormat {
  /** 3D Model */
  Model = 'Model',
  /** Image */
  Image = 'Image',
}

export type AppearanceStyle = {
  id: string;
  properties: Record<string, any>;
};

/** The appearance's portrait */
export type AppearancePortrait = {
  /** The portrait's ID */
  id: string;
  /** The portrait's Filename */
  filename: string;
  /** The portrait's Format */
  format: AppearanceFormat;
  /** The portrait's Src */
  src?: string;
  style: AppearanceStyle;
};

/** The appearance's preview camera configuration
 * @deprecated This was used for the old 3D (aframe) model viewer.
 */
export type AppearancePreviewCamera = {
  /** The appearance's preview camera position */
  position?: string;
  /** The appearance's preview camera rotation */
  rotation?: string;
  /** The appearance's preview camera scale */
  scale?: string;
};

/** An Avatar's appearance */
export type Appearance = {
  /** The appearance's ID */
  id: string;
  /** The portrait's Filename */
  filename: string;
  /** The appearance's format */
  format: AppearanceFormat;
  /** The appearance's src url */
  src?: string;

  /** The appearance's portrait */
  portrait: AppearancePortrait;

  /** The appearance's preview camera configuration
   * @deprecated This was used for the old 3D (aframe) model viewer.
   */
  previewCamera?: AppearancePreviewCamera;

  info?: AppearanceInfo;
};
