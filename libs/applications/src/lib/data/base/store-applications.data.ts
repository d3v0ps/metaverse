import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type { StoreApplicationDocType } from '../../collections/store-applications.collection';
import {
  ApplicationRenderingType,
  ColorVariation,
} from '../../models/application';

export const storeApplications: StoreApplicationDocType[] = [
  {
    id: 'com.central-factory.metadrones',
    name: 'Metadrones',
    description: 'Game demo on how to integrate with the metaverse',
    startUrl: 'codex',
    icons: [
      {
        src: 'assets/icons/mdi/drone.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Codex',
        url: 'https://www.aitorllamas.com/metaverse/apps/codex',
        icons: [
          {
            src: 'assets/icons/mid/book-open-page-variant.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.central-factory',
        name: 'Central Factory',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Codex',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#d1d36f',
        },
      ],
    },
  },
];

export const STORE_APPLICATIONS_INITIAL_DATA_PROVIDER = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: 'storeapplications',
    upsert: true,
    data: storeApplications,
  },
  multi: true,
};
