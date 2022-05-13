/* eslint-disable @typescript-eslint/no-unused-vars */

export type TemplateNode = {
  type: 'file' | 'folder';
  name: string;
  template?: string;
  content?: string;
  templateRenderer?: string;
  children?: TemplateNode[];
  parent?: TemplateNode;
};

export const packageGenerators: Record<string, TemplateNode> = {
  // json: {
  //   type: 'folder',
  //   name: 'json',
  //   children: [
  //     {
  //       type: 'folder',
  //       name: 'schemas',
  //       children: [
  //         {
  //           type: 'file',
  //           name: '{...roots}.json',
  //           template: 'json/schema',
  //         },
  //       ],
  //     },
  //   ],
  // },
  typescript: {
    type: 'folder',
    name: 'typescript',
    children: [
      {
        type: 'folder',
        name: 'models',
        children: [
          {
            type: 'file',
            name: 'index.ts',
            template: 'typescript/models',
          },
        ],
      },
      // {
      //   type: 'folder',
      //   name: 'services',
      //   children: [
      //     {
      //       type: 'file',
      //       name: '{...roots}.ts',
      //       template: 'typescript/service',
      //     },
      //   ],
      // },
      // {
      //   type: 'folder',
      //   name: 'commands',
      //   children: [
      //     {
      //       type: 'file',
      //       name: 'index.ts',
      //       template: 'typescript/commands',
      //     },
      //   ],
      // },
      // {
      //   type: 'folder',
      //   name: 'queries',
      //   children: [
      //     {
      //       type: 'file',
      //       name: 'index.ts',
      //       template: 'typescript/queries',
      //     },
      //   ],
      // },
      // {
      //   type: 'folder',
      //   name: 'events',
      //   children: [
      //     {
      //       type: 'file',
      //       name: 'index.ts',
      //       template: 'typescript/events',
      //     },
      //   ],
      // },
    ],
  },
  // rxdb: {
  //   type: 'folder',
  //   name: 'rxdb',
  //   children: [
  //     {
  //       type: 'folder',
  //       name: 'collections',
  //       children: [
  //         {
  //           type: 'file',
  //           name: '{...roots}.ts',
  //           template: 'rxdb/collection',
  //         },
  //         {
  //           type: 'file',
  //           name: 'index.ts',
  //           template: 'rxdb/collections',
  //         },
  //       ],
  //     },
  //   ],
  // },
  graphql: {
    type: 'folder',
    name: 'graphql',
    children: [
      {
        name: 'types',
        type: 'folder',
        children: [
          {
            type: 'file',
            name: '{...tokens}.ts',
            template: 'graphql/type',
          },
          {
            type: 'file',
            name: 'index.ts',
            template: 'graphql/type',
          },
        ],
      },
      {
        name: 'resolvers',
        type: 'folder',
        children: [
          {
            type: 'file',
            name: '{...roots}.ts',
            template: 'graphql/resolver',
          },
          {
            type: 'file',
            name: 'index.ts',
            template: 'graphql/resolvers',
          },
        ],
      },
    ],
  },
  // openapi: {
  //   type: 'folder',
  //   name: 'openapi',
  //   children: [
  //     {
  //       name: 'types',
  //       type: 'folder',
  //       children: [
  //         {
  //           type: 'file',
  //           name: '{...roots}.ts',
  //           template: 'openapi/type',
  //         },
  //         {
  //           type: 'file',
  //           name: 'index.ts',
  //           template: 'openapi/types',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'controllers',
  //       type: 'folder',
  //       children: [
  //         {
  //           type: 'file',
  //           name: '{...roots}.ts',
  //           template: 'openapi/controller',
  //         },
  //         {
  //           type: 'file',
  //           name: 'index.ts',
  //           template: 'openapi/controllers',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // angular: {
  //   type: 'folder',
  //   name: 'angular',
  //   children: [
  //     {
  //       name: 'states',
  //       type: 'folder',
  //       children: [
  //         {
  //           type: 'file',
  //           name: '{...roots}.ts',
  //           template: 'angular/state',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'components',
  //       type: 'folder',
  //       children: [
  //         {
  //           type: 'file',
  //           name: '{...roots}.ts',
  //           template: 'angular/component',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // react: {
  //   type: 'folder',
  //   name: 'react',
  //   children: [
  //     {
  //       name: 'hooks',
  //       type: 'folder',
  //       children: [
  //         {
  //           type: 'file',
  //           name: '{...roots}.ts',
  //           template: 'react/hook',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'components',
  //       type: 'folder',
  //       children: [
  //         {
  //           type: 'file',
  //           name: '{...roots}.tsx',
  //           template: 'react/component',
  //         },
  //       ],
  //     },
  //   ],
  // },
};
