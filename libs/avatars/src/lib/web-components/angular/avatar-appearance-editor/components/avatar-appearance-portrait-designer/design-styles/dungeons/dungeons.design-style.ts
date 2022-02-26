
import { DesignStyle } from '../models/design-style';

export const dungeonsDesignStyle: DesignStyle = {
  id: 'dungeons',
  name: 'Role-playing Stats',
  url: 'https://www.npmjs.com/package/avataaars',
  description: 'A basic set of role-playing stats',
  hasViewer: false,
  license: {
    type: 'MIT',
  },
  properties: [
    {
      id: 'class',
      label: 'Class',
      type: 'text',
    },
    {
      id: 'level',
      label: 'Level',
      type: 'number',
      defaultValue: 1,
    },
    {
      id: 'race',
      label: 'Race',
      type: 'text',
    },
    {
      id: 'background',
      label: 'Background',
      type: 'text',
    },
    {
      id: 'playerName',
      label: 'Player Name',
      type: 'text',
    },
    {
      id: 'alignment',
      label: 'Alignment',
      type: 'text',
    },
    {
      id: 'experiencePoints',
      label: 'Experience Points',
      type: 'text',
    },
    {
      id: 'strength',
      label: 'Strength',
      type: 'number',
    },
    {
      id: 'dexterity',
      label: 'Dexterity',
      type: 'number',
    },
    {
      id: 'constitution',
      label: 'Constitution',
      type: 'number',
    },
    {
      id: 'intelligence',
      label: 'Intelligence',
      type: 'number',
    },
    {
      id: 'wisdom',
      label: 'Wisdom',
      type: 'number',
    },
    {
      id: 'charisma',
      label: 'Charisma',
      type: 'number',
    },
  ],
};
