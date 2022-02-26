
import { DesignStyle } from '../models/design-style';

export const lpcDesignStyle: DesignStyle = {
  id: 'lpc',
  license: { type: 'GPL 3.0' },
  name: 'Liberated Pixel Cup',
  description: `Liberated Pixel Cup is a two-part competition: make a bunch of awesome free culture licensed artwork, and then program a bunch of free software games that use it.`,
  url: 'https://opengameart.org/content/lpc-collection',
  hasViewer: true,
  properties: [
    {
      id: 'species',
      type: 'select',
      label: 'Species',
      options: [{
        id: 'Human',
        label: 'Human',
      }, {
        id: 'HumanoidAnimals/Lizardman',
        label: 'Lizardman',
      }, {
        id: 'HumanoidAnimals/Wolfman',
        label: 'Wolfman',
      }, {
        id: 'Orc',
        label: 'Orcs',
      }, {
        id: 'Undead/Skeleton',
        label: 'Skeleton',
      }, {
        id: 'Undead/Zombie',
        label: 'Zombie',
      }]
    },
    {
      id: 'bodyType',
      type: 'select',
      label: 'Body Type',
      options: [
        {
          id: 'Child',
          label: 'Child',
        },
        {
          id: 'Female',
          label: 'Female',
        },
        {
          id: 'FemalePregnant',
          label: 'Female Pregnant',
        },
        {
          id: 'Male',
          label: 'Male',
        },
        {
          id: 'MaleMuscular',
          label: 'Male Muscular',
        },
        {
          id: 'Teen',
          label: 'Teen',
        },
      ]
    }
  ]

}
