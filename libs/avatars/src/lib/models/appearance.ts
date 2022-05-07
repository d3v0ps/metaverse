import { AppearanceInfo } from '../__generated__/models';

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

/** The appearance's portrait
 * @deprecated Use variations.portrait instead
 */
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

export type AppearanceVariation = {
  id: string;
  filename: string;
  /** @deprecated use style designer instead */
  format?: AppearanceFormat;
  src?: string;
  style: {
    id: string;
    properties: Record<string, any>;
  };
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

  /** The appearance's portrait
   * @deprecated Use variations.portrait instead
   */
  portrait?: AppearancePortrait;

  /** The appearance's preview camera configuration
   * @deprecated This was used for the old 3D (aframe) model viewer.
   */
  previewCamera?: AppearancePreviewCamera;

  info?: AppearanceInfo;
  variations?: Record<string, AppearanceVariation>;
};
