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
      filename: 'appearance.glb',
      format: AppearanceFormat.Model,
      src: 'assets/avatars/samples/thomas-anderson/default/appearance.glb',
      portrait: {
        id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
        filename: 'portrait.png',
        format: AppearanceFormat.Image,
        src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
        style: {
          id: 'avataaars',
          properties: {
            skinColor: 'Pale',
            topType: 'LongHairBob',
            hairColor: 'Black',
            facialHairType: 'BeardLight',
            facialHairColor: 'Black',
            eyeType: 'Default',
            eyebrowType: 'Default',
          },
        },
      },
    },
    appearances: [
      {
        id: '1',
        filename: 'appearance.glb',
        format: AppearanceFormat.Model,
        src: 'assets/avatars/samples/thomas-anderson/neo/appearance.glb',
        portrait: {
          id: '690798c7-9bf0-45ce-b76a-7982ee119322',
          filename: 'portrait.png',
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/thomas-anderson/neo/portrait.png',
          style: {
            id: 'avataaars',
            properties: {
              skinColor: 'Pale',
              topType: 'LongHairBob',
              hairColor: 'Black',
              facialHairType: 'BeardLight',
              facialHairColor: 'Black',
              eyeType: 'Default',
              eyebrowType: 'Default',
            },
          },
        },
        previewCamera: {
          position: '0 1.5 0.7',
          rotation: '-5 0 0',
          scale: '0.4 0.4 0.4',
        },
      },
      {
        id: '2',
        filename: '50f2bc3a-fe0c-4036-8546-15a2bc63c1cf',
        format: AppearanceFormat.Model,
        src: 'assets/avatars/samples/thomas-anderson/default/appearance.glb',
        portrait: {
          id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
          filename: 'portrait.png',
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
          style: {
            id: 'avataaars',
            properties: {
              skinColor: 'Pale',
              topType: 'LongHairBob',
              hairColor: 'Black',
              facialHairType: 'BeardLight',
              facialHairColor: 'Black',
              eyeType: 'Default',
              eyebrowType: 'Default',
            },
          },
        },
        previewCamera: {
          position: '0 1.5 0.7',
          rotation: '-5 0 0',
          scale: '1 1 1',
        },
      },
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
      filename: 'appearance.glb',
      format: AppearanceFormat.Model,
      src: 'assets/avatars/samples/elliot-alderson/default/appearance.glb',
      portrait: {
        id: '74f583ff-8c6d-4433-9aa4-4d4a7903dac4',
        filename: 'portrait.png',
        format: AppearanceFormat.Image,
        src: 'assets/avatars/samples/elliot-alderson/default/portrait.png',
        style: {
          id: 'avataaars',
          properties: {},
        },
      },
    },
    appearances: [
      {
        id: '1',
        filename: 'appearance.glb',
        format: AppearanceFormat.Model,
        src: 'assets/avatars/samples/elliot-alderson/default/appearance.glb',
        portrait: {
          id: '4d84c56a-f62b-4df1-a566-a5124cf4f75a',
          filename: 'portrait.png',
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/elliot-alderson/default/portrait.png',
          style: {
            id: 'avataaars',
            properties: {},
          },
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
      filename: 'appearance.glb',
      portrait: {
        id: '8eccca39-ba05-4cf5-a106-3dffd9f563b0',
        filename: 'portrait.png',
        format: AppearanceFormat.Image,
        src: 'assets/avatars/samples/alan-turing/default/portrait.png',
        style: {
          id: 'avataaars',
          properties: {},
        },
      },
    },
    appearances: [
      {
        id: '3',
        filename: 'appearance.glb',
        format: AppearanceFormat.Model,
        src: 'assets/avatars/samples/alan-turing/default/appearance.glb',
        portrait: {
          id: 'ab321f41-8a46-42b4-9e42-29f95042d734',
          filename: 'portrait.png',
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/alan-turing/default/portrait.png',
          style: {
            id: 'avataaars',
            properties: {},
          },
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
