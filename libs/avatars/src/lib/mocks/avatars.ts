import { Avatar } from '../models/avatar';
import { appearancesMocks } from './appearances';
import { scopesMocks } from './scopes';
import { skillsMocks } from './skills';

export const avatarMock1: Avatar = {
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
  physics: [],
  roles: [],
  routines: [],
};

export const avatarMock2: Avatar = {
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
  physics: [],
  roles: [],
  routines: [],
};

export const avatarMock3: Avatar = {
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
  physics: [],
  roles: [],
  routines: [],
};

export const avatarsMocks: Avatar[] = [avatarMock1, avatarMock2, avatarMock3];
