import {
  ContentType,
  Document,
  MimeType,
} from '@central-factory/notes/models/meta';

// 40 x 8 (9.5)
// 40 x 9.5 = 375

// cama: 200
// esquina: 60
// 6 x 40 = 240+ 10

// 80 + 70 + 120 = 330

export const documents: Document[] = [
  {
    id: 'music-albums.matrix-resurrections',
    meta: {
      title: 'The Matrix Resurrections (Original Motion Picture Soundtrack',
      description:
        'Original Motion Picture Soundtrack for The Matrix Resurrections.',
      tags: ['neo', 'trinity', 'theme', 'matrix', 'ost'],
      authors: [
        {
          id: 'johny.klimek',
          name: 'Johny Klimek',
        },
        {
          id: 'tom.tykwer',
          name: 'Tom Tykwer',
        },
      ],
    },
    sections: [
      {
        id: 'music-albums.matrix-resurrections.songs',
        title: 'Songs',
        documents: [
          {
            id: 'music-albums.matrix-resurrections.songs.neo-and-trinity',
            meta: {
              title: 'Neo and Trinity Theme',
              index: 25,
            },
          },
        ],
      },
    ],
  },
  {
    id: 'music-albums.matrix-resurrections.neo-and-trinity',
    meta: {
      title: 'Neo and Trinity Theme',
      description: 'A theme for Neo and Trinity',
      tags: ['neo', 'trinity', 'theme', 'matrix', 'ost'],
      coverImage:
        'https://m.media-amazon.com/images/I/91mUwBkVSOL._SL1500_.jpg',
      taxonomy: 'society/anthropology/art/music/song',
      mimeType: MimeType.APPLICATION_JSON,
      contentType: ContentType.SONG,
      authors: [
        {
          id: 'johny.klimek',
          name: 'Johny Klimek',
        },
        {
          id: 'tom.tykwer',
          name: 'Tom Tykwer',
        },
      ],
    },
  },
];

export const notes = [];
