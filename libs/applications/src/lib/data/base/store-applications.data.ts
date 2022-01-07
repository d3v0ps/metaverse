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
    startUrl: 'metadrones',
    icons: [
      {
        src: 'assets/icons/mdi/drone.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Metadrones',
        url: 'metadrones',
        icons: [
          {
            src: 'assets/icons/mdi/drone.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['games'],
    additionalProperties: {
      author: {
        id: 'com.central-factory',
        name: 'Central Factory',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.WebpackModuleFederation,
      supportsBrowser: true,
      internal: false,
      defaultShortcut: 'Metadrones',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#d1d36f',
        },
      ],
    },
  },
  {
    id: 'com.google.search',
    name: 'Google Search',
    description: 'Search Engine by Google',
    startUrl: 'https://google.com',
    categories: ['productivity', 'utilities'],
    icons: [
      {
        src: 'assets/icons/mdi/magnify.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Search',
        url: 'https://google.com',
        icons: [
          {
            src: 'assets/icons/mdi/magnify.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.alphabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Search',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#4285f4',
        },
      ],
    },
  },
  {
    id: 'com.google.drive',
    name: 'Google Drive',
    description: 'Drive Cloud by Google',
    startUrl: 'https://drive.google.com',
    icons: [
      {
        src: 'assets/icons/mdi/google-drive.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    categories: ['productivity', 'utilities'],
    shortcuts: [
      {
        name: 'Search',
        url: 'https://drive.google.com',
        icons: [
          {
            src: 'assets/icons/mdi/google-drive.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.alphabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Search',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#4285f4',
        },
      ],
    },
  },
  {
    id: 'com.google.keep',
    name: 'Google Keep',
    description: 'Notes Application by Google',
    startUrl: 'https://keep.google.com',
    icons: [
      {
        src: 'assets/icons/mdi/google-keep.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Keep',
        url: 'https://keep.google.com',
        icons: [
          {
            src: 'assets/icons/mdi/google-keeps.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['productivity', 'utilities'],
    additionalProperties: {
      author: {
        id: 'com.alphabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Keep',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#fbbc05',
        },
      ],
    },
  },
  {
    id: 'com.google.maps',
    name: 'Google Maps',
    description: 'Maps Application by Google',
    startUrl: 'https://maps.google.com',
    icons: [
      {
        src: 'assets/icons/mdi/map.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Maps',
        url: 'https://maps.google.com',
        icons: [
          {
            src: 'assets/icons/mdi/map.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['travel', 'utilites'],
    additionalProperties: {
      author: {
        id: 'com.alphabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Maps',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#34a853',
        },
      ],
    },
  },
  {
    id: 'com.google.travel',
    name: 'Google Travel',
    description: 'Travel Application by Google',
    startUrl: 'https://travel.google.com',
    icons: [
      {
        src: 'assets/icons/mdi/bag-checked.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Travel',
        url: 'https://travel.google.com',
        icons: [
          {
            src: 'assets/icons/mdi/bag-checked.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['finances', 'travel'],
    additionalProperties: {
      author: {
        id: 'com.alphabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Travel',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#4285f4',
        },
      ],
    },
  },
  {
    id: 'com.google.flights',
    name: 'Google Flights',
    description: 'Flights Application by Google',
    startUrl: 'https://flights.google.com',
    icons: [
      {
        src: 'assets/icons/mdi/airplane.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Flights',
        url: 'https://flights.google.com',
        icons: [
          {
            src: 'assets/icons/mdi/airplane.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['finances', 'travel'],
    additionalProperties: {
      author: {
        id: 'com.alphabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Flights',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#4285f4',
        },
      ],
    },
  },
  {
    id: 'com.freenow.freenow',
    name: 'Free Now',
    description: 'Taxis Application',
    startUrl: 'https://free-now.com/',
    icons: [
      {
        src: 'assets/icons/mdi/taxi.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Order',
        url: 'https://free-now.com/',
        icons: [
          {
            src: 'assets/icons/mdi/taxi.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['finances', 'travel'],
    additionalProperties: {
      author: {
        id: 'com.freenow',
        name: 'Free Now',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Order',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#F80B2B',
        },
      ],
    },
  },
  {
    id: 'com.spotify.player',
    name: 'Spotify',
    description: 'Music Player',
    startUrl: 'https://open.spotify.com',
    icons: [
      {
        src: 'assets/icons/mdi/spotify.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Player',
        url: 'https://open.spotify.com',
        icons: [
          {
            src: 'assets/icons/mdi/spotify.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['entertainment'],
    additionalProperties: {
      author: {
        id: 'com.spotify',
        name: 'Spotify',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Player',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#1db954',
        },
      ],
    },
  },
  {
    id: 'com.ivoox.player',
    name: 'IVoox',
    description: 'Podcasts Player',
    startUrl: 'https://ivoox.com',
    icons: [
      {
        src: 'assets/icons/mdi/podcast.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://ivoox.com',
        icons: [
          {
            src: 'assets/icons/mdi/podcast.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['entertainment'],
    additionalProperties: {
      author: {
        id: 'com.ivoox',
        name: 'IVoox',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Portal',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#f47721',
        },
      ],
    },
  },
  {
    id: 'com.netflix.player',
    name: 'Netflix',
    description: 'Movies & TV Shows',
    startUrl: 'https://netflix.com',
    icons: [
      {
        src: 'assets/icons/mdi/netflix.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Player',
        url: 'https://netflix.com',
        icons: [
          {
            src: 'assets/icons/mdi/netflix.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['entertainment'],
    additionalProperties: {
      author: {
        id: 'com.netflix',
        name: 'Netflix',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Player',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#e50914',
        },
      ],
    },
  },
  {
    id: 'com.amazon.primevideo',
    name: 'Prime Video',
    description: 'Movies & TV Shows',
    startUrl: 'https://primevideo.com',
    icons: [
      {
        src: 'assets/icons/mdi/movie.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Player',
        url: 'https://primevideo.com',
        icons: [
          {
            src: 'assets/icons/mdi/nemovietflix.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['entertainment'],
    additionalProperties: {
      author: {
        id: 'com.amazon',
        name: 'Amazon',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Player',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#146eb4',
        },
      ],
    },
  },
  {
    id: 'com.google.youtube',
    name: 'Youtube',
    description: 'Youtube Videos',
    startUrl: 'https://youtube.com',
    icons: [
      {
        src: 'assets/icons/mdi/youtube.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://youtube.com',
        icons: [
          {
            src: 'assets/icons/mdi/youtube.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['entertainment'],
    additionalProperties: {
      author: {
        id: 'com.aplhabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Portal',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#ea4335',
        },
      ],
    },
  },
  {
    id: 'com.meta.instagram',
    name: 'Instagram',
    description: 'Pictures Social Network',
    startUrl: 'https://instagram.com',
    icons: [
      {
        src: 'assets/icons/mdi/instagram.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Player',
        url: 'https://instagram.com',
        icons: [
          {
            src: 'assets/icons/mdi/instagram.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['social'],
    additionalProperties: {
      author: {
        id: 'com.meta',
        name: 'Meta',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Player',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#405de6',
        },
      ],
    },
  },
  {
    id: 'com.meta.whatsapp',
    name: 'WhatsApp',
    description: 'Messaging Application',
    startUrl: 'https://web.whatsapp.com',
    icons: [
      {
        src: 'assets/icons/mdi/whatsapp.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Player',
        url: 'https://web.whatsapp.com',
        icons: [
          {
            src: 'assets/icons/mdi/whatsapp.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['social'],
    additionalProperties: {
      author: {
        id: 'com.meta',
        name: 'Meta',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Player',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#128c7e',
        },
      ],
    },
  },
  {
    id: 'com.evernote.evernote',
    name: 'Evernote',
    description: 'Notes Application',
    startUrl: 'https://evernote.com/intl/es/',
    icons: [
      {
        src: 'assets/icons/mdi/evernote.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Player',
        url: 'https://evernote.com/intl/es/',
        icons: [
          {
            src: 'assets/icons/mdi/evernote.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['productivity', 'utilities'],
    additionalProperties: {
      author: {
        id: 'com.evernote',
        name: 'Evernote',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Player',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#2dbe60',
        },
      ],
    },
  },
  {
    id: 'com.microsoft.github',
    name: 'Github',
    description: 'Code Repositories',
    startUrl: 'https://github.com',
    icons: [
      {
        src: 'assets/icons/mdi/github.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://github.com',
        icons: [
          {
            src: 'assets/icons/mdi/github.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['productivity', 'utilities'],
    additionalProperties: {
      author: {
        id: 'com.microsoft',
        name: 'Microsoft',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Portal',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#333',
        },
      ],
    },
  },
  {
    id: 'com.google.mail',
    name: 'Gmail',
    description: 'Mail Inbox',
    startUrl: 'https://mail.google.com',
    icons: [
      {
        src: 'assets/icons/mdi/gmail.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Inbox',
        url: 'https://mail.google.com',
        icons: [
          {
            src: 'assets/icons/mdi/gmail.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['productivity', 'utilities'],
    additionalProperties: {
      author: {
        id: 'com.alphabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Inbox',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#ea4335',
        },
      ],
    },
  },
  {
    id: 'com.google.calendar',
    name: 'Google Calendar',
    description: 'Calendar Application',
    startUrl: 'https://calendar.google.com',
    icons: [
      {
        src: 'assets/icons/mdi/calendar.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Agenda',
        url: 'https://calendar.google.com',
        icons: [
          {
            src: 'assets/icons/mdi/calendar.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['productivity', 'utilities'],
    additionalProperties: {
      author: {
        id: 'com.alphabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Agenda',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#4285f4',
        },
      ],
    },
  },
  {
    id: 'com.doist.todoist',
    name: 'Todoist',
    description: 'Tasks management',
    startUrl: 'https://todoist.com/app/',
    icons: [
      {
        src: 'assets/icons/mdi/format-list-checks.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://todoist.com/app/',
        icons: [
          {
            src: 'assets/icons/mdi/format-list-checks.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['productivity', 'utilities'],
    additionalProperties: {
      author: {
        id: 'com.doist',
        name: 'Doist',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Portal',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#E44433',
        },
      ],
    },
  },
  {
    id: 'com.amazon.shopping',
    name: 'Amazon Shopping',
    description: 'Online Store',
    startUrl: 'https://amazon.es',
    icons: [
      {
        src: 'assets/icons/mdi/basket.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Shopping',
        url: 'https://amazon.es',
        icons: [
          {
            src: 'assets/icons/mdi/basket.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['shopping'],
    additionalProperties: {
      author: {
        id: 'com.amazon',
        name: 'Amazon Shopping',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Shopping',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#ff9900',
        },
      ],
    },
  },
  {
    id: 'com.microsoft.xbox',
    name: 'Xbox',
    description: 'Xbox Cloud',
    startUrl: 'https://xbox.com/play',
    icons: [
      {
        src: 'assets/icons/mdi/microsoft-xbox.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Player',
        url: 'https://xbox.com/play',
        icons: [
          {
            src: 'assets/icons/mdi/microsoft-xbox-controller.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['games'],
    additionalProperties: {
      author: {
        id: 'com.microsoft',
        name: 'Microsoft',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Player',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#52b043',
        },
      ],
    },
  },
  {
    id: 'com.opensea.store',
    name: 'OpenSea',
    description: 'Discover, collect, and sell extraordinary NFTs',
    startUrl: 'https://opensea.io/',
    categories: ['shopping', 'finance'],
    icons: [
      {
        src: 'assets/icons/mdi/bitcoin.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Store',
        url: 'https://opensea.io',
        icons: [
          {
            src: 'assets/icons/mdi/bitcoin.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.opensea',
        name: 'OpenSea',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Store',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#2081E2',
        },
      ],
    },
  },
  {
    id: 'com.zara.shopping',
    name: 'Zara',
    description: 'Discover, collect, and sell extraordinary NFTs',
    startUrl: 'https://zara.com/',
    categories: ['shopping', 'finance'],
    icons: [
      {
        src: 'assets/icons/mdi/hanger.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Store',
        url: 'https://zara.com',
        icons: [
          {
            src: 'assets/icons/mdi/hanger.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.zara',
        name: 'Zara',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Store',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#000000',
        },
      ],
    },
  },
  {
    id: 'com.uber.eats',
    name: 'Uber Eats',
    description: 'Deliver food',
    startUrl: 'https://ubereats.com/',
    categories: ['food', 'shopping', 'finance'],
    icons: [
      {
        src: 'assets/icons/mdi/food.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Order',
        url: 'https://ubereats.com',
        icons: [
          {
            src: 'assets/icons/mdi/food.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.uber',
        name: 'Uber',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Order',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#09091a',
        },
      ],
    },
  },
  {
    id: 'com.just-eat.just-eat',
    name: 'Just Eat',
    description: 'Deliver food',
    startUrl: 'https://just-eat.es/',
    categories: ['food', 'shopping', 'finance'],
    icons: [
      {
        src: 'assets/icons/mdi/food.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Order',
        url: 'https://just-eat.es/',
        icons: [
          {
            src: 'assets/icons/mdi/food.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.just-eat',
        name: 'Just Eat',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Order',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#F96101',
        },
      ],
    },
  },
  {
    id: 'com.discord',
    name: 'Discord',
    description: 'Discord',
    startUrl: 'https://discord.com/',
    categories: ['social'],
    icons: [
      {
        src: 'assets/icons/mdi/discord.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://discord.com/',
        icons: [
          {
            src: 'assets/icons/mdi/discord.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.discord',
        name: 'Discord',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Portal',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#7289da',
        },
      ],
    },
  },
  {
    id: 'com.amazon.twitchtv',
    name: 'Twitch',
    description: 'Twitch',
    startUrl: 'https://twitch.tv/',
    categories: ['entertainment'],
    icons: [
      {
        src: 'assets/icons/mdi/twitch.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://twitch.tv/',
        icons: [
          {
            src: 'assets/icons/mdi/twitch.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.amazon',
        name: 'Amazon',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Portal',
      sidebarShortcuts: [],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#9146ff',
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
