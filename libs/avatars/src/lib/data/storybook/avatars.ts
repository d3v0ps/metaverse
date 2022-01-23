import type { Avatar } from '../../models/avatar';
import { userAvatars } from '../mocks/user-avatars.data';

export const avatarMock1: Avatar = userAvatars[0];

export const avatarMock2: Avatar = userAvatars[1];

export const avatarMock3: Avatar = userAvatars[2];

export const avatarsMocks: Avatar[] = [avatarMock1, avatarMock2, avatarMock3];
