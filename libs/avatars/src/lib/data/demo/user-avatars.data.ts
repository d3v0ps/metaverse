import { Provider } from '@angular/core';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type { UserAvatarDocType } from '../../collections/user-avatars.collection';
import { AppearanceFormat } from '../../models/appearance';

export const userAvatars: UserAvatarDocType[] = [
  {
    id: 'x0',
    welcomeMessage: 'Hello!',
    name: 'The Old Man',
    title: 'Unknown',
    selectedAppearance: {
      id: '1',
      filename: 'appearance.glb',
      format: AppearanceFormat.Model,
      src: 'assets/avatars/samples/thomas-anderson/default/appearance.glb',
      variations: {
        portrait: {
          id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
          filename: 'portrait.png',
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
          style: {
            id: 'avataaars',
            properties: {
              skinColor: 'Pale',
              topType: 'LongHairBun',
              hairColor: 'SilverGray',
              facialHairType: 'BeardLight',
              facialHairColor: 'Platinum',
              eyeType: 'Close',
              eyebrowType: 'Default',
              mouthType: 'Twinkle',
              clotheType: 'ShirtVNeck',
            },
          },
        },
        dim2: {
          id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
          filename: 'portrait.png',
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
          style: {
            id: 'lpc',
            properties: {
              bodyType: 'tanned2',
              bodyVariation: 'male',
              torso: 'chain/mail',
              hair: 'longknot',
              hairColor: 'white',
              facialHair: 'mustache',
            },
          },
        },
        dim3: {
          id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
          filename: 'portrait.png',
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
          style: {
            id: 'dim3-file',
            properties: {
            },
          },
        },
      },
      portrait: {
        id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
        filename: 'portrait.png',
        format: AppearanceFormat.Image,
        src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
        style: {
          id: 'avataaars',
          properties: {
            skinColor: 'Pale',
            topType: 'LongHairBun',
            hairColor: 'SilverGray',
            facialHairType: 'BeardLight',
            facialHairColor: 'Platinum',
            eyeType: 'Close',
            eyebrowType: 'Default',
            mouthType: 'Twinkle',
            clotheType: 'ShirtVNeck',
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
        variations: {
          portrait: {
            id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
            filename: 'portrait.png',
            format: AppearanceFormat.Image,
            src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
            style: {
              id: 'avataaars',
              properties: {
                skinColor: 'Pale',
                topType: 'LongHairBun',
                hairColor: 'SilverGray',
                facialHairType: 'BeardLight',
                facialHairColor: 'Platinum',
                eyeType: 'Close',
                eyebrowType: 'Default',
                mouthType: 'Twinkle',
                clotheType: 'ShirtVNeck',
              },
            },
          },
          dim2: {
            id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
            filename: 'portrait.png',
            format: AppearanceFormat.Image,
            src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
            style: {
              id: 'lpc',
              properties: {
                bodyType: 'tanned2',
                bodyVariation: 'male',
                torso: 'chain/mail',
                hair: 'longknot',
                hairColor: 'white',
                facialHair: 'mustache',
              },
            },
          },
          dim3: {
            id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
            filename: 'portrait.png',
            format: AppearanceFormat.Image,
            src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
            style: {
              id: 'dim3-file',
              properties: {
              },
            },
          },
        },
        portrait: {
          id: '690798c7-9bf0-45ce-b76a-7982ee119322',
          filename: 'portrait.png',
          format: AppearanceFormat.Image,
          src: 'assets/avatars/samples/thomas-anderson/neo/portrait.png',
          style: {
            id: 'avataaars',
            properties: {
              skinColor: 'Pale',
              topType: 'LongHairBun',
              hairColor: 'SilverGray',
              facialHairType: 'BeardLight',
              facialHairColor: 'Platinum',
              eyeType: 'Close',
              eyebrowType: 'Default',
              mouthType: 'Twinkle',
              clotheType: 'ShirtVNeck',
              clotheColor: 'Black'
            },
          },
        },
        previewCamera: {
          position: '0 1.5 0.7',
          rotation: '-5 0 0',
          scale: '0.4 0.4 0.4',
        },
      },
    ],
    scopes: [
    ],
    skills: [
    ],
  },
];

export const USER_AVATARS_DEMO_DATA_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: 'useravatars',
    upsert: true,
    data: userAvatars,
  },
  multi: true,
};
