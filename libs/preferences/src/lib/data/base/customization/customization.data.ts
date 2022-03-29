import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { environment } from '../../../../../../../apps/portal/src/environments/environment';
import { Customization } from '../../../models/customization';
import { Preference } from '../../../models/preference';

export const customization: Preference<Customization>[] = [
  {
    id: 'settings.customization',
    key: 'settings.customization',
    value: {
      theme: {
        name: 'Metaverse',
        path: 'assets/themes/metaverse/variables.css',
      },
      background: {
        name: 'Apartment 2',
        url: 'http://www.youtube.com/embed/CMkI2EItvRw',
      },
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
