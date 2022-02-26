
import { DesignStyle } from '../models/design-style';

const hairColors = [
  {
    id: 'black',
    label: 'Black',
    value: '#101010',
  },
  {
    id: 'blonde',
    label: 'Blonde',
    value: '#bd8a00',
  },
  {
    id: 'blonde2',
    label: 'Blonde 2',
    value: '#f2d986'
  },
  {
    id: 'blue',
    label: 'Blue',
    value: '#0000cd',
  },
  {
    id: 'blue2',
    label: 'Blue 2',
    value: '#513feb',
  },
  {
    id: 'brown',
    label: 'Brown',
    value: '#350c01',
  },
  {
    id: 'brown2',
    label: 'Brown 2',
    value: '#683609',
  },
  {
    id: 'brunette',
    label: 'Brunette',
    value: '#a74d00'
  },
  {
    id: 'brunette2',
    label: 'Brunette 2',
    value: '#8f191e',
  },
  // TODO: Complete this list
  {
    id: 'white-blonde',
    label: 'White Blonde',
    value: '#e2c3a8'
  },
  {
    id: 'white-blonde2',
    label: 'White Blonde 2',
    value: '#d9c98d'
  },
  {
    id: 'white-cyan',
    label: 'White Cyan',
    value: '#eefdfc',
  },
  {
    id: 'white',
    label: 'White',
    value: '#ebebeb'
  },
];

const torsos = [
  {
    id: 'leather/chest',
    label: 'Leather Chest',
  },
  {
    id: 'plate/chest',
    label: 'Plate Chest',
  },
  {
    id: 'gold/chest',
    label: 'Gold Chest',
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
];

const arms = [
  {
    id: 'leather/shoulders',
    label: 'Leather Shoulders',
  },
  {
    id: 'plate/arms',
    label: 'Plate Arms',
  },
  {
    id: 'gold/arms',
    label: 'Gold Arms',
  },
]

const backs = [
  {
    id: 'cape/normal/cape_black',
    label: 'Black Cape',
  },
  {
    id: 'cape/normal/cape_blue',
    label: 'Blue Cape',
  },
  {
    id: 'cape/normal/cape_brown',
    label: 'Brown Cape',
  },
  {
    id: 'cape/normal/cape_gray',
    label: 'Gray Cape',
  },
  {
    id: 'cape/tattered/tattercape_black',
    label: 'Tattered Black Cape',
  },
  {
    id: 'cape/tattered/tattercape_black',
    label: 'Tattered Black Cape',
  },
  {
    id: 'cape/tattered/tattercape_blue',
    label: 'Tattered Blue Cape',
  },
  {
    id: 'cape/tattered/tattercape_brown',
    label: 'Tattered Brown Cape',
  },
  {
    id: 'cape/tattered/tattercape_gray',
    label: 'Tattered Gray Cape',
  },
  {
    id: 'cape/trimmed/trimcape_whiteblue',
    label: 'Trimmed White Blue Cape',
  },
  {
    id: 'wings/wings_no_th-sh',
    label: 'Wings',
  },
]

export const lpcDesignStyle: DesignStyle = {
  id: 'lpc',
  license: { type: 'GPL 3.0' },
  name: 'Liberated Pixel Cup',
  description: `Liberated Pixel Cup is a two-part competition: make a bunch of awesome free culture licensed artwork, and then program a bunch of free software games that use it.`,
  url: 'https://opengameart.org/content/lpc-collection',
  hasViewer: true,
  properties: [
    {
      id: 'animation',
      type: 'select',
      label: 'Animation',
      options: [
        {
          id: '12',
          label: 'Right Weapon',
        },
        {
          id: '4',
          label: 'Dual Weapon',
        },
        {
          id: '8',
          label: 'Walk',
        },
        {
          id: '16',
          label: 'Bow',
        },
        {
          id: '0',
          label: 'Cast',
        },
        {
          id: '20',
          label: 'Fall',
        },
      ]
    },
    {
      id: 'direction',
      type: 'select',
      label: 'Direction',
      options: [
        {
          id: '2',
          label: 'South',
        },
        {
          id: '1',
          label: 'Left',
        },
        {
          id: '3',
          label: 'Right',
        },
        {
          id: '0',
          label: 'North',
        },
      ]
    },
    {
      id: 'bodyType',
      type: 'color',
      label: 'Body Type',
      options: [
        {
          id: 'tanned',
          label: 'Tanned',
          value: '#fed082',
        },
        {
          id: 'tanned2',
          label: 'Tanned 2',
          value: '#eac279',
        },
        {
          id: 'light',
          label: 'Light',
          value: '#fdd6b8',
        },
        {
          id: 'dark',
          label: 'Dark',
          value: '#ba8454',
        },
        {
          id: 'dark2',
          label: 'Dark 2',
          value: '#9c663f',
        },
        {
          id: 'darkelf',
          label: 'Dark Elf',
          value: '#aeb3c9',
        },
        {
          id: 'darkelf2',
          label: 'Dark Elf 2',
          value: '#c9d0ed',
        },
        {
          id: 'orc',
          label: 'Orc',
          value: '#4cba68',
        },
        {
          id: 'red_orc',
          label: 'Red Orc',
          value: '#78a553',
        },
        {
          id: 'skeleton',
          label: 'Skeleton',
          value: '#fffffe',
        },
      ]
    },
    {
      id: 'bodyVariation',
      type: 'select',
      label: 'Body Variation',
      options: [
        {
          id: 'female',
          label: 'Female',
        },
        {
          id: 'male',
          label: 'Male',
        },
      ]
    },
    {
      id: 'ears',
      type: 'select',
      label: 'Ears',
      options: [
        {
          id: 'bigears',
          label: 'Big',
        },
        {
          id: 'elvenears',
          label: 'Elven',
        },
      ]
    },
    {
      id: 'eyes',
      type: 'color',
      label: 'Eyes',
      options: [
        {
          id: 'blue',
          label: 'Blue',
          value: '#65829b'
        },
        {
          id: 'brown',
          label: 'Brown',
          value: '#3c3437'
        },
        {
          id: 'gray',
          label: 'Gray',
          value: '#5c6269'
        },
        {
          id: 'green',
          label: 'Green',
          value: '#5c814d'
        },
        {
          id: 'orange',
          label: 'Orange',
          value: '#6e3f2f'
        },
        {
          id: 'purple',
          label: 'Purple',
          value: '#702158'
        },
        {
          id: 'red',
          label: 'Red',
          value: '#7d3c39'
        },
        {
          id: 'yellow',
          label: 'Yellow',
          value: '#a78e4f'
        },
        {
          id: 'skeleton',
          label: 'Skeleton',
          value: '#000'
        },

      ]
    },
    {
      id: 'nose',
      type: 'select',
      label: 'Nose',
      options: [
        {
          id: 'bignose',
          label: 'Big',
        },
        {
          id: 'buttonnose',
          label: 'Button',
        },
        {
          id: 'straighnose',
          label: 'Straigh',
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
      type: 'color',
      label: 'Hair Color',
      options: hairColors
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
    },
    {
      id: 'facialHairColor',
      type: 'color',
      label: 'Facial Hair Color',
      options: hairColors
    },
    {
      id: 'torso',
      type: 'select',
      label: 'Torso',
      options: torsos
    },
    {
      id: 'torso2',
      type: 'select',
      label: 'Torso 2',
      options: torsos
    },
    {
      id: 'arms',
      type: 'select',
      label: 'Arms',
      options: arms
    },
    {
      id: 'back',
      type: 'select',
      label: 'Back',
      options: backs
    },
    {
      id: 'legs',
      type: 'select',
      label: 'Legs',
      options: [
        {
          id: 'armor/golden_greaves',
          label: 'Golden Greaves',
        },
        {
          id: 'armor/metal_pants',
          label: 'Metal Pants',
        },
        {
          id: 'pants/magenta_pants',
          label: 'Magenta Pants',
        },
        {
          id: 'pants/red_pants',
          label: 'Red Pants',
        },
        {
          id: 'pants/teal_pants',
          label: 'Teal Pants',
        },
        {
          id: 'pants/white_pants',
          label: 'White Pants',
        },
      ]
    },
    {
      id: 'feet',
      type: 'select',
      label: 'Feet',
      options: [
        {
          id: 'boots/golden_boots',
          label: 'Golden Boots',
        },
        {
          id: 'boots/metal_boots',
          label: 'Metal Boots',
        },
        {
          id: 'shoes/black_shoes',
          label: 'Black Shoes',
        },
        {
          id: 'shoes/brown_shoes',
          label: 'Brown Shoes',
        },
        {
          id: 'shoes/maroon_shoes',
          label: 'Maroon Shoes',
        },
      ]
    },
    {
      id: 'leftHand',
      type: 'select',
      label: 'Left Hand',
      options: [
        {
          id: 'arrow_skeleton',
          label: 'Skeleton Arrow',
        },
        {
          id: 'arrow',
          label: 'Arrow',
        },
        {
          id: 'shield',
          label: 'Shield',
        }
      ]
    },
    {
      id: 'rightHand',
      type: 'select',
      label: 'Right Hand',
      options: [
        {
          id: 'bow_skeleton',
          label: 'Skeleton Bow',
        },
        {
          id: 'bow',
          label: 'Bow',
        },
        {
          id: 'dagger',
          label: 'Dagger',
        },
        {
          id: 'greatbow',
          label: 'Great Bow',
        },
        {
          id: 'recurvebow',
          label: 'Recurve Bow',
        },
        {
          id: 'spear',
          label: 'Spear',
        },
        {
          id: 'steelwand',
          label: 'Steel Wand',
        },
        {
          id: 'woodwand',
          label: 'Wood Wand',
        }
      ]
    },
    {
      id: 'bothHands',
      type: 'select',
      label: 'Both Hands',
      options: [
        {
          id: 'spear',
          label: 'Spear',
        }
      ]
    },
  ]

}
