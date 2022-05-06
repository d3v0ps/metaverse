import { Avatar } from '@central-factory/avatars/models/avatar';

const valueMappings: Record<
  string,
  Record<string, string | undefined | null>
> = {
  skinColor: {
    tanned: 'Tanned',
    tanned2: 'Yellow',
    white: 'Pale',
    light: 'Light',
    olive: 'Brown',
    brown: 'DarkBrown',
    black: 'Black',
  },
  topType: {
    bangs: 'ShortHairShortWaved',
    bangslong: 'ShortHairShortWaved',
    bangslong2: 'ShortHairShortWaved',
    bangsshort: 'ShortHairShortCurly',
    bedhead: 'ShortHairShortCurly',
    bunches: 'ShortHairShortCurly',
    jewfro: 'ShortHairDreads02',
    long: 'LongHairStraightStrand',
    long2: 'LongHairStraightStrand',
    longhawk: 'ShortHairTheCaesarSidePart',
    longknot: 'LongHairBun',
    loose: 'LongHairBun',
    messy1: 'ShortHairShortCurly',
    messy2: 'ShortHairShortCurly',
    mohawk: 'ShortHairFrizzle',
    page: 'LongHairMiaWallace',
    page2: 'LongHairMiaWallace',
    parted: 'ShortHairShortRound',
    pixie: 'LongHairCurvy',
    princess: 'LongHairCurvy',
    plain: 'ShortHairShortRound',
    ponytail: 'LongHairBun',
    ponytail2: 'LongHairBun',
    short: 'ShortHairShortCurly',
    shorthawk: 'ShortHairTheCaesarSidePart',
    shortknot: 'ShortHairShortCurly',
    shoulderl: 'ShortHairShortCurly',
    shoulderr: 'ShortHairShortCurly',
    swoop: 'ShortHairShortCurly',
    unkempt: 'ShortHairShortCurly',
    xlong: 'LongHairStraightStrand',
    xlongknot: 'LongHairBun',
  },
  hairColor: {
    auburn: 'Auburn',
    black: 'Black',
    blonde: 'Blonde',
    blonde2: 'BlondeGolden',
    brown2: 'Brown',
    brown: 'BrownDark',
    'white-blonde': 'PastelPink',
    blue: 'Blue',
    white: 'Platinum',
    brunette: 'Red',
    'white-cyan': 'SilverGray',
  },
  facialHairType: {
    undefined: 'Blank',
    beard: 'BeardMajestic',
    bigstache: 'MoustacheFancy',
    mustache: 'MoustacheMagnum',
  },
  facialHairColor: {
    auburn: 'Auburn',
    black: 'Black',
    blonde: 'Blonde',
    blonde2: 'BlondeGolden',
    brown2: 'Brown',
    brown: 'BrownDark',
    white: 'Platinum',
    brunette: 'Red',
  },
  accessoriesType: {
    undefined: 'blank',
    formal_glasses: 'Kurt',
    sunglasses: 'Sunglasses',
    wayfarers: 'Wayfarers',
    round: 'Round',
    prescription01: 'Prescription01',
    prescription02: 'Prescription02',
  },
};

const baseUrl = `https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/master`;

export const toLPCLayers = ({
  appearance,
  outfits,
  selectedOutfit,
}: Avatar): {
  name: string;
  src: string;
  description?: string;
}[] => {
  if (!appearance) {
    return [];
  }

  outfits = outfits || [];

  const outfit =
    (selectedOutfit && outfits?.find((o) => o.name === selectedOutfit)) ||
    outfits[0];

  const bodyType = appearance?.body?.type?.toLowerCase() || 'female';

  return [
    {
      name: 'Shadows',
      description: 'Shadow layer',
      src: [baseUrl, 'shadows', bodyType, `shadow.png`].join('/'),
    },
    {
      name: 'Body',
      description: 'Body layer',
      src: [baseUrl, 'body', bodyType, `${appearance.body?.skin}.png`].join(
        '/'
      ),
    },
    outfit?.legs
      ? {
          name: 'Legs',
          description: 'Legs layer',
          src: [baseUrl, 'legs', bodyType, `${outfit.legs}.png`].join('/'),
        }
      : null,
    outfit?.feet
      ? {
          name: 'Feet',
          description: 'Feet layer',
          src: [baseUrl, 'feet', bodyType, `${outfit?.feet}.png`].join('/'),
        }
      : null,
    outfit?.torso?.layer1
      ? {
          name: 'Torso',
          description: 'Torso Layer 1',
          src: [
            baseUrl,
            'torso',
            bodyType,
            `${outfit?.torso?.layer1}.png`,
          ].join('/'),
        }
      : null,

    outfit?.torso?.layer2
      ? {
          name: 'Torso 2',
          description: 'Torso Layer 2',
          src: [
            baseUrl,
            'torso',
            bodyType,
            `${outfit?.torso?.layer2}.png`,
          ].join('/'),
        }
      : null,

    outfit?.shoulders
      ? {
          name: 'Shoulders',
          description: 'Shoulders Layer',
          src: [baseUrl, 'torso', bodyType, `${outfit?.shoulders}.png`].join(
            '/'
          ),
        }
      : null,

    outfit?.back
      ? {
          name: 'Back',
          description: 'Back Layer',
          src: [baseUrl, 'torso', bodyType, 'back', `${outfit?.back}.png`].join(
            '/'
          ),
        }
      : null,
    appearance.ears?.shape
      ? {
          name: 'Ears',
          description: 'Ears Layer',
          src: [
            baseUrl,
            'body',
            bodyType,
            'ears',
            `${appearance.ears?.shape}_${appearance.body?.skin}.png`,
          ].join('/'),
        }
      : null,
    appearance.nose?.shape
      ? {
          name: 'Nose',
          description: 'Nose Layer',
          src: [
            baseUrl,
            'body',
            bodyType,
            'nose',
            `${appearance.nose?.shape}_${appearance.body?.skin}.png`,
          ].join('/'),
        }
      : null,
    appearance.eyes?.color
      ? {
          name: 'Eyes',
          description: 'Eyes Layer',
          src: [
            baseUrl,
            'body',
            bodyType,
            'eyes',
            `${appearance.eyes.color}.png`,
          ].join('/'),
        }
      : null,
    appearance.hair?.style
      ? {
          name: 'Hair',
          description: 'Hair Layer',
          src: [
            baseUrl,
            'hair',
            bodyType,
            appearance.hair?.style,
            `${appearance.hair?.color}.png`,
          ].join('/'),
        }
      : null,
    appearance.facialHair?.style
      ? {
          name: 'Facial Hair',
          description: 'Facial Hair Layer',
          src: [
            baseUrl,
            'facial',
            bodyType,
            appearance.facialHair?.style,
            `${appearance.facialHair?.color || appearance.hair?.color}.png`,
          ].join('/'),
        }
      : null,
    outfit?.head?.headgear
      ? {
          name: 'Head',
          description: 'Head Layer',
          src: [
            baseUrl,
            'head',
            bodyType,
            `${outfit?.head?.headgear}.png`,
          ].join('/'),
        }
      : null,
    outfit?.head?.visor
      ? {
          name: 'Visor',
          description: 'Visor Layer',
          src: [baseUrl, 'head', bodyType, `${outfit?.head?.visor}.png`].join(
            '/'
          ),
        }
      : null,
    // outfit?.accessory
    //   ? {
    //       name: 'Accessory',
    //       description: 'Accessory Layer',
    //       src: [
    //         baseUrl,
    //         'accessories',
    //         bodyType
    //         `${outfit?.accessory}.png`,
    //       ].join('/'),
    //     }
    //   : null,
    // outfit?.headAccesory
    //   ? {
    //       name: 'Head Accesory',
    //       description: 'Head Accesory Layer',
    //       src: [
    //         baseUrl,
    //         'head',
    //         bodyType
    //         `${outfit?.headAccesory}.png`,
    //       ].join('/'),
    //     }
    //   : null,
    outfit?.hands?.slot1?.leftHand
      ? {
          name: 'Left Hand',
          description: 'Left Hand Layer',
          src: [
            baseUrl,
            'weapons',
            bodyType,
            'left-hand',
            `${outfit?.hands?.slot1?.leftHand}.png`,
          ].join('/'),
        }
      : null,
    outfit?.hands?.slot1?.rightHand
      ? {
          name: 'Right Hand',
          description: 'Right Hand Layer',
          src: [
            baseUrl,
            'weapons',
            bodyType,
            'right-hand',
            `${outfit?.hands?.slot1?.rightHand}.png`,
          ].join('/'),
        }
      : null,
    outfit?.hands?.slot1?.bothHands
      ? {
          name: 'Both Hands',
          description: 'Both Hands Layer',
          src: [
            baseUrl,
            'weapons',
            bodyType,
            'both-hand',
            `${outfit?.hands?.slot1?.bothHands}.png`,
          ].join('/'),
        }
      : null,
  ].filter((val) => (val ? true : false)) as {
    name: string;
    src: string;
    description?: string;
  }[];
};
