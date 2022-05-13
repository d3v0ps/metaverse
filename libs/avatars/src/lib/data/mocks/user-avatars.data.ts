import { Provider } from '@angular/core';
import { Gender } from '@central-factory/avatars/__generated__/models';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/entity-manager';
import {
  AvatarDocType,
  USER_AVATAR_COLLECTION_NAME,
} from '../../__generated__/collections/avatar';

export const userAvatars: AvatarDocType[] = [
  {
    id: '1',
    identity: {
      quote: 'Hello!',
      givenName: 'Thomas Anderson',
      title: 'Software Engineer',
    },
    appearance: {
      body: {
        style: Gender.Male,
      },
    },
    relationships: [],
    appearances: [
      {
        id: '1',
        filename: 'appearance.glb',
        format: '',
        src: 'assets/avatars/samples/thomas-anderson/neo/appearance.glb',
        variations: {
          portrait: {
            id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
            filename: 'portrait.png',
            format: '',
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
                mouthType: 'Default',
                clotheType: 'ShirtCrewNeck',
                clotheColor: 'Black',
              },
            },
          },
          dim2: {
            id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
            filename: 'portrait.png',
            format: '',
            src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
            style: {
              id: 'lpc',
              properties: {
                species: 'Human',
                bodyType: 'Male',
              },
            },
          },
          dim3: {
            id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
            filename: 'portrait.png',
            format: '',
            src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
            style: {
              id: 'dim3-file',
              properties: {},
            },
          },
        },
        portrait: {
          id: '690798c7-9bf0-45ce-b76a-7982ee119322',
          filename: 'portrait.png',
          format: '',
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
              mouthType: 'Default',
              clotheType: 'ShirtCrewNeck',
              clotheColor: 'Black',
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
        filename: 'appearance.glb',
        format: '',
        src: 'assets/avatars/samples/thomas-anderson/default/appearance.glb',
        variations: {
          portrait: {
            id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
            filename: 'portrait.png',
            format: '',
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
                mouthType: 'Default',
                clotheType: 'BlazerShirt',
              },
            },
          },
          dim2: {
            id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
            filename: 'portrait.png',
            format: '',
            src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
            style: {
              id: 'lpc',
              properties: {
                species: 'Human',
                bodyType: 'Male',
              },
            },
          },
          dim3: {
            id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
            filename: 'portrait.png',
            format: '',
            src: 'assets/avatars/samples/thomas-anderson/default/portrait.png',
            style: {
              id: 'dim3-file',
              properties: {},
            },
          },
        },
        portrait: {
          id: '5a6ecf92-141f-46ca-aa9f-b67c009a5df1',
          filename: 'portrait.png',
          format: '',
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
              mouthType: 'Default',
              clotheType: 'BlazerShirt',
            },
          },
        },
      },
    ],
  },
  {
    id: '2',
    identity: {
      quote: 'Hello!',
      givenName: 'Elliot Alderson',
      title: 'Software Engineer',
    },
    appearance: {
      body: {
        style: Gender.Male,
      },
    },
    relationships: [],
    appearances: [
      {
        id: '1',
        filename: 'appearance.glb',
        format: '',
        src: 'assets/avatars/samples/elliot-alderson/default/appearance.glb',
        portrait: {
          id: '74f583ff-8c6d-4433-9aa4-4d4a7903dac4',
          filename: 'portrait.png',
          format: '',
          src: 'assets/avatars/samples/elliot-alderson/default/portrait.png',
          style: {
            id: 'avataaars',
            properties: {
              skinColor: 'Pale',
              topType: 'ShortHairShortRound',
              hairColor: 'Black',
              facialHairType: null,
              facialHairColor: null,
              eyeType: 'Surprised',
              eyebrowType: 'Default',
              mouthType: 'Serious',
              clotheType: 'Hoodie',
              clotheColor: 'Black',
            },
          },
        },
      },
    ],
  },
  {
    id: '3',
    identity: {
      quote: 'Hello!',
      givenName: 'Alan Turing',
      title: 'Software Engineer',
    },
    appearance: {
      body: {
        style: Gender.Male,
      },
    },
    relationships: [],
    appearances: [
      {
        id: '3',
        format: '',
        src: 'assets/avatars/samples/alan-turing/default/appearance.glb',
        filename: 'appearance.glb',
        variations: {
          portrait: {
            id: '8eccca39-ba05-4cf5-a106-3dffd9f563b0',
            filename: 'portrait.png',
            format: '',
            src: 'assets/avatars/samples/alan-turing/default/portrait.png',
            style: {
              id: 'avataaars',
              properties: {
                skinColor: 'Pale',
                topType: 'ShortHairShortWaved',
                hairColor: 'Black',
                facialHairType: null,
                facialHairColor: null,
                eyeType: 'Default',
                eyebrowType: 'Default',
                mouthType: 'Twinkle',
                clotheType: 'BlazerSweater',
                clotheColor: 'Black',
              },
            },
          },
          dim2: {
            id: '8eccca39-ba05-4cf5-a106-3dffd9f563b0',
            filename: 'portrait.png',
            format: '',
            src: 'assets/avatars/samples/alan-turing/default/portrait.png',
            style: {
              id: 'lpc',
              properties: {
                species: 'Human',
                bodyType: 'Male',
              },
            },
          },
          dim3: {
            id: '8eccca39-ba05-4cf5-a106-3dffd9f563b0',
            filename: 'portrait.png',
            format: '',
            src: 'assets/avatars/samples/alan-turing/default/portrait.png',
            style: {
              id: 'dim3-file',
              properties: {},
            },
          },
        },
        portrait: {
          id: '8eccca39-ba05-4cf5-a106-3dffd9f563b0',
          filename: 'portrait.png',
          format: '',
          src: 'assets/avatars/samples/alan-turing/default/portrait.png',
          style: {
            id: 'avataaars',
            properties: {
              skinColor: 'Pale',
              topType: 'ShortHairShortWaved',
              hairColor: 'Black',
              facialHairType: null,
              facialHairColor: null,
              eyeType: 'Default',
              eyebrowType: 'Default',
              mouthType: 'Twinkle',
              clotheType: 'BlazerSweater',
              clotheColor: 'Black',
            },
          },
        },
      },
    ],
  },
];

export const USER_AVATARS_MOCKS_DATA_PROVIDER: Provider = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: USER_AVATAR_COLLECTION_NAME,
    upsert: true,
    data: userAvatars,
  },
  multi: true,
};
