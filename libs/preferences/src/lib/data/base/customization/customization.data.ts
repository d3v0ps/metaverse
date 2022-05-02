import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { environment } from '../../../../../../../apps/portal/src/environments/environment';
import { Customization } from '../../../models/customization';
import { Preference } from '../../../models/preference';

export const backgrounds = [
  {
    name: 'Custom',
    url: '',
  },
  {
    name: 'Code',
    url: '',
  },
  {
    name: 'Singularity',
    url: 'http://www.youtube.com/embed/pfW3JhCUOD8',
  },
  {
    name: 'Eternity',
    url: 'http://www.youtube.com/embed/ewcO1MNyRME',
  },
  {
    name: 'Apartment',
    url: 'http://www.youtube.com/embed/B6eL_N0N5KI',
  },
  {
    name: 'Apartment 2',
    url: 'http://www.youtube.com/embed/CMkI2EItvRw',
  },
  {
    name: 'Sleeping Quarters',
    url: 'https://www.youtube.com/embed/bjQUCecur3w',
  },
  {
    name: 'Bag End',
    url: 'http://www.youtube.com/embed/3DTvk8boR8U',
  },
  {
    name: 'Inn',
    url: 'http://www.youtube.com/embed/Wr067srQKUg',
  },
  {
    name: 'Inn II',
    url: 'http://www.youtube.com/embed/vyg5jJrZ42s',
  },
  {
    name: 'Morning Rain and Thunder at Castle',
    url: 'http://www.youtube.com/embed/eVCR3X6OfSc',
  },
  {
    name: 'Magic Castle',
    url: 'http://www.youtube.com/embed/jATVgJ_grys',
  },
  {
    name: 'Elven Havens',
    url: 'http://www.youtube.com/embed/5RlXStnMirE',
  },
  {
    name: 'Royal Library',
    url: 'http://www.youtube.com/embed/CHFif_y2TyM',
  },
  {
    name: 'Japan',
    url: 'http://www.youtube.com/embed/hR3sK0_nNGA',
  },
  {
    name: 'Paris Apartment',
    url: 'http://www.youtube.com/embed/Dvu_2lzfd2I',
  },
  {
    name: 'NYC Apartment',
    url: 'http://www.youtube.com/embed/sVl9A21zCYk',
  },
  {
    name: 'Hong Kong Apartment',
    url: 'http://www.youtube.com/embed/sJ8ZoJNE4cU',
  },
  {
    name: 'Tokio Apartment',
    url: 'http://www.youtube.com/embed/hBGbt2CRDpA',
  },
  {
    name: 'Toronto Window',
    url: 'http://www.youtube.com/embed/bLAzpxidPN0',
  },
  {
    name: 'Cozy Treehouse',
    url: 'http://www.youtube.com/embed/xRItTqAU800',
  },
  {
    name: 'Cozy Cabin',
    url: 'http://www.youtube.com/embed/-mirqViyITY',
  },
  {
    name: 'Cozy Cabin II',
    url: 'http://www.youtube.com/embed/gKnG2WKtvgc',
  },
  {
    name: 'Cozy Cabin III',
    url: 'http://www.youtube.com/embed/yx4xb3rp750',
  },
  {
    name: 'Beach House',
    url: 'http://www.youtube.com/embed/5zkP39BtGBY',
  },
  {
    name: 'Beach House II',
    url: 'http://www.youtube.com/embed/DjlCNRSC07A',
  },
  {
    name: 'Tropical Sunset',
    url: 'http://www.youtube.com/embed/d7uCjM9vWlw',
  },
  {
    name: 'Spring Coffee Shop',
    url: 'http://www.youtube.com/embed/uby4pigzp6Q',
  },
  {
    name: 'Victorian London',
    url: 'http://www.youtube.com/embed/8q7o-Bg2gRA',
  },
  {
    name: 'Anime Window',
    url: 'http://www.youtube.com/embed/pl2-zgZBo5Y',
  },
  {
    name: 'Dunes',
    url: 'http://www.youtube.com/embed/hShxsAlJmfw',
  },
  {
    name: 'Dark Planet',
    url: 'http://www.youtube.com/embed/yCJHo-HC2d8',
  },
  {
    name: 'Gothic City',
    url: 'http://www.youtube.com/embed/xrOXhZjyxfY',
  },
  {
    name: 'Cyberpunk City',
    url: 'http://www.youtube.com/embed/zkzdY572ZHk',
  },
  {
    name: 'Cyberpunk City II',
    url: 'http://www.youtube.com/embed/ouzhVyQv5ws',
  },
  {
    name: 'Cyberpunk City III',
    url: 'http://www.youtube.com/embed/W5KJsQMKbwM',
  },
  {
    name: 'Cyberpunk City IV',
    url: 'http://www.youtube.com/embed/0FyEM4g4eR0',
  },
  {
    name: 'Matrix City',
    url: 'http://www.youtube.com/embed/Wnagw1bEhBY',
  },
  {
    name: 'Space City',
    url: 'http://www.youtube.com/embed/z6DV5l0NWZ4',
  },
  {
    name: 'Factory Sounds',
    url: 'https://www.youtube.com/embed/bDZVYI_hIEs',
  },
];

export const customization: Preference<Customization>[] = [
  {
    id: 'settings.customization',
    key: 'settings.customization',
    value: {
      theme: {
        name: 'Metaverse',
        path: 'assets/themes/metaverse/variables.css',
      },
      background: backgrounds.find((b) => b.name === 'Paris Apartment'),
    },
  },
  {
    id: 'settings.customization.1',
    key: 'settings.customization.1',
    value: {
      theme: {
        name: 'Metaverse',
        path: 'assets/themes/metaverse/variables.css',
      },
    },
  },
  {
    id: 'settings.customization.2',
    key: 'settings.customization.2',
    value: {
      theme: {
        name: 'Bubbles',
        path: 'assets/themes/bubbles/variables.css',
      },
    },
  },
  {
    id: 'settings.customization.3',
    key: 'settings.customization.3',
    value: {
      theme: {
        name: 'Central Factory',
        path: 'assets/themes/default/variables.css',
      },
    },
  },
];

export const store: Preference<any>[] = [
  {
    id: 'store.settings.repositories',
    key: 'store.settings.repositories',
    value: [
      {
        label: 'The Central Factory',
        // url: '/applications.json',
        url: `${environment.repositoryUrl}`,
      },
    ],
  },
];

export const world: Preference<any>[] = [
  {
    id: 'worlds.settings.repositories',
    key: 'worlds.settings.repositories',
    value: [
      {
        src: `${environment.worldUrl}`,
      },
    ],
  },
];

export const userPreferences = [...customization, ...store, ...world];

export const CUSTOMIZATION_INITIAL_DATA_PROVIDER = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: 'userpreferences',
    upsert: false,
    data: userPreferences,
  },
  multi: true,
};
