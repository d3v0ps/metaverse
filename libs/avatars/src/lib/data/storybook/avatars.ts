import type { Avatar } from '../../models/avatar';
import { appearancesMocks } from './appearances';
import { scopesMocks } from './scopes';
import { skillsMocks } from './skills';

export const avatarMock1: Avatar = {
  id: '1',
  welcomeMessage: 'Hello!',
  name: 'John',
  title: 'Software Engineer',
  selectedAppearance: {
    format: 'readyplayer.me',
    src: 'assets/avatar-large.png',
    smallPreviewUrl: 'assets/avatar-144.png',
  },
  appearances: appearancesMocks,
  scopes: scopesMocks,
  skills: skillsMocks,
};

export const avatarMock2: Avatar = {
  id: '2',
  welcomeMessage: 'Hello!',
  name: 'John2',
  title: 'Software Engineer',
  selectedAppearance: {
    format: 'readyplayer.me',
    src: 'assets/avatar-large.png',
    smallPreviewUrl: 'assets/avatar-144.png',
  },
  appearances: [],
  scopes: [],
  skills: [],
};

export const avatarMock3: Avatar = {
  id: '3',
  welcomeMessage: 'Hello!',
  name: 'John3',
  title: 'Software Engineer',
  selectedAppearance: {
    format: 'readyplayer.me',
    src: 'assets/avatar-large.png',
    smallPreviewUrl: 'assets/avatar-144.png',
  },
  appearances: [],
  scopes: [],
  skills: [],
};

export const avatarsMocks: Avatar[] = [avatarMock1, avatarMock2, avatarMock3];
