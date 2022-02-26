import { Appearance } from '../../models/appearance';
import { userAvatars } from '../mocks/user-avatars.data';

export const glbAppearanceMock: Appearance = userAvatars[0].selectedAppearance;

export const imageAppearanceMock: Appearance = {
  ...userAvatars[0].selectedAppearance,
  id: 'image-appearance-id',
  portrait: userAvatars[0].selectedAppearance.variations?.portrait,
};

export const appearancesMocks: Appearance[] = userAvatars[0].appearances;
