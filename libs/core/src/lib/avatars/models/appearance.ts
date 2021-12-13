/** An Avatar's appearance */
export interface Appearance {
  /** The appearance's format */
  format: string;
  /** The appearance's src url */
  src: string;
  /** The appearance's small preview url */
  smallPreviewUrl: string;
  /** The appearance's preview camera configuration */
  previewCamera?: {
    /** The appearance's preview camera position */
    position?: string;
    /** The appearance's preview camera rotation */
    rotation?: string;
    /** The appearance's preview camera scale */
    scale?: string;
  };
}
