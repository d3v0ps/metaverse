import { Appearance } from '../../models/appearance';
import { userAvatars } from '../mocks/user-avatars.data';

export const glbAppearanceMock: Appearance = userAvatars[0].selectedAppearance;

export const imageAppearanceMock: Appearance = {
  ...userAvatars[0].selectedAppearance.portrait,
  id: 'image-appearance-id',
  portrait: userAvatars[0].selectedAppearance.portrait,
};

export const appearancesMocks: Appearance[] = userAvatars[0].appearances;
