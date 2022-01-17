export enum AppearanceFormat {
  /** 3D Model */
  Model = 'Model',
  /** Image */
  Image = 'Image',
}

/** An Avatar's appearance */
export interface Appearance {
  /** The appearance's ID */
  id: string;
  /** The appearance's format */
  format: AppearanceFormat;
  /** The appearance's src url */
  src: string;

  /** The appearance's portrait */
  portrait: {
    format: AppearanceFormat;
    src: string;
  };

  /** The appearance's preview camera configuration
   * @deprecated This was used for the old 3D (aframe) model viewer.
   */
  previewCamera?: {
    /** The appearance's preview camera position */
    position?: string;
    /** The appearance's preview camera rotation */
    rotation?: string;
    /** The appearance's preview camera scale */
    scale?: string;
  };
}
