import type { Appearance } from '../../models/appearance';
import { userAvatars } from '../mocks/user-avatars.data';

export const gltfAppearanceMock: Appearance = userAvatars[0].selectedAppearance;

export const appearancesMocks: Appearance[] = userAvatars[0].appearances;
