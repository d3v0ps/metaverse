export const topicsSchema = {
  properties: {
    id: {
      type: 'string',
      description: 'Id',
    },
    title: {
      type: 'string',
      description: 'Title',
    },
    description: {
      type: 'string',
      description: 'Description',
    },
    icon: {
      type: 'string',
      description: 'Icon',
    },
    themeColor: {
      type: 'string',
      description: 'Theme color',
    },
    background: {
      type: 'string',
      description: 'Background color',
    },
    applications: {
      type: 'array',
      description: 'applications',
      items: {
        type: 'string',
        description: 'applications',
      },
    },
    categories: {
      type: 'array',
      description: 'Categories',
      items: {
        type: 'string',
        description: 'Category',
      },
    },
    shortcuts: {
      type: 'array',
      description: 'Shortcuts',
      items: {
        type: 'string',
        description: 'Shortcut',
      },
    },
    media: {
      type: 'array',
      description: 'Media',
      items: {
        type: 'object',
        description: 'MediaContent',
      },
    },
    triggers: {
      type: 'array',
      description: 'Shortcuts',
      items: {
        type: 'object',
        description: 'Shortcut',
      },
    },
    createdAt: {
      format: 'date-time',
      type: 'string',
    },
    updatedAt: {
      format: 'date-time',
      type: 'string',
    },
  },
  required: ['id', 'title', 'createdAt', 'updatedAt'],
};
