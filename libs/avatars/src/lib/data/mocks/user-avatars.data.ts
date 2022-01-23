import { Provider } from '@angular/core';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type { UserAvatarDocType } from '../../collections/user-avatars.collection';
import { AppearanceFormat } from '../../models/appearance';

export const userAvatars: UserAvatarDocType[] = [
  {
    id: '1',
    welcomeMessage: 'Hello!',
    name: 'Thomas Anderson',
    title: 'Software Engineer',
    selectedAppearance: {
      id: '2',
      format: AppearanceFormat.Model,
      src: 'assets/avatars/samples/thomas-anderson/default/appearance.glb',
      portrait: {
        format: AppearanceFormat.Image,
        src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
      },
    },
    appearances: [
      {
        id: '1',
        format: AppearanceFormat.Model,
        src: 'assets/avatars/samples/thomas-anderson/neo/appearance.glb',
        portrait: {
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/thomas-anderson/neo/portrait.png',
        },
        previewCamera: {
          position: '0 1.5 0.7',
          rotation: '-5 0 0',
          scale: '0.4 0.4 0.4',
        },
      },
      {
        id: '2',
        format: AppearanceFormat.Model,
        src: 'assets/avatars/samples/thomas-anderson/default/appearance.glb',
        portrait: {
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
        },
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
      id: '1',
      format: AppearanceFormat.Model,
      src: 'assets/avatars/samples/elliot-alderson/default/appearance.glb',
      portrait: {
        format: AppearanceFormat.Image,
        src: 'assets/avatars/samples/elliot-alderson/default/portrait.png',
      },
    },
    appearances: [
      {
        id: '1',
        format: AppearanceFormat.Model,
        src: 'assets/avatars/samples/elliot-alderson/default/appearance.glb',
        portrait: {
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/elliot-alderson/default/portrait.png',
        },
      },
    ],
    scopes: [],
    skills: [],
  },
  {
    id: '3',
    welcomeMessage: 'Hello!',
    name: 'Alan Turing',
    title: 'Software Engineer',
    selectedAppearance: {
      id: '3',
      format: AppearanceFormat.Model,
      src: 'assets/avatars/samples/alan-turing/default/appearance.glb',
      portrait: {
        format: AppearanceFormat.Image,
        src: 'assets/avatars/samples/alan-turing/default/portrait.png',
      },
    },
    appearances: [
      {
        id: '3',
        format: AppearanceFormat.Model,
        src: 'assets/avatars/samples/alan-turing/default/appearance.glb',
        portrait: {
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/alan-turing/default/portrait.png',
        },
      },
    ],
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
