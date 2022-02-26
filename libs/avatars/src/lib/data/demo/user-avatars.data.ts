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
          arms: 'plate/arms',
          back: 'cape/normal/cape_gray',
          hair: 'longknot',
          hairColor: 'white',
          // head: 'helms/barbarian_viking/steel',
          head: null,
          headAccesory: null,
          visor: null,
          ears: null,
          nose: null,
          eyes: 'purple',
          facialHair: 'mustache',
          facialHairColor: 'white',
          legs: 'armor/metal_pants',
          feet: 'boots/metal_boots',
          rightHand: null,
          leftHand: null,
          bothHands: 'spear',
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
}

const blacksmithAppearance: Appearance = {
  id: '2',
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
          skinColor: 'Black',
          topType: 'LongHairDreads',
          hairColor: 'Red',
          facialHairType: 'BeardMajestic',
          facialHairColor: 'Red',
          eyeType: 'Default',
          eyebrowType: 'Default',
          mouthType: 'Twinkle',
          clotheType: 'CollarSweater',
          clotheColor: 'PastelOrange',
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
          animation: '8',
          direction: '2',
          bodyType: 'tanned2',
          bodyVariation: 'male',
          torso: 'plate/legion/legionplate_gold',
          torso2: null,
          head: 'helms/legion/legionhelmet_gold',
          headAccesory: 'accesories/crest/gold',
          visor: null,
          arms: 'plate/legion/legionbauldron_gold',
          back: 'cape/normal/cape_gray',
          hair: null,
          hairColor: 'brunette2',
          ears: null,
          nose: null,
          eyes: 'brown',
          facialHair: 'beard',
          facialHairColor: 'brunette2',
          legs: 'skirt/legion_skirt',
          feet: 'sandals/legion',
          rightHand: 'warhammer',
          leftHand: null,
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
}

export const userAvatars: UserAvatarDocType[] = [
  {
    id: 'x0',
    welcomeMessage: 'Hello!',
    name: 'The Old Man',
    title: 'Unknown',
    bio: 'Welcome to The Central Factory Metaverse! Take a look around the Start section',
    selectedAppearance: oldManAppearance,
    appearances: [oldManAppearance],
    scopes: [
    ],
    skills: [
    ],
  },

  {
    id: 'x1',
    welcomeMessage: 'Hello!',
    name: 'The Blacksmith',
    title: 'Unknown',
    bio: 'Welcome to The Central Factory Metaverse! Take a look around the Start section',
    selectedAppearance: blacksmithAppearance,
    appearances: [blacksmithAppearance],
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
