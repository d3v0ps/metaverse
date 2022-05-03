import { Provider } from '@angular/core';
import {
  AvatarGender,
  SexualOrientation,
} from '@central-factory/avatars/models';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type { UserAvatarDocType } from '../../collections/user-avatars.collection';
import { Appearance, AppearanceFormat } from '../../models/appearance';

const avatar00Appearance: Appearance = {
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
          // animation
          animation: 'walk',
          direction: 'south',
          // body
          bodyType: 'tanned2',
          bodyVariation: 'male',
          hair: 'longknot',
          hairColor: 'white',
          ears: null,
          nose: null,
          eyes: 'purple',
          facialHair: 'mustache',
          facialHairColor: 'white',
          // clothes
          head: null,
          headAccesory: null,
          visor: null,
          torso: 'shirts/formal_shirt',
          torso2: 'jackets/formal_jacket_black',
          arms: 'plate/arms',
          back: 'cape/normal/cape_gray',
          legs: 'pants/teal_pants',
          feet: 'shoes/brown_shoes',
          rightHand: 'staff',
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
        properties: {},
      },
    },
  },
};

const avatar01Appearance: Appearance = {
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
          animation: 'walk',
          direction: 'south',
          bodyType: 'black',
          bodyVariation: 'male',
          torso: 'plate/legion/legionplate_gold',
          torso2: null,
          head: null,
          headAccesory: null,
          // head: 'helms/legion/legionhelmet_gold',
          // headAccesory: 'accesories/crest/gold',
          visor: null,
          arms: 'plate/legion/legionbauldron_gold',
          back: 'cape/normal/cape_gray',
          hair: 'jewfro',
          hairColor: 'brunette2',
          ears: null,
          nose: null,
          eyes: 'brown',
          facialHair: 'beard',
          facialHairColor: 'brunette2',
          legs: 'skirt/legion_skirt',
          feet: 'sandals/legion',
          rightHand: 'warhammer',
          // leftHand: 'crusader_shield',
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
        properties: {},
      },
    },
  },
};

export const avatar01: UserAvatarDocType = {
  id: 'x1',
  identity: {
    quote: 'Hello!',
    givenName: 'The Blacksmith',
    title: 'Unknown',
    bio: 'Welcome to The Central Factory Metaverse! Take a look around the Start section',
  },
  appearances: [avatar01Appearance],
  appearance: {
    body: {
      type: AvatarGender.Male,
      skin: 'light',
    },
    eyes: {
      color: 'purple',
    },
    hair: {
      style: 'bangs',
      color: 'black',
    },
    facialHair: {
      style: 'mustache',
      color: 'black',
    },
  },
  outfits: [
    {
      name: 'default',
      back: undefined,
      feet: 'shoes/black_shoes',
      hands: undefined,
      head: undefined,
      legs: 'pants/formal_pants_stripes',
      shoulders: undefined,
      torso: {
        layer1: 'shirts/formal_shirt',
        layer2: 'jackets/formal_jacket_black',
      },
    },
  ],
};

export const userAvatars: UserAvatarDocType[] = [
  {
    id: 'x0',
    identity: {
      quote: 'Hello World 😄',
      givenName: 'John',
      familyName: 'Doe',
      birthDate: '01/01/2021',
      birthPlace: 0,
      culture: 0,
      gender: AvatarGender.Male,
      mainProfession: 'technomancer',
      secondaryProfession: 'fighter',
      sexualOrientation: SexualOrientation.Heterosexual,
      religion: 0,
      title: 'Unknown',
      bio: 'Welcome to The Central Factory Metaverse! Take a look around the Start section',
    },
    appearances: [],
    appearance: {
      body: {
        type: AvatarGender.Male,
        skin: 'light',
      },
      eyes: {
        color: 'purple',
      },
      hair: {
        style: 'bangs',
        color: 'black',
      },
      facialHair: {
        style: 'mustache',
        color: 'black',
      },
    },
    outfits: [
      {
        name: 'default',
        back: undefined,
        feet: 'shoes/black_shoes',
        hands: undefined,
        head: undefined,
        legs: 'pants/formal_pants_stripes',
        shoulders: undefined,
        torso: {
          layer1: 'shirts/formal_shirt',
          layer2: 'jackets/formal_jacket_black',
        },
      },
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
