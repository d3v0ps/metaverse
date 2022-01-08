import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { Customization } from '../../../models/customization';
import { Preference } from '../../../models/preference';

export const customization: Preference<Customization> = {
  id: 'settings.customization',
  key: 'settings.customization',
  value: {
    theme: {
      name: 'Default',
      path: 'assets/themes/default/variables.css',
    },
  },
};

export const CUSTOMIZATION_INITIAL_DATA_PROVIDER = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: 'userpreferences',
    upsert: false,
    data: [customization],
  },
  multi: true,
};
