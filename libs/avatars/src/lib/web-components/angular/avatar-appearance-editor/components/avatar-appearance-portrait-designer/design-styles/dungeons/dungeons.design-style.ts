
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
      type: 'select',
      defaultValue: 'fool',
      useDescriptionAsLabel: true,
      options: [
        {
          id: 'fool',
          label: 'Fool',
          description: 'No idea'
        },
        {
          id: 'technomancer',
          label: 'Technomancer',
          description: 'Someone passionate about technology'
        },
        {
          id: 'scholar',
          label: 'Scholar',
          description: 'Someone wanting to learn'
        },
        {
          id: 'artist',
          label: 'Artist',
          description: 'Someone who wants to express themselves'
        },
        {
          id: 'artisan',
          label: 'Artisan',
          description: 'Someone who wants to create something'
        },
        {
          id: 'sage',
          label: 'Sage',
          description: 'Someone who wants to know more'
        },
        {
          id: 'bard',
          label: 'Bard',
          description: 'Someones who wants to share stories'
        },
        {
          id: 'fighter',
          label: 'Fighter',
          description: 'Someone who wants to fight',
        },
        {
          id: 'wildling',
          label: 'Wildling',
          description: 'Someone who loves the wildness'
        },
        {
          id: 'lonelyWolf',
          label: 'Lonely Wolf',
          description: 'A meditative and lonely person'
        },
        {
          id: 'shapeshifter',
          label: 'Shape Shifter',
          description: 'A person who can easily change'
        },
        {
          id: 'judge',
          label: 'Judge',
          description: 'A justice lover'
        },
        {
          id: 'bountyHunter',
          label: 'Bounty Hunter',
          description: 'A person who wants to be rich'
        },
        {
          id: 'lawless',
          label: 'Lawless',
          description: 'A person who is out of the law'
        },
        {
          id: 'saint',
          label: 'Saint',
          description: 'A mind clear person'
        },
        {
          id: 'chaos_knight',
          label: 'Chaos Knight',
          description: 'Someone who is inside an eternal battle'
        },
        {
          id: 'guardian',
          label: 'Guardian',
          description: 'Someone who protects the innocent'
        },
        {
          id: 'faithful',
          label: 'Priest of Light',
          description: 'Someone who trusts in a better world'
        },
        {
          id: 'illusionist',
          label: 'Illusionist',
          description: 'Someone who loves dreaming'
        },
        {
          id: 'master',
          label: 'Master',
          description: 'Someone who enjoys hard-working'
        },
        {
          id: 'runaway',
          label: 'Runaway',
          description: 'Someone who needs a change'
        },
        {
          id: 'druid',
          label: 'Druid',
          description: 'Someone bounded with nature'
        },
      ],
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
