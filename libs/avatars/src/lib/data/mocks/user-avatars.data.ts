import { Provider } from '@angular/core';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type { UserAvatarDocType } from '../../collections/user-avatars.collection';

export const userAvatars: UserAvatarDocType[] = [
  {
    id: '1',
    welcomeMessage: 'Hello!',
    name: 'John',
    title: 'Software Engineer',
    selectedAppearance: {
      format: 'readyplayer.me',
      src: 'assets/avatar-large.png',
      smallPreviewUrl: 'assets/avatar-144.png',
    },
    appearances: [
      {
        format: 'gltf',
        src: 'assets/avatars/samples/ed4aa425-9e13-4e51-9f2c-557dfe0db7ab/ed4aa425-9e13-4e51-9f2c-557dfe0db7ab.glb',
        smallPreviewUrl: 'assets/avatar-144.png',
        previewCamera: {
          position: '0 1.5 0.7',
          rotation: '-5 0 0',
          scale: '0.4 0.4 0.4',
        },
      },
      {
        format: 'gltf',
        src: 'assets/avatars/samples/65989f77-c8bf-4542-9e8a-d0f39eb76662/65989f77-c8bf-4542-9e8a-d0f39eb76662.glb',
        smallPreviewUrl: 'assets/avatar-144.png',
        previewCamera: {
          position: '0 1.5 0.7',
          rotation: '-5 0 0',
          scale: '1 1 1',
        },
      },
      // {
      //   format: 'readyplayer.me',
      //   src: 'assets/avatar-large.png',
      //   smallPreviewUrl: 'assets/avatar-144.png',
      // },
      // {
      //   format: 'Meta',
      //   src: 'assets/avatar-large.png',
      //   smallPreviewUrl: 'assets/avatar-144.png',
      // },
      // {
      //   format: 'NVDIA Omniverse',
      //   src: 'assets/avatar-large.png',
      //   smallPreviewUrl: 'assets/avatar-144.png',
      // },
    ],
    scopes: [
      {
        integration: 'CF',
        domain: 'Calendars',
        scope: 'manage',
      },
      {
        integration: 'Google',
        domain: 'Calendars',
        scope: 'manage',
      },
      {
        integration: 'NFT',
        domain: 'Tokens',
        scope: 'manage',
      },
    ],
    skills: [
      {
        domain: 'calendar',
        scope: 'manage',
        skill: 'create',
      },
      {
        domain: 'event',
        scope: 'manage',
        skill: 'create',
      },
      {
        domain: 'assets',
        scope: 'manage',
        skill: 'trade',
      },
    ],
  },
  {
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
  },
  {
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
  },
];

export const USER_AVATARS_MOCKS_DATA_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: 'useravatars',
    upsert: true,
    data: userAvatars,
  },
  multi: true,
};
