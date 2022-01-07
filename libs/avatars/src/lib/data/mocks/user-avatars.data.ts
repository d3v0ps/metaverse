import { Provider } from '@angular/core';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type { UserAvatarDocType } from '../../collections/user-avatars.collection';

export const userAvatars: UserAvatarDocType[] = [
  {
    id: '1',
    welcomeMessage: 'Hello!',
    name: 'Thomas Anderson',
    title: 'Software Engineer',
    selectedAppearance: {
      format: 'readyplayer.me',
      src: 'https://nerdreactor.com/wp-content/uploads/2021/12/The-Matrix-Awakens-An-Unreal-Engine-5-Experience-500x500_c.jpg',
      smallPreviewUrl:
        'https://nerdreactor.com/wp-content/uploads/2021/12/The-Matrix-Awakens-An-Unreal-Engine-5-Experience-500x500_c.jpg',
    },
    appearances: [
      {
        format: 'gltf',
        src: 'assets/avatars/samples/ed4aa425-9e13-4e51-9f2c-557dfe0db7ab/ed4aa425-9e13-4e51-9f2c-557dfe0db7ab.glb',
        smallPreviewUrl:
          'https://nerdreactor.com/wp-content/uploads/2021/12/The-Matrix-Awakens-An-Unreal-Engine-5-Experience-500x500_c.jpg',
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
    name: 'Elliot Alderson',
    title: 'Software Engineer',
    selectedAppearance: {
      format: 'readyplayer.me',
      src: 'data:image/jpeg;base64,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',
      smallPreviewUrl:
        'data:image/jpeg;base64,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',
    },
    appearances: [],
    scopes: [],
    skills: [],
  },
  {
    id: '3',
    welcomeMessage: 'Hello!',
    name: 'Alan Turing',
    title: 'Software Engineer',
    selectedAppearance: {
      format: 'readyplayer.me',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg',
      smallPreviewUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg',
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
