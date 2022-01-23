export enum AppearanceInfoSkinColor {
  PaleIvory = '#fee3c5',
  WarmIvory = '#fde7ad',
  Sand = '#f8d998',
  RoseBeige = '#f9d3a2',
  LimeStone = '#ecc091',
  Beige = '#f2c282',
  Sienna = '#d49e7a',
  Amber = '#bb6436',
  Honey = '#cf965f',
  Band = '#ad8a60',
  Almond = '#935f37',
  Bronze = '#733f17',
  Umber = '#b26644',
  Golden = '#7f4422',
  Espresso = '#5f3310',
  Chocolate = '#291709',
}

export enum AppearanceInfoBodyType {
  Mesomorph = 'Mesomorph',
  Ectomorph = 'Ectomorph',
  Endomorph = 'Endomorph',
}
// {
//   Thin = 'Thin',
//   Slim = 'Slim',
//   Muscular = 'Muscular',
//   Thick = 'Thick',
//   Chubby = 'Chubby',
//   Fat = 'Fat',

// }
/** Light */

export enum AppearanceInfoHairColor {
  '001' = '#fff5e1',
  '002' = '#d6c2c1',
  '003' = '#b8a59e',
  '004' = '#504444',
  '005' = '#2c222b',
  '006' = '#a46a45',
  '007' = '#8f553d',
  '008' = '#7d461b',
  '009' = '#8d4a42',
  '010' = '#b45338',
  '011' = '#dcd0ba',
  '012' = '#cbbfaf',
  '013' = '#977961',
  '014' = '#71635a',
  '015' = '#4e433f',
  '016' = '#6a4e41',
  '017' = '#543e33',
  '018' = '#5c2c06',
  '019' = '#481f03',
  '020' = '#090806',
  '021' = '#e6cca7',
  '022' = '#e5c8a8',
  '023' = '#b99676',
  '024' = '#a78569',
  '025' = '#997950',
  '026' = '#785d32',
  '027' = '#544737',
  '028' = '#3c3028',
  '029' = '#4b3619',
  '030' = '#3b270c',
}

export enum AppearanceInfoHairStyle {
  /** Straight */
  Straight = 'Straight',
  /** Curly */
  Curly = 'Curly',
  /** Wavy */
  Wavy = 'Wavy',
}

export enum AppearanceInfoEyeColor {
  '001' = '#c3c5d1',
  '002' = '#9bacca',
  '003' = '#8796ad',
  '004' = '#838aa6',
  '005' = '#62627a',
  '006' = '#8b8ca0',
  '007' = '#a1a7c1',
  '008' = '#757e8d',
  '009' = '#555965',
  '010' = '#7f8287',
  '011' = '#796445',
  '012' = '#867058',
  '013' = '#9c9159',
  '014' = '#7f7e60',
  '015' = '#91907e',
  '016' = '#ababa9',
  '017' = '#798476',
  '018' = '#707b7d',
  '019' = '#78787a',
  '020' = '#887f78',
  '021' = '#746457',
  '022' = '#6d5d46',
  '023' = '#785c2d',
  '024' = '#744a31',
  '025' = '#5a3616',
  '026' = '#562d1b',
  '027' = '#3c1c10',
  '028' = '#291516',
}

export type AppearanceInfo = {
  /** The appearance's skin color */
  skinColor?: AppearanceInfoSkinColor | string;

  /** The appearance's hair color */
  hairColor?: AppearanceInfoHairColor | string;
  hairStyle?: AppearanceInfoHairStyle | string;
  hairLength?: number;

  eyeColor?: AppearanceInfoEyeColor | string;

  bodyType?: AppearanceInfoBodyType;
  fatPercentage?: number;
  height?: number;
  weight?: number;
};
