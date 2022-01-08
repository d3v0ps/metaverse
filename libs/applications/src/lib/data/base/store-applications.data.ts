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
    startUrl:
      'https://aitorllamas.com/metaverse/apps/metadrones/remoteEntry.js',
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
      sidebarShortcuts: ['Metadrones'],
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
    description: `Search the world's information, including webpages, images, videos and more.`,
    startUrl: 'https://google.com',
    categories: ['productivity', 'utilities'],
    icons: [
      {
        src: 'assets/icons/simple-icons/google.svg',
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
            src: 'assets/icons/simple-icons/google.svg',
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
      sidebarShortcuts: ['Search'],
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
    description: `Create and share your work online and access your documents from anywhere. Manage documents, spreadsheets, presentations, surveys...`,
    startUrl: 'https://drive.google.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/googledrive.svg',
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
            src: 'assets/icons/simple-icons/googledrive.svg',
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
      sidebarShortcuts: ['Search'],
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
    description: `Quickly capture what's on your mind and get a reminder later at the right place or time. Speak a voice memo on the go and have it automatically transcribed.`,
    startUrl: 'https://keep.google.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/googlekeep.svg',
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
            src: 'assets/icons/simple-icons/googlekeep.svg',
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
      sidebarShortcuts: ['Keep'],
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
    description: `Get real-time navigation and more in the Maps app. Stay on web. Use the app. Directions. Drive. Walk. Bike. Public transport.`,
    startUrl: 'https://maps.google.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/googlemaps.svg',
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
            src: 'assets/icons/simple-icons/googlemaps.svg',
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
      sidebarShortcuts: ['Maps'],
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
    description:
      'Find the best flights fast, track prices, and book with confidence.',
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
      originalManifest:
        'https://www.google.com/_/TravelFrontendUi/manifest.json',
      author: {
        id: 'com.alphabet',
        name: 'Alphabet',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Travel',
      sidebarShortcuts: ['Travel'],
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
    description:
      'Find the best flights fast, track prices, and book with confidence.',
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
      sidebarShortcuts: ['Flights'],
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
    description:
      'FREE NOW is a licensed ride-hailing and multi-mobility app in 10 European countries. Book easily, pay in-app quickly and complete your trip safely!',
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
      sidebarShortcuts: ['Order'],
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
    description: `
      Spotify is all the music you'll ever need.

      Stream free albums and hits, find a song, discover music, and download songs and podcasts with the Spotify free streaming and music player app.

      Free streaming, music search and hits library – Spotify is all that and much more.

      Play songs, sync music, discover music and free albums with Spotify, your go-to music downloader.
    `,
    startUrl: 'https://open.spotify.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/spotify.svg',
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
            src: 'assets/icons/simple-icons/spotify.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Search',
        url: 'https://open.spotify.com/search',
        icons: [
          {
            src: 'assets/icons/mdi/magnify.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Library',
        url: 'https://open.spotify.com/collection/playlists',
        icons: [
          {
            src: 'assets/icons/mdi/music-box-multiple.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Liked',
        url: 'https://open.spotify.com/collection/tracks',
        icons: [
          {
            src: 'assets/icons/mdi/heart.svg',
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
      sidebarShortcuts: ['Player'],
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
    name: 'iVoox',
    description: `
      With Podcast & Radio iVoox you can listen, share and download podcasts, radio shows and much more for free, when you want, where you want.
      Courses, conferences, classes, lectures, audio books, children’s stories, audio guides, stand up comedy, stories, music and concerts, poems, biographies and even meditation sessions.
    `,
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
      {
        name: 'Explore',
        url: 'https://www.ivoox.com/audios_sa_f_1.html',
        icons: [
          {
            src: 'assets/icons/mdi/compass.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'My Subscriptions',
        url: 'https://www.ivoox.com/gestionar-suscripciones_je_1.html?order=date',
        icons: [
          {
            src: 'assets/icons/mdi/eye.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Play Later',
        url: 'https://www.ivoox.com/mis-audios_hn.html',
        icons: [
          {
            src: 'assets/icons/mdi/bookmark.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Favorites',
        url: 'https://www.ivoox.com/audios-que-me-gustan_hc_recomendados_1.html',
        icons: [
          {
            src: 'assets/icons/mdi/heart.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'My Radios',
        url: 'https://www.ivoox.com/radios-que-me-gustan_hc_recomendados_1.html',
        icons: [
          {
            src: 'assets/icons/mdi/music-box-multiple.svg',
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
        name: 'iVoox Podcast y Radio',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#f47721',
        },
      ],
    },
  },
  {
    id: 'com.netflix.netflix',
    name: 'Netflix',
    description: `
      Looking for the most talked-about TV programs and films from the around the world? They’re all on Netflix.

      We’ve got award-winning series, films, documentaries and stand-up specials.
    `,
    startUrl: 'https://netflix.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/netflix.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://netflix.com',
        icons: [
          {
            src: 'assets/icons/simple-icons/netflix.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'My List',
        url: 'https://netflix.com/browse/my-list',
        icons: [
          {
            src: 'assets/icons/mdi/filmstrip-box-multiple.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Latest',
        url: 'https://netflix.com/latest',
        icons: [
          {
            src: 'assets/icons/mdi/new-box.svg',
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
        name: 'Netflix, Inc',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
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
    description: `
      Watch movies, TV, and sports, including Amazon Originals like The Boys, The Marvelous Mrs. Maisel, and Tom Clancy’s Jack Ryan as well as recommendations just for you.

      App features:
      • Download videos to watch offline.
      • Rent or buy new-release movies and popular TV shows (availability varies by market).
      • Cast from your phone or tablet to the big screen with Chromecast and Fire TV.
      • Multi-user profiles allow creating personalized entertainment experiences.
      • Go behind the scenes of movies and TV shows with exclusive X-Ray access, powered by IMDb (availability varies by market).
    `,
    startUrl: 'https://primevideo.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/primevideo.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://primevideo.com',
        icons: [
          {
            src: 'assets/icons/simple-icons/primevideo.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'My Stuff',
        url: 'https://primevideo.com/mystuff',
        icons: [
          {
            src: 'assets/icons/mdi/filmstrip-box-multiple.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Channels',
        url: 'https://primevideo.com/storefront/channels',
        icons: [
          {
            src: 'assets/icons/mdi/youtube-tv.svg',
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
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
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
    description: `
      See what the world is watching -- from the hottest music videos to what’s popular in gaming, fashion, beauty, news, learning and more. Subscribe to channels you love, create content of your own, share with friends, and watch on any device.
    `,
    startUrl: 'https://youtube.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/youtube.svg',
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
            src: 'assets/icons/simple-icons/youtube.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Subscriptions',
        url: 'https://www.youtube.com/feed/subscriptions',
        icons: [
          {
            src: 'assets/icons/mdi/youtube-tv.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Library',
        url: 'https://www.youtube.com/feed/library',
        icons: [
          {
            src: 'assets/icons/mdi/filmstrip-box-multiple.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'History',
        url: 'https://www.youtube.com/feed/history',
        icons: [
          {
            src: 'assets/icons/mdi/history.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Watch Later',
        url: 'https://www.youtube.com/playlist?list=WL',
        icons: [
          {
            src: 'assets/icons/mdi/bookmark.svg',
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
      sidebarShortcuts: ['Portal'],
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
    description:
      'A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.',
    startUrl: 'https://instagram.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/instagram.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://instagram.com',
        icons: [
          {
            src: 'assets/icons/simple-icons/instagram.svg',
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
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
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
        src: 'assets/icons/simple-icons/whatsapp.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://web.whatsapp.com',
        icons: [
          {
            src: 'assets/icons/simple-icons/whatsapp.svg',
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
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
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
    description:
      'Evernote is a powerful tool that can help executives, entrepreneurs and creative people capture and arrange their ideas. All you have to do is use it. — Forbes.',
    startUrl: 'https://evernote.com/intl/es/',
    icons: [
      {
        src: 'assets/icons/simple-icons/evernote.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://evernote.com/intl/es/',
        icons: [
          {
            src: 'assets/icons/simple-icons/evernote.svg',
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
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
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
    description:
      'GitHub is where over 73 million developers shape the future of software, together.  Contribute to the open source community, manage your Git repositories and much more.',
    startUrl: 'https://github.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/github.svg',
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
            src: 'assets/icons/simple-icons/github.svg',
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
      sidebarShortcuts: ['Portal'],
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
    description: `Gmail is email that's intuitive, efficient, and useful. 15 GB of storage, less spam, and mobile access.`,
    startUrl: 'https://mail.google.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/gmail.svg',
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
            src: 'assets/icons/simple-icons/gmail.svg',
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
      sidebarShortcuts: ['Inbox'],
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
    description: 'The Google Calendar app helps you spend less time managing',
    startUrl: 'https://calendar.google.com',
    icons: [
      {
        src: 'assets/icons/simple-icons/googlecalendar.svg',
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
            src: 'assets/icons/simple-icons/googlecalendar.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Create Event',
        url: 'https://calendar.google.com',
        icons: [
          {
            src: 'assets/icons/mdi/calendar-edit.svg',
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
      sidebarShortcuts: ['Agenda'],
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
    description:
      'The Ultimate Task Management Software To Organize Your Work And Life. Get All Those Tasks Out Of Your Head And Onto Your To-Do List To Regain Clarity & Do More. Trusted By Top Companies. Simple Pricing. Easy Integrations. Free Plan Available.',
    startUrl: 'https://todoist.com/app/',
    icons: [
      {
        src: 'assets/icons/simple-icons/todoist.svg',
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
            src: 'assets/icons/simple-icons/todoist.svg',
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
      sidebarShortcuts: ['Portal'],
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
    description:
      'Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime.',
    startUrl: 'https://amazon.es',
    icons: [
      {
        src: 'assets/icons/simple-icons/amazon.svg',
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
        name: 'Amazon',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Shopping',
      sidebarShortcuts: ['Shopping'],
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
    name: 'Xbox Cloud Gaming',
    description:
      'Enjoy the console games you love on the devices you already have with Xbox Game Pass Ultimate and a compatible controller. You can play using an Xbox controller, Sony DualShock 4, Razer Kishi, and more.',
    startUrl: 'https://xbox.com/play',
    icons: [
      {
        src: 'assets/icons/simple-icons/xbox.svg',
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
      sidebarShortcuts: ['Player'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#52b043',
        },
      ],
    },
  },
  {
    id: 'com.sony.psnow',
    name: 'PS Now',
    description:
      'Discover all the PS2, PS3 and PS4 games available to stream or download on demand on PS4 from the PS Now library',
    startUrl: 'https://playstation.com/ps-now',
    icons: [
      {
        src: 'assets/icons/simple-icons/playstation.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Player',
        url: 'https://playstation.com/ps-now',
        icons: [
          {
            src: 'assets/icons/simple-icons/playstation.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    categories: ['games'],
    additionalProperties: {
      author: {
        id: 'com.sony',
        name: 'Sony Interactive',
      },
      permissions: [],
      renderingType: ApplicationRenderingType.Webview,
      internal: false,
      defaultShortcut: 'Player',
      sidebarShortcuts: ['Player'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#00a4e8',
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
      sidebarShortcuts: ['Store'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#2081E2',
        },
      ],
    },
  },
  {
    id: 'com.zalando.shopping',
    name: 'Zalando',
    description:
      'Descubre las últimas tendencias en ropa, calzado y complementos para mujer, hombre y niño en Zalando.',
    startUrl: 'https://zalando.com/',
    categories: ['shopping', 'finance'],
    icons: [
      {
        src: 'assets/icons/simple-icons/zalando.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Store',
        url: 'https://zalando.com',
        icons: [
          {
            src: 'assets/icons/simple-icons/zalando.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.zalando',
        name: 'Zalando',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Store',
      sidebarShortcuts: ['Store'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#F96902',
        },
      ],
    },
  },
  {
    id: 'com.zara.shopping',
    name: 'Zara',
    description: 'Latest trends in clothing for women, men & kids at ZARA',
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
      sidebarShortcuts: ['Store'],
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
    description:
      'Enjoy your local restaurant favorites from the comfort of your own home. The food you want, when you want it. ',
    startUrl: 'https://ubereats.com/',
    categories: ['food', 'shopping', 'finance'],
    icons: [
      {
        src: 'assets/icons/simple-icons/ubereats.svg',
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
            src: 'assets/icons/simple-icons/ubereats.svg',
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
      sidebarShortcuts: ['Order'],
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
    description:
      'Order your favourite takeaway from restaurants all over Spain on the app you love. Freshly cooked from your favourite restaurants directly to your door. Order today. More than 15k restaurants. Exclusive Offers. Pizza, sushi, thai & more. Contactless Delivery.',
    startUrl: 'https://just-eat.es/',
    categories: ['food', 'shopping', 'finance'],
    icons: [
      {
        src: 'assets/icons/simple-icons/justeat.svg',
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
            src: 'assets/icons/simple-icons/justeat.svg',
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
      sidebarShortcuts: ['Order'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#F96101',
        },
      ],
    },
  },
  {
    id: 'com.burgerking.burgerking',
    name: 'Burger King',
    description:
      'Order your favourite takeaway from restaurants all over Spain on the app you love. Freshly cooked from your favourite restaurants directly to your door. Order today. More than 15k restaurants. Exclusive Offers. Pizza, sushi, thai & more. Contactless Delivery.',
    startUrl: 'https://burgerking.es/',
    categories: ['food', 'shopping', 'finance'],
    icons: [
      {
        src: 'assets/icons/simple-icons/burgerking.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Order',
        url: 'https://burgerking.es/',
        icons: [
          {
            src: 'assets/icons/simple-icons/burgerking.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.burgerking',
        name: 'Burger King',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Order',
      sidebarShortcuts: ['Order'],
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
    description:
      'Discord is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close with your friends and communities.',
    startUrl: 'https://discord.com/',
    categories: ['social'],
    icons: [
      {
        src: 'assets/icons/simple-icons/discord.svg',
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
            src: 'assets/icons/simple-icons/discord.svg',
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
      sidebarShortcuts: ['Portal'],
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
    description: `Twitch is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more.`,
    startUrl: 'https://twitch.tv/',
    categories: ['entertainment'],
    icons: [
      {
        src: 'assets/icons/simple-icons/twitch.svg',
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
            src: 'assets/icons/simple-icons/twitch.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Following',
        url: 'https://twitch.tv/directory/following',
        icons: [
          {
            src: 'assets/icons/mdi/heart.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Explore',
        url: 'https://twitch.tv/directory',
        icons: [
          {
            src: 'assets/icons/mdi/compass.svg',
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
      sidebarShortcuts: ['Portal'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#9146ff',
        },
      ],
    },
  },
  {
    id: 'com.feedly.feedly',
    name: 'Feedly',
    description: `
      Your central place to organize, read, and share the information you need to stay ahead of the next big trend in your industry.
    `,
    startUrl: 'https://feedly.com/',
    categories: ['news', 'entertainment'],
    icons: [
      {
        src: 'assets/icons/simple-icons/feedly.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Feed',
        url: 'https://feedly.com/i/my/me',
        icons: [
          {
            src: 'assets/icons/simple-icons/feedly.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Read Later',
        url: 'https://feedly.com/i/saved/',
        icons: [
          {
            src: 'assets/icons/mdi/bookmark.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Explore',
        url: 'https://feedly.com/i/my/explore/',
        icons: [
          {
            src: 'assets/icons/mdi/compass.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.feedly',
        name: 'Feedly',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Feed',
      sidebarShortcuts: ['Feed'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#2bb24c',
        },
      ],
    },
  },
  {
    id: 'com.wikipedia.wikipedia',
    name: 'Wikipedia',
    description: `
      Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
    `,
    startUrl: 'https://wikipedia.com/',
    categories: ['news', 'entertainment', 'magazines'],
    icons: [
      {
        src: 'assets/icons/simple-icons/wikipedia.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://wikipedia.com/',
        icons: [
          {
            src: 'assets/icons/simple-icons/wikipedia.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.wikipedia',
        name: 'Wikipedia',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#636466',
        },
      ],
    },
  },
  {
    id: 'com.nintendo.my',
    name: 'Nintendo',
    description:
      'My Nintendo makes playing games and interacting with Nintendo even more fun. You can earn points and redeem them to get rewards like in-game content',
    startUrl: 'https://my.nintendo.com/',
    categories: ['news', 'games'],
    icons: [
      {
        src: 'assets/icons/simple-icons/nintendoswitch.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'My Nintendo',
        url: 'https://my.nintendo.com/',
        icons: [
          {
            src: 'assets/icons/simple-icons/nintendoswitch.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.nintendo',
        name: 'Nintendo',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#e60012',
        },
      ],
    },
  },
  {
    id: 'com.ea.origin',
    name: 'Origin',
    description:
      'Get great PC and Mac games on Origin. Play the latest RPGs, shooters, Sims games & more.',
    startUrl: 'https://origin.com/',
    categories: ['news', 'games'],
    icons: [
      {
        src: 'assets/icons/simple-icons/origin.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://origin.com/',
        icons: [
          {
            src: 'assets/icons/simple-icons/origin.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.ea',
        name: 'EA Games',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#EB5722',
        },
      ],
    },
  },
  {
    id: 'com.epic.store',
    name: 'Epic Games',
    description: `Epic Games, Inc. is an American video game and software developer and publisher based in Cary, North Carolina. The company was founded by Tim Sweeney as Potomac Computer Systems in 1991, originally located in his parents' house in Potomac, Maryland.`,
    startUrl: 'https://www.epicgames.com/store/',
    categories: ['news', 'games'],
    icons: [
      {
        src: 'assets/icons/simple-icons/epicgames.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://www.epicgames.com/store/',
        icons: [
          {
            src: 'assets/icons/simple-icons/epicgames.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.epic',
        name: 'Epic Games',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#2A2A2A',
        },
      ],
    },
  },
  {
    id: 'com.valve.store',
    name: 'Steam Store',
    description: `
      Steam is a video game digital distribution service by Valve. It was launched as a standalone software client in September 2003 as a way for Valve to provide automatic updates for their games, and expanded to include games from third-party publishers
    `,
    startUrl: 'https://store.steampowered.com',
    categories: ['news', 'games'],
    icons: [
      {
        src: 'assets/icons/simple-icons/steam.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://store.steampowered.com',
        icons: [
          {
            src: 'assets/icons/simple-icons/steam.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.valve',
        name: 'Valve',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#00adee',
        },
      ],
    },
  },
  {
    id: 'com.cdprojekt.gog',
    name: 'GOG',
    description:
      'GOG.com is a digital distribution platform – an online store with a curated selection of games, an optional gaming client giving you freedom of choice',
    startUrl: 'https://www.gog.com',
    categories: ['news', 'games'],
    icons: [
      {
        src: 'assets/icons/mdi/gog.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://www.gog.com',
        icons: [
          {
            src: 'assets/icons/mdi/gog.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.cdprojekt',
        name: 'CD Projekt',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#A8DD36',
        },
      ],
    },
  },
  {
    id: 'com.bbva.wallet',
    name: 'BBVA',
    description:
      'The latest banks and financial services company and industry news with expert analysis from the BBVA, Banco Bilbao Vizcaya Argentaria.',
    startUrl: 'https://www.bbva.es',
    categories: ['finances', 'shopping'],
    icons: [
      {
        src: 'assets/icons/mdi/bank.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Portal',
        url: 'https://www.bbva.es',
        icons: [
          {
            src: 'assets/icons/mdi/bank.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
    additionalProperties: {
      author: {
        id: 'com.bbva',
        name: 'BBVA',
      },
      renderingType: ApplicationRenderingType.Webview,
      supportsBrowser: false,
      internal: false,
      permissions: [],
      defaultShortcut: 'Portal',
      sidebarShortcuts: ['Portal'],
      colors: [
        {
          variation: ColorVariation.Primary,
          color: '#072146',
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
