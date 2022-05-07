import { CultureNameBase } from '../__generated__/models';

export const cultureIds: Record<string, string[]> = {
  asian: [
    'Korean',
    'Chinese',
    'Japanese',
    'Vietnamese',
    'Cantonese',
    'Mongolian',
  ],
  northAmerican: ['Inuit', 'Hawaiian', 'Karnataka', 'Quechua'],
  southAmerican: ['Nahuatl'],
  egyptian: ['Berber', 'Arabic', 'Nigerian', 'Swahili'],
  celtic: ['Celtic', 'Basque'],
  greek: ['Greek', 'Roman'],
  byzantin: ['Italian', 'Turkish', 'Mesopotamian'],
  congress: [],
  capitol: [],
  indian: ['Iranian'],
  nordic: ['Nordic', 'Finnic'],
  european: [
    'German',
    'English',
    'French',
    'Castillian',
    'Portuguese',
    'Human Generic',

    'Dwarven',
    'Giant',
    'Draconic',
    'Arachnid',
    'Serpents',
  ],
  russian: ['Ruthenian', 'Hungarian'],
  western: [],
  elven: ['Elven', 'Dark Elven'],
  dwarven: ['Dwarven'],
  goblin: ['Goblin', 'Orc'],
  draconic: ['Draconic', 'Serpents'],
  arachnid: ['Arachnid'],
};

export const mapFMGCultureId = (cultureName: CultureNameBase): string => {
  const [id] = Object.entries(cultureIds).find(([id, cultures]) =>
    cultures.includes(cultureName?.name || '')
  ) || ['european'];

  return id;
};
