import { Appearance, AppearanceFormat } from '../../models/appearance';
import { userAvatars } from '../mocks/user-avatars.data';

export const glbAppearanceMock: Appearance = {
  id: 'image-appearance-id',
  filename: '',
  format: AppearanceFormat.Image,
};

export const imageAppearanceMock: Appearance = {
  id: 'image-appearance-id',
  filename: '',
  format: AppearanceFormat.Image,
};

export const appearancesMocks: Appearance[] = userAvatars[0].appearances;
