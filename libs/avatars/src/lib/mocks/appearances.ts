import { Appearance } from '../models/appearance';

export const gltfAppearanceMock: Appearance = {
  format: 'gltf',
  src: 'assets/avatars/samples/ed4aa425-9e13-4e51-9f2c-557dfe0db7ab/ed4aa425-9e13-4e51-9f2c-557dfe0db7ab.glb',
  smallPreviewUrl: 'assets/avatar-144.png',
  previewCamera: {
    position: '0 1.5 0.7',
    rotation: '-5 0 0',
    scale: '0.4 0.4 0.4',
  },
};

export const appearancesMocks: Appearance[] = [
  gltfAppearanceMock,
  gltfAppearanceMock,
];
