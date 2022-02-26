
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
    id: 'plate/legion/legionplate_bronze',
    label: 'Bronze Legion Plate',
  },
  {
    id: 'plate/legion/legionplate_bronze2',
    label: 'Bronze 2 Legion Plate',
  },
  {
    id: 'plate/legion/legionplate_steel',
    label: 'Steel Legion Plate',
  },
  {
    id: 'plate/legion/legionplate_gold',
    label: 'Gold Legion Plate',
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
  {
    id: 'plate/legion/legionbauldron_bronze',
    label: 'Bronze Legion Bauldron',
  },
  {
    id: 'plate/legion/legionbauldron_steel',
    label: 'Steel Legion Bauldron',
  },
  {
    id: 'plate/legion/legionbauldron_gold',
    label: 'Gold Legion Bauldron',
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
      id: 'head',
      type: 'select',
      label: 'Head',
      options: [
        {
          id: 'helms/barbarian/brass',
          label: 'Brass Barbarian Helmet'
        },
        {
          id: 'helms/barbarian/bronze',
          label: 'Bronze Barbarian Helmet'
        },
        {
          id: 'helms/barbarian/ceramic',
          label: 'Ceramic Barbarian Helmet'
        },
        {
          id: 'helms/barbarian/copper',
          label: 'Copper Barbarian Helmet'
        },
        {
          id: 'helms/barbarian/gold',
          label: 'Gold Barbarian Helmet'
        },
        {
          id: 'helms/barbarian/iron',
          label: 'Iron Barbarian Helmet'
        },
        {
          id: 'helms/barbarian/silver',
          label: 'Silver Barbarian Helmet'
        },
        {
          id: 'helms/barbarian/steel',
          label: 'Steel Barbarian Helmet'
        },
        {
          id: 'helms/barbarian_nasal/brass',
          label: 'Brass Barbarian Nasal Helmet'
        },
        {
          id: 'helms/barbarian_nasal/bronze',
          label: 'Bronze Barbarian Nasal Helmet'
        },
        {
          id: 'helms/barbarian_nasal/ceramic',
          label: 'Ceramic Barbarian Nasal Helmet'
        },
        {
          id: 'helms/barbarian_nasal/copper',
          label: 'Copper Barbarian Nasal Helmet'
        },
        {
          id: 'helms/barbarian_nasal/gold',
          label: 'Gold Barbarian Nasal Helmet'
        },
        {
          id: 'helms/barbarian_nasal/iron',
          label: 'Iron Barbarian Nasal Helmet'
        },
        {
          id: 'helms/barbarian_nasal/silver',
          label: 'Silver Barbarian Nasal Helmet'
        },
        {
          id: 'helms/barbarian_nasal/steel',
          label: 'Steel Barbarian Nasal Helmet'
        },
        {
          id: 'helms/barbarian_viking/brass',
          label: 'Brass Barbarian Viking Helmet'
        },
        {
          id: 'helms/barbarian_viking/bronze',
          label: 'Bronze Barbarian Viking Helmet'
        },
        {
          id: 'helms/barbarian_viking/ceramic',
          label: 'Ceramic Barbarian Viking Helmet'
        },
        {
          id: 'helms/barbarian_viking/copper',
          label: 'Copper Barbarian Viking Helmet'
        },
        {
          id: 'helms/barbarian_viking/gold',
          label: 'Gold Barbarian Viking Helmet'
        },
        {
          id: 'helms/barbarian_viking/iron',
          label: 'Iron Barbarian Viking Helmet'
        },
        {
          id: 'helms/barbarian_viking/silver',
          label: 'Silver Barbarian Viking Helmet'
        },
        {
          id: 'helms/barbarian_viking/steel',
          label: 'Steel Barbarian Viking Helmet'
        },
        {
          id: 'helms/barbuta/brass',
          label: 'Brass Barbuta'
        },
        {
          id: 'helms/barbuta/bronze',
          label: 'Bronze Barbuta'
        },
        {
          id: 'helms/barbuta/ceramic',
          label: 'Ceramic Barbuta'
        },
        {
          id: 'helms/barbuta/copper',
          label: 'Copper Barbuta'
        },
        {
          id: 'helms/barbuta/gold',
          label: 'Gold Barbuta'
        },
        {
          id: 'helms/barbuta/iron',
          label: 'Iron Barbuta'
        },
        {
          id: 'helms/barbuta/silver',
          label: 'Silver Barbuta'
        },
        {
          id: 'helms/barbuta/steel',
          label: 'Steel Barbuta'
        },
        {
          id: 'helms/barbuta_simple/brass',
          label: 'Brass Barbuta Simple'
        },
        {
          id: 'helms/barbuta_simple/brass',
          label: 'Brass Barbuta Simple'
        },
        {
          id: 'helms/barbuta_simple/bronze',
          label: 'Bronze Barbuta Simple'
        },
        {
          id: 'helms/barbuta_simple/ceramic',
          label: 'Ceramic Barbuta Simple'
        },
        {
          id: 'helms/barbuta_simple/copper',
          label: 'Copper Barbuta Simple'
        },
        {
          id: 'helms/barbuta_simple/gold',
          label: 'Gold Barbuta Simple'
        },
        {
          id: 'helms/barbuta_simple/iron',
          label: 'Iron Barbuta Simple'
        },
        {
          id: 'helms/barbuta_simple/silver',
          label: 'Silver Barbuta Simple'
        },
        {
          id: 'helms/barbuta_simple/steel',
          label: 'Steel Barbuta Simple'
        },
        {
          id: 'helms/close/brass',
          label: 'Brass Close Helmet'
        },
        {
          id: 'helms/close/bronze',
          label: 'Bronze Close Helmet'
        },
        {
          id: 'helms/close/ceramic',
          label: 'Ceramic Close Helmet'
        },
        {
          id: 'helms/close/copper',
          label: 'Copper Close Helmet'
        },
        {
          id: 'helms/close/gold',
          label: 'Gold Close Helmet'
        },
        {
          id: 'helms/close/iron',
          label: 'Iron Close Helmet'
        },
        {
          id: 'helms/close/silver',
          label: 'Silver Close Helmet'
        },
        {
          id: 'helms/close/steel',
          label: 'Steel Close Helmet'
        },
        {
          id: 'helms/flattop/brass',
          label: 'Brass Flattop Helmet'
        },
        {
          id: 'helms/greathelm/brass',
          label: 'Brass Great Helmet'
        },
        {
          id: 'helms/greathelm/bronze',
          label: 'Bronze Great Helmet'
        },
        {
          id: 'helms/greathelm/ceramic',
          label: 'Ceramic Great Helmet'
        },
        {
          id: 'helms/greathelm/copper',
          label: 'Copper Great Helmet'
        },
        {
          id: 'helms/greathelm/gold',
          label: 'Gold Great Helmet'
        },
        {
          id: 'helms/greathelm/iron',
          label: 'Iron Great Helmet'
        },
        {
          id: 'helms/greathelm/silver',
          label: 'Silver Great Helmet'
        },
        {
          id: 'helms/greathelm/steel',
          label: 'Steel Great Helmet'
        },
        {
          id: 'helms/nasal/brass',
          label: 'Brass Nasal Helmet'
        },
        {
          id: 'helms/nasal/bronze',
          label: 'Bronze Nasal Helmet'
        },
        {
          id: 'helms/nasal/ceramic',
          label: 'Ceramic Nasal Helmet'
        },
        {
          id: 'helms/nasal/copper',
          label: 'Copper Nasal Helmet'
        },
        {
          id: 'helms/nasal/gold',
          label: 'Gold Nasal Helmet'
        },
        {
          id: 'helms/nasal/iron',
          label: 'Iron Nasal Helmet'
        },
        {
          id: 'helms/nasal/silver',
          label: 'Silver Nasal Helmet'
        },
        {
          id: 'helms/nasal/steel',
          label: 'Steel Nasal Helmet'
        },
        {
          id: 'helms/spangenhelm/brass',
          label: 'Brass Spangenhelm'
        },
        {
          id: 'helms/spangenhelm/bronze',
          label: 'Bronze Spangenhelm'
        },
        {
          id: 'helms/spangenhelm/ceramic',
          label: 'Ceramic Spangenhelm'
        },
        {
          id: 'helms/spangenhelm/copper',
          label: 'Copper Spangenhelm'
        },
        {
          id: 'helms/spangenhelm/gold',
          label: 'Gold Spangenhelm'
        },
        {
          id: 'helms/spangenhelm/iron',
          label: 'Iron Spangenhelm'
        },
        {
          id: 'helms/spangenhelm/silver',
          label: 'Silver Spangenhelm'
        },
        {
          id: 'helms/spangenhelm/steel',
          label: 'Steel Spangenhelm'
        },
        {
          id: 'helms/spangenhelm_viking/brass',
          label: 'Brass Spangenhelm Viking'
        },
        {
          id: 'helms/spangenhelm_viking/bronze',
          label: 'Bronze Spangenhelm Viking'
        },
        {
          id: 'helms/spangenhelm_viking/ceramic',
          label: 'Ceramic Spangenhelm Viking'
        },
        {
          id: 'helms/spangenhelm_viking/copper',
          label: 'Copper Spangenhelm Viking'
        },
        {
          id: 'helms/spangenhelm_viking/gold',
          label: 'Gold Spangenhelm Viking'
        },
        {
          id: 'helms/spangenhelm_viking/iron',
          label: 'Iron Spangenhelm Viking'
        },
        {
          id: 'helms/spangenhelm_viking/silver',
          label: 'Silver Spangenhelm Viking'
        },
        {
          id: 'helms/spangenhelm_viking/steel',
          label: 'Steel Spangenhelm Viking'
        },
        {
          id: 'helms/sugarloaf/brass',
          label: 'Brass Sugarloaf'
        },
        {
          id: 'helms/sugarloaf/bronze',
          label: 'Bronze Sugarloaf'
        },
        {
          id: 'helms/sugarloaf/ceramic',
          label: 'Ceramic Sugarloaf'
        },
        {
          id: 'helms/sugarloaf/copper',
          label: 'Copper Sugarloaf'
        },
        {
          id: 'helms/sugarloaf/gold',
          label: 'Gold Sugarloaf'
        },
        {
          id: 'helms/sugarloaf/iron',
          label: 'Iron Sugarloaf'
        },
        {
          id: 'helms/sugarloaf/silver',
          label: 'Silver Sugarloaf'
        },
        {
          id: 'helms/sugarloaf/steel',
          label: 'Steel Sugarloaf'
        },
        {
          id: 'helms/sugarloaf_simple/brass',
          label: 'Brass Sugarloaf Simple'
        },
        {
          id: 'helms/sugarloaf_simple/bronze',
          label: 'Bronze Sugarloaf Simple'
        },
        {
          id: 'helms/sugarloaf_simple/ceramic',
          label: 'Ceramic Sugarloaf Simple'
        },
        {
          id: 'helms/sugarloaf_simple/copper',
          label: 'Copper Sugarloaf Simple'
        },
        {
          id: 'helms/sugarloaf_simple/gold',
          label: 'Gold Sugarloaf Simple'
        },
        {
          id: 'helms/sugarloaf_simple/iron',
          label: 'Iron Sugarloaf Simple'
        },
        {
          id: 'helms/sugarloaf_simple/silver',
          label: 'Silver Sugarloaf Simple'
        },
        {
          id: 'helms/sugarloaf_simple/steel',
          label: 'Steel Sugarloaf Simple'
        },
        {
          id: 'helms/legion/legionhelmet_bronze',
          label: 'Bronze Legion Helmet'
        },
        {
          id: 'helms/legion/legionhelmet_steel',
          label: 'Steel Legion Helmet'
        },
        {
          id: 'helms/legion/legionhelmet_gold',
          label: 'Gold Legion Helmet'
        },
        {
          id: 'helms/legion/legion2helmet_bronze',
          label: 'Bronze Legion Helmet 2'
        },
        {
          id: 'helms/legion/legion2helmet_steel',
          label: 'Steel Legion Helmet 2'
        },
        {
          id: 'helms/legion/legion2helmet_gold',
          label: 'Gold Legion Helmet 2'
        },
        {
          id: 'helms/legion/legion3helmet_bronze',
          label: 'Bronze Legion Helmet 3'
        },
        {
          id: 'helms/legion/legion3helmet_steel',
          label: 'Steel Legion Helmet 3'
        },
        {
          id: 'helms/legion/legion3helmet_gold',
          label: 'Gold Legion Helmet 3'
        },
        {
          id: 'bandanas/red',
          label: 'Red Bandana'
        },
        {
          id: 'caps/leather_cap',
          label: 'Leather Cap'
        },
        {
          id: 'helms/chainhat',
          label: 'Chain Hat'
        },
        {
          id: 'helms/golden_helm',
          label: 'Golden Helm'
        },
        {
          id: 'helms/metal_helm',
          label: 'Metal Helm'
        },
        {
          id: 'hoods/chain_hood',
          label: 'Chain Hood'
        },
        {
          id: 'hoods/cloth_hood',
          label: 'Cloth Hood'
        }
      ]
    },
    {
      id: 'visor',
      type: 'select',
      label: 'Head Visor',
      options: [
        {
          id: 'visors/grated/brass',
          label: 'Brass Grated Visor'
        },
        {
          id: 'visors/grated/bronze',
          label: 'Bronze Grated Visor'
        },
        {
          id: 'visors/grated/ceramic',
          label: 'Ceramic Grated Visor'
        },
        {
          id: 'visors/grated/copper',
          label: 'Copper Grated Visor'
        },
        {
          id: 'visors/grated/gold',
          label: 'Gold Grated Visor'
        },
        {
          id: 'visors/grated/iron',
          label: 'Iron Grated Visor'
        },
        {
          id: 'visors/grated/silver',
          label: 'Silver Grated Visor'
        },
        {
          id: 'visors/grated/steel',
          label: 'Steel Grated Visor'
        },
        {
          id: 'visors/grated_narrow/brass',
          label: 'Brass Grated Narrow Visor'
        },
        {
          id: 'visors/grated_narrow/bronze',
          label: 'Bronze Grated Narrow Visor'
        },
        {
          id: 'visors/grated_narrow/ceramic',
          label: 'Ceramic Grated Narrow Visor'
        },
        {
          id: 'visors/grated_narrow/copper',
          label: 'Copper Grated Narrow Visor'
        },
        {
          id: 'visors/grated_narrow/gold',
          label: 'Gold Grated Narrow Visor'
        },
        {
          id: 'visors/grated_narrow/iron',
          label: 'Iron Grated Narrow Visor'
        },
        {
          id: 'visors/grated_narrow/silver',
          label: 'Silver Grated Narrow Visor'
        },
        {
          id: 'visors/grated_narrow/steel',
          label: 'Steel Grated Narrow Visor'
        }
      ]
    },
    {
      id: 'headAccesory',
      type: 'select',
      label: 'Head Accesory',
      options: [
        {
          id: 'accesories/crest/brass',
          label: 'Brass Crest'
        },
        {
          id: 'accesories/crest/bronze',
          label: 'Bronze Crest'
        },
        {
          id: 'accesories/crest/ceramic',
          label: 'Ceramic Crest'
        },
        {
          id: 'accesories/crest/copper',
          label: 'Copper Crest'
        },
        {
          id: 'accesories/crest/gold',
          label: 'Gold Crest'
        },
        {
          id: 'accesories/crest/iron',
          label: 'Iron Crest'
        },
        {
          id: 'accesories/crest/silver',
          label: 'Silver Crest'
        },
        {
          id: 'accesories/crest/steel',
          label: 'Steel Crest'
        },
        {
          id: 'accesories/crest_centurion/brass',
          label: 'Brass Centurion Crest'
        },
        {
          id: 'accesories/crest_centurion/bronze',
          label: 'Bronze Centurion Crest'
        },
        {
          id: 'accesories/crest_centurion/ceramic',
          label: 'Ceramic Centurion Crest'
        },
        {
          id: 'accesories/crest_centurion/copper',
          label: 'Copper Centurion Crest'
        },
        {
          id: 'accesories/crest_centurion/gold',
          label: 'Gold Centurion Crest'
        },
        {
          id: 'accesories/crest_centurion/iron',
          label: 'Iron Centurion Crest'
        },
        {
          id: 'accesories/crest_centurion/silver',
          label: 'Silver Centurion Crest'
        },
        {
          id: 'accesories/crest_centurion/steel',
          label: 'Steel Centurion Crest'
        },
        {
          id: 'accesories/horns/bg/horns_1',
          label: 'Horns'
        },
        {
          id: 'accesories/horns/bg/horns_2',
          label: 'Horns 2'
        },
        {
          id: 'accesories/horns/bg/horns_3',
          label: 'Horns 3'
        },

      ]
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
        {
          id: 'skirt/legion_skirt',
          label: 'Legion Skirt',
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
        {
          id: 'sandals/legion',
          label: 'Sandals',
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
          id: 'axe',
          label: 'Axe',
        },
        {
          id: 'warhammer',
          label: 'Warhammer',
        },
        {
          id: 'pickaxe',
          label: 'Pickaxe',
        },
        {
          id: 'labrys',
          label: 'Labrys',
        },
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
