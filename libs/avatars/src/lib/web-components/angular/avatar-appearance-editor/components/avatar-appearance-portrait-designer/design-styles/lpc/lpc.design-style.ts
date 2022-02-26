
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
      id: 'bodyType',
      type: 'select',
      label: 'Body Type',
      options: [
        {
          id: 'tanned',
          label: 'Tanned',
        },
        {
          id: 'tanned2',
          label: 'Tanned 2',
        },
        {
          id: 'light',
          label: 'Light',
        },
        {
          id: 'dark',
          label: 'Dark',
        },
        {
          id: 'dark2',
          label: 'Dark 2',
        },
        {
          id: 'darkelf',
          label: 'Dark Elf',
        },
        {
          id: 'darkelf2',
          label: 'Dark Elf 2',
        },
        {
          id: 'orc',
          label: 'Orc',
        },
        {
          id: 'red_orc',
          label: 'Red Orc',
        },
        {
          id: 'skeleton',
          label: 'Skeleton',
        },
      ]
    },
    {
      id: 'bodyVariation',
      type: 'select',
      label: 'Body Variation',
      options: [
        {
          id: 'male',
          label: 'Male',
        },
        {
          id: 'female',
          label: 'Female',
        },
      ]
    },
    {
      id: 'torso',
      type: 'select',
      label: 'Torso',
      options: [
        {
          id: 'leather/chest',
          label: 'Leather Chest',
        },
        {
          id: 'chain/mail',
          label: 'Chain Mail',
        },
        {
          id: 'chain/tabard',
          label: 'Tabard',
        },
        {
          id: 'shirts/longsleeve/brown_longsleeve',
          label: 'Brown Longsleeve',
        },
        {
          id: 'shirts/longsleeve/white_longsleeve',
          label: 'White Longsleeve',
        },
      ]
    },
    {
      id: 'hair',
      type: 'select',
      label: 'Hair',
      options: [
        {
          id: 'bangs',
          label: 'Bangs',
        },
        {
          id: 'bangslong',
          label: 'Bangs Long',
        },
        {
          id: 'bangslong2',
          label: 'Bangs Long 2',
        },
        {
          id: 'bangsshort',
          label: 'Bangs Short',
        },
        {
          id: 'bedhead',
          label: 'Bed Head',
        },
        {
          id: 'bunches',
          label: 'Bunches',
        },
        {
          id: 'jewfro',
          label: 'Jewfro',
        },
        {
          id: 'long',
          label: 'Long',
        },
        {
          id: 'longhawk',
          label: 'Long Hawk',
        },
        {
          id: 'longknot',
          label: 'Long Knot',
        },
        {
          id: 'loose',
          label: 'Loose',
        },
        {
          id: 'messy1',
          label: 'Messy',
        },
        {
          id: 'messy2',
          label: 'Messy 2',
        },
        {
          id: 'mohawk',
          label: 'Mohawk',
        },
      ]
    },
    {
      id: 'hairColor',
      type: 'select',
      label: 'Hair Color',
      options: [
        {
          id: 'black',
          label: 'Black',
        },
        {
          id: 'blonde',
          label: 'Blonde',
        },
        {
          id: 'blonde2',
          label: 'Blonde 2',
        },
        {
          id: 'blue',
          label: 'Blue',
        },
        {
          id: 'blue2',
          label: 'Blue 2',
        },
        {
          id: 'brown',
          label: 'Brown',
        },
        {
          id: 'brown2',
          label: 'Brown 2',
        },
        {
          id: 'brunette',
          label: 'Brunette',
        },
        {
          id: 'brunette2',
          label: 'Brunette 2',
        },
        // TODO: Complete this list
        {
          id: 'white-blonde',
          label: 'White Blonde',
        },
        {
          id: 'white-blonde2',
          label: 'White Blonde 2',
        },
        {
          id: 'white-cyan',
          label: 'White Cyan',
        },
        {
          id: 'white',
          label: 'White',
        },
      ]
    },
    {
      id: 'facialHair',
      type: 'select',
      label: 'Facial Hair',
      options: [
        {
          id: 'beard',
          label: 'Beard',
        },
        {
          id: 'bigstache',
          label: 'Bigstache',
        },
        {
          id: 'fiveoclock',
          label: 'Fiveoclock',
        },
        {
          id: 'frenchstache',
          label: 'Frenchstache',
        },
        {
          id: 'mustache',
          label: 'Mustache',
        },
      ]
    }
  ]

}
