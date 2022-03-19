import {
  PermissionKind,
  PermissionMode,
} from '@central-factory/permissions/models/permission';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import type { UserApplicationDocType } from '../../collections/user-applications.collection';
import {
  Application,
  ApplicationRenderingType,
  ColorVariation,
} from '../../models/application';

export const userApplications: UserApplicationDocType[] = [
  {
    id: 'com.central-factory.portal',
    name: 'Central Factory Portal',
    description: 'Central Factory Portal',
    startUrl: '/',
    icons: [
      {
        src: 'assets/icons/mdi/open-in-app.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.central-factory',
        name: 'Central Factory',
      },
      internal: true,
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'userpreferences',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'userapplications',
        },
      ],
    },
  },
  {
    id: 'com.central-factory.portals',
    name: 'Portals',
    description:
      'Access to many local and hosted web applications. Applications can be loaded through a webview or through a webpack module federation.',
    startUrl: 'StartScene',
    icons: [
      {
        src: 'assets/icons/mdi/web-box.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Start',
        url: '/start',
        icons: [
          {
            src: 'assets/icons/mdi/flare.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Portals',
        url: '/portals',
        icons: [
          {
            src: 'assets/icons/mdi/web-box.svg',
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
      renderingType: ApplicationRenderingType.Local,
      internal: true,
      sidebarShortcuts: ['Start'],
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'userapplications',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'userapplications',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: 'userapplications',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'storeapplications',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'storeapplications',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: 'storeapplications',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'usertopics',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'usertopics',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: 'usertopics',
        },
      ],
    },
  },
  {
    id: 'com.central-factory.devtools',
    name: 'DevTools',
    description: 'Inspect and play with your data.',
    startUrl: 'DevToolsScene',
    icons: [
      {
        src: 'assets/icons/mdi/code-not-equal-variant.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'DevTools',
        url: '/mirror',
        icons: [
          {
            src: 'assets/icons/mdi/code-not-equal-variant.svg',
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
      internal: true,
      renderingType: ApplicationRenderingType.Local,
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'userpreferences',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'userpreferences',
        },
      ],
      sidebarShortcuts: ['DevTools'],
    },
  },
  {
    id: 'com.central-factory.mirror',
    name: 'Mirror',
    description: 'Loading your Metaverse Mirror. Customize your avatars.',
    startUrl: 'CreateAvatarScene',
    icons: [
      {
        src: 'assets/icons/mdi/mirror-variant.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Mirror',
        url: '/mirror',
        icons: [
          {
            src: 'assets/icons/mdi/mirror-variant.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Select Avatar',
        url: '/select-avatar',
        icons: [
          {
            src: 'assets/icons/mdi/mirror-variant.svg',
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
      internal: true,
      renderingType: ApplicationRenderingType.Local,
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'userpreferences',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'userpreferences',
        },
      ],
      sidebarShortcuts: ['Mirror'],
    },
  },
  {
    id: 'com.central-factory.avatars',
    name: 'Avatars',
    description: 'Avatars management module. Customize your avatars.',
    startUrl: 'ManageAvatarsScene',
    icons: [
      {
        src: 'assets/icons/mdi/account.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Selected Avatar',
        url: '/selected-avatar',
        icons: [
          {
            src: 'assets/icons/mdi/account.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Select Avatar',
        url: '/select-avatar',
        icons: [
          {
            src: 'assets/icons/mdi/account.svg',
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
      internal: true,
      renderingType: ApplicationRenderingType.Local,
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: 'useravatars',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'userpreferences',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'userpreferences',
        },
      ],
      sidebarShortcuts: ['Selected Avatar'],
    },
  },
  {
    id: 'com.central-factory.inventory',
    name: 'Inventory',
    description: 'Assets management module. Manage and preview your assets.',
    startUrl: 'InventoryScene',
    icons: [
      {
        src: 'assets/icons/mdi/bag-personal.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Inventory',
        url: '/inventory',
        icons: [
          {
            src: 'assets/icons/mdi/bag-personal.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      renderingType: ApplicationRenderingType.Local,
      author: {
        id: 'com.central-factory',
        name: 'Central Factory',
      },
      disabled: true,
      internal: true,
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'userassets',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'userassets',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: 'userassets',
        },
      ],
      sidebarShortcuts: ['Inventory'],
    },
  },
  {
    id: 'com.central-factory.world',
    name: 'World',
    description: 'World Map',
    startUrl: 'WorldScene',
    icons: [
      {
        src: 'assets/icons/mdi/map-marker-circle.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'World',
        url: '/world',
        icons: [
          {
            src: 'assets/icons/mdi/map-marker-circle.svg',
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
      renderingType: ApplicationRenderingType.Local,
      internal: true,
      sidebarShortcuts: ['Map'],
    },
  },
  {
    id: 'com.central-factory.burg',
    name: 'Burg',
    description: 'Burg Map',
    startUrl: 'BurgMapScene',
    icons: [
      {
        src: 'assets/icons/mdi/city-variant.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Map',
        url: '/burg',
        icons: [
          {
            src: 'assets/icons/mdi/city-variant.svg',
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
      renderingType: ApplicationRenderingType.Local,
      internal: true,
      sidebarShortcuts: ['Map'],
    },
  },
  {
    id: 'com.central-factory.marketplace',
    name: 'Marketplace',
    description: 'Portal Marketplace. Sell your assets and acquire new ones.',
    startUrl: 'MarketplaceScene',
    icons: [
      {
        src: 'assets/icons/mdi/store.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Marketplace',
        url: '/marketplace',
        icons: [
          {
            src: 'assets/icons/mdi/store.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      renderingType: ApplicationRenderingType.Local,
      author: {
        id: 'com.central-factory',
        name: 'Central Factory',
      },
      internal: true,
      disabled: true,
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'userassets',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'userassets',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: 'userassets',
        },
      ],
      sidebarShortcuts: ['Marketplace'],
    },
  },
  {
    id: 'com.central-factory.settings',
    name: 'Settings',
    description: 'Customize your portal experience. Manage your preferences.',
    startUrl: 'SettingsScene',
    icons: [
      {
        src: 'assets/icons/mdi/cog.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Settings',
        url: '/settings',
        icons: [
          {
            src: 'assets/icons/mdi/cog.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      renderingType: ApplicationRenderingType.Local,
      internal: true,
      author: {
        id: 'com.central-factory',
        name: 'Central Factory',
      },
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: 'userpreferences',
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: 'userpreferences',
        },
      ],
      sidebarShortcuts: ['Settings'],
    },
  },
  {
    id: 'com.central-factory.codex',
    name: 'Codex',
    description: 'Official documentation for the Central Factory Metaverse',
    startUrl: 'codex',
    categories: ['productivity'],
    icons: [
      {
        src: 'assets/icons/mdi/book-open-page-variant.svg',
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
            src: 'assets/icons/mdi/book-open-page-variant.svg',
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
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: true,
      internal: false,
      permissions: [],
      defaultShortcut: 'Codex',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#706fd3',
        },
      ],
    },
  },
];

export const userApplicationsById: Record<string, Application> =
  userApplications.reduce(
    (acc, app) => Object.assign(acc, { [app.id]: app }),
    {}
  );

export const USER_APPLICATIONS_INITIAL_DATA_PROVIDER = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: 'userapplications',
    upsert: true,
    data: userApplications,
  },
  multi: true,
};
