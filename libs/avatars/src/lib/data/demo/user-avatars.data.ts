import { Provider } from '@angular/core';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type { UserAvatarDocType } from '../../collections/user-avatars.collection';
import { Appearance, AppearanceFormat } from '../../models/appearance';

const oldManAppearance: Appearance = {
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
          clotheColor: 'Black',
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
          animation: '4',
          direction: '2',
          bodyType: 'tanned2',
          bodyVariation: 'male',
          torso: 'chain/mail',
          torso2: 'chain/tabard',
          hair: 'longknot',
          hairColor: 'white',
          facialHair: 'mustache',
          facialHairColor: 'white',
          legs: 'armor/metal_pants',
          feet: 'boots/metal_boots',
          rightHand: 'spear',
          leftHand: 'shield',
          bothHands: null,
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
        clotheColor: 'Black',
      },
    },
  },
}

export const userAvatars: UserAvatarDocType[] = [
  {
    id: 'x0',
    welcomeMessage: 'Hello!',
    name: 'The Old Man',
    title: 'Unknown',
    selectedAppearance: oldManAppearance,
    appearances: [oldManAppearance],
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
