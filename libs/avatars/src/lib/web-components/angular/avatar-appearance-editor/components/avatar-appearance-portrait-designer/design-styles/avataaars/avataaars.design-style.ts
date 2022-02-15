export type DesignStylePropertyOption = {
  id: string;
  label: string;
};

export type DesignStyleProperty = {
  id: string;
  label: string;
  defaultValue?: string;
  options: DesignStylePropertyOption[];
};

export type DesignStyle = {
  id: string;
  name: string;
  description?: string;
  author?: string;
  properties: DesignStyleProperty[];
};

export const avataaarsDesignStyle: DesignStyle = {
  id: 'avataaars',
  name: 'Avataaars',
  description: 'Avataaars',
  properties: [
    {
      id: 'skinColor',
      label: 'Skin Color',
      options: [
        { label: 'Tanned', id: 'Tanned' },
        { label: 'Yellow', id: 'Yellow' },
        { label: 'Pale', id: 'Pale' },
        { label: 'Light', id: 'Light' },
        { label: 'Brown', id: 'Brown' },
        { label: 'Dark Brown', id: 'DarkBrown' },
        { label: 'Black', id: 'Black' },
      ],
    },
    {
      id: 'topType',
      label: 'Hair',
      options: [
        { label: 'NoHair', id: 'NoHair' },
        { label: 'Eyepatch', id: 'Eyepatch' },
        { label: 'Hat', id: 'Hat' },
        { label: 'Hijab', id: 'Hijab' },
        { label: 'Turban', id: 'Turban' },
        { label: 'WinterHat1', id: 'WinterHat1' },
        { label: 'WinterHat2', id: 'WinterHat2' },
        { label: 'WinterHat3', id: 'WinterHat3' },
        { label: 'WinterHat4', id: 'WinterHat4' },
        { label: 'LongHairBigHair', id: 'LongHairBigHair' },
        { label: 'LongHairBob', id: 'LongHairBob' },
        { label: 'LongHairBun', id: 'LongHairBun' },
        { label: 'LongHairCurly', id: 'LongHairCurly' },
        { label: 'LongHairCurvy', id: 'LongHairCurvy' },
        { label: 'LongHairDreads', id: 'LongHairDreads' },
        { label: 'LongHairFrida', id: 'LongHairFrida' },
        { label: 'LongHairFro', id: 'LongHairFro' },
        { label: 'LongHairFroBand', id: 'LongHairFroBand' },
        { label: 'LongHairNotTooLong', id: 'LongHairNotTooLong' },
        { label: 'LongHairShavedSides', id: 'LongHairShavedSides' },
        { label: 'LongHairMiaWallace', id: 'LongHairMiaWallace' },
        { label: 'LongHairStraight', id: 'LongHairStraight' },
        { label: 'LongHairStraight2', id: 'LongHairStraight2' },
        { label: 'LongHairStraightStrand', id: 'LongHairStraightStrand' },
        { label: 'ShortHairDreads01', id: 'ShortHairDreads01' },
        { label: 'ShortHairDreads02', id: 'ShortHairDreads02' },
        { label: 'ShortHairFrizzle', id: 'ShortHairFrizzle' },
        { label: 'ShortHairShaggyMullet', id: 'ShortHairShaggyMullet' },
        { label: 'ShortHairShortCurly', id: 'ShortHairShortCurly' },
        { label: 'ShortHairShortFlat', id: 'ShortHairShortFlat' },
        { label: 'ShortHairShortRound', id: 'ShortHairShortRound' },
        { label: 'ShortHairShortWaved', id: 'ShortHairShortWaved' },
        { label: 'ShortHairSides', id: 'ShortHairSides' },
        { label: 'ShortHairTheCaesar', id: 'ShortHairTheCaesar' },
        {
          label: 'ShortHairTheCaesarSidePart',
          id: 'ShortHairTheCaesarSidePart',
        },
      ],
    },
    {
      id: 'hairColor',
      label: 'Hair Color',
      options: [
        { label: 'Auburn', id: 'Auburn' },
        { label: 'Black', id: 'Black' },
        { label: 'Blonde', id: 'Blonde' },
        { label: 'BlondeGolden', id: 'BlondeGolden' },
        { label: 'Brown', id: 'Brown' },
        { label: 'BrownDark', id: 'BrownDark' },
        { label: 'PastelPink', id: 'PastelPink' },
        { label: 'Blue', id: 'Blue' },
        { label: 'Platinum', id: 'Platinum' },
        { label: 'Red', id: 'Red' },
        { label: 'SilverGray', id: 'SilverGray' },
      ],
    },
    {
      id: 'facialHairType',
      label: 'Facial Hair',
      options: [
        { label: 'Blank', id: 'Blank' },
        { label: 'BeardMedium', id: 'BeardMedium' },
        { label: 'BeardLight', id: 'BeardLight' },
        { label: 'BeardMajestic', id: 'BeardMajestic' },
        { label: 'MoustacheFancy', id: 'MoustacheFancy' },
        { label: 'MoustacheMagnum', id: 'MoustacheMagnum' },
      ],
    },
    {
      id: 'facialHairColor',
      label: 'Facial Hair Color',
      options: [
        { label: 'Auburn', id: 'Auburn' },
        { label: 'Black', id: 'Black' },
        { label: 'Blonde', id: 'Blonde' },
        { label: 'BlondeGolden', id: 'BlondeGolden' },
        { label: 'Brown', id: 'Brown' },
        { label: 'BrownDark', id: 'BrownDark' },
        { label: 'Platinum', id: 'Platinum' },
        { label: 'Red', id: 'Red' },
      ],
    },
    {
      id: 'eyeType',
      label: 'Eyes',
      options: [
        { label: 'Close', id: 'Close' },
        { label: 'Cry', id: 'Cry' },
        { label: 'Default', id: 'Default' },
        { label: 'Dizzy', id: 'Dizzy' },
        { label: 'EyeRoll', id: 'EyeRoll' },
        { label: 'Happy', id: 'Happy' },
        { label: 'Hearts', id: 'Hearts' },
        { label: 'Side', id: 'Side' },
        { label: 'Squint', id: 'Squint' },
        { label: 'Surprised', id: 'Surprised' },
        { label: 'Wink', id: 'Wink' },
        { label: 'WinkWacky', id: 'WinkWacky' },
      ],
    },
    {
      id: 'eyebrowType',
      label: 'Eyebrow',
      options: [
        { label: 'Angry', id: 'Angry' },
        { label: 'AngryNatural', id: 'AngryNatural' },
        { label: 'Default', id: 'Default' },
        { label: 'DefaultNatural', id: 'DefaultNatural' },
        { label: 'FlatNatural', id: 'FlatNatural' },
        { label: 'RaisedExcited', id: 'RaisedExcited' },
        { label: 'RaisedExcitedNatural', id: 'RaisedExcitedNatural' },
        { label: 'SadConcerned', id: 'SadConcerned' },
        { label: 'SadConcernedNatural', id: 'SadConcernedNatural' },
        { label: 'UnibrowNatural', id: 'UnibrowNatural' },
        { label: 'UpDown', id: 'UpDown' },
        { label: 'UpDownNatural', id: 'UpDownNatural' },
      ],
    },
    {
      id: 'mouthType',
      label: 'Mouth',
      options: [
        { label: 'Concerned', id: 'Concerned' },
        { label: 'Default', id: 'Default' },
        { label: 'Disbelief', id: 'Disbelief' },
        { label: 'Eating', id: 'Eating' },
        { label: 'Grimace', id: 'Grimace' },
        { label: 'Sad', id: 'Sad' },
        { label: 'ScreamOpen', id: 'ScreamOpen' },
        { label: 'Serious', id: 'Serious' },
        { label: 'Smile', id: 'Smile' },
        { label: 'Tongue', id: 'Tongue' },
        { label: 'Twinkle', id: 'Twinkle' },
        { label: 'Vomit', id: 'Vomit' },
      ],
    },
    {
      id: 'clotheType',
      label: 'Clothes',
      options: [
        { label: 'BlazerShirt', id: 'BlazerShirt' },
        { label: 'BlazerSweater', id: 'BlazerSweater' },
        { label: 'CollarSweater', id: 'CollarSweater' },
        { label: 'GraphicShirt', id: 'GraphicShirt' },
        { label: 'Hoodie', id: 'Hoodie' },
        { label: 'Overall', id: 'Overall' },
        { label: 'ShirtCrewNeck', id: 'ShirtCrewNeck' },
        { label: 'ShirtScoopNeck', id: 'ShirtScoopNeck' },
        { label: 'ShirtVNeck', id: 'ShirtVNeck' },
      ],
    },
    {
      id: 'clotheColor',
      label: 'Clothes Color',
      options: [
        { label: 'Black', id: 'Black' },
        { label: 'Blue01', id: 'Blue01' },
        { label: 'Blue02', id: 'Blue02' },
        { label: 'Blue03', id: 'Blue03' },
        { label: 'Gray01', id: 'Gray01' },
        { label: 'Gray02', id: 'Gray02' },
        { label: 'Heather', id: 'Heather' },
        { label: 'PastelBlue', id: 'PastelBlue' },
        { label: 'PastelGreen', id: 'PastelGreen' },
        { label: 'PastelOrange', id: 'PastelOrange' },
        { label: 'PastelRed', id: 'PastelRed' },
        { label: 'PastelYellow', id: 'PastelYellow' },
        { label: 'Pink', id: 'Pink' },
        { label: 'Red', id: 'Red' },
        { label: 'White', id: 'White' },
      ],
    },
    {
      id: 'accessoriesType',
      label: 'Accesory',
      options: [
        { label: 'Blank', id: 'Blank' },
        { label: 'Kurt', id: 'Kurt' },
        { label: 'Prescription01', id: 'Prescription01' },
        { label: 'Prescription02', id: 'Prescription02' },
        { label: 'Round', id: 'Round' },
        { label: 'Sunglasses', id: 'Sunglasses' },
        { label: 'Wayfarers', id: 'Wayfarers' },
      ],
    },
  ],
};
