import { Appearance } from '@central-factory/avatars/__generated__/models';

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
    dark2: 'DarkBrown',
  },
  topType: {
    bangs: 'ShortHairShortWaved',
    bangslong: 'ShortHairShortWaved',
    bangslong2: 'ShortHairShortWaved',
    bangsshort: 'ShortHairShortCurly',
    bedhead: 'ShortHairShortCurly',
    bunches: 'LongHairStraight2',
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
    white: 'Platinum',
    'white-blonde': 'PastelPink',
    'white-blonde2': 'Blonde',
    blue: 'Blue',
    blue2: 'Blue',
    brunette: 'Red',
    brunette2: 'Red',
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
    'white-blonde': 'PastelPink',
    'white-blonde2': 'Blonde',
    blue: 'Blue',
    blue2: 'Blue',
    brunette: 'Red',
    brunette2: 'Red',
    'white-cyan': 'SilverGray',
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

export const toAvataaars = (
  appearance: Appearance
): Record<string, string> => ({
  skinColor:
    valueMappings.skinColor[appearance.body?.color || 'light'] || 'Light',
  topType:
    valueMappings.topType[appearance.hair?.style || 'long'] ||
    'LongHairStraightStrand',
  hairColor:
    valueMappings.hairColor[appearance.hair?.color || 'black'] || 'Black',
  facialHairType:
    valueMappings.facialHairType[appearance.facialHair?.style || 'undefined'] ||
    'Blank',
  facialHairColor:
    valueMappings.facialHairColor[appearance.facialHair?.color || 'black'] ||
    'Black',
  eyeType: 'Default',
  eyebrowType: 'Default',
  mouthType: 'Twinkle',
  clotheType: 'ShirtCrewNeck',
  clotheColor: 'Gray02',
});
