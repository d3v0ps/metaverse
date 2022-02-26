
import { DesignStyle } from '../models/design-style';

const hairColors = [
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
          id: 'child',
          label: 'Child',
        },
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
      type: 'select',
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
