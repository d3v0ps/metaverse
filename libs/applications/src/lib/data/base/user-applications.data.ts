import { USER_AVATAR_COLLECTION_NAME } from '@central-factory/avatars/__generated__/collections/avatar';
import {
  PermissionKind,
  PermissionMode,
} from '@central-factory/permissions/__generated__/models';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';
import { USER_TOPIC_COLLECTION_NAME } from '@central-factory/topics/__generated__/collections/topic';
import {
  ApplicationDocType,
  APPLICATION_COLLECTION_NAME,
  USER_APPLICATION_COLLECTION_NAME,
} from '../../__generated__/collections/application';
import {
  Application,
  ApplicationRenderingType,
  ColorVariation,
} from '../../__generated__/models';

export const userApplications: ApplicationDocType[] = [
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
          target: USER_APPLICATION_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: USER_APPLICATION_COLLECTION_NAME,
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
      colors: [
        {
          color: '#B86FDB',
          variation: ColorVariation.Primary,
        },
      ],
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: USER_APPLICATION_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: USER_APPLICATION_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: USER_APPLICATION_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: APPLICATION_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: APPLICATION_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: APPLICATION_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: USER_TOPIC_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: USER_TOPIC_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: USER_TOPIC_COLLECTION_NAME,
        },
      ],
    },
  },
  {
    id: 'com.central-factory.devtools',
    name: 'DevTools',
    description: 'Inspect and play with your data.',
    startUrl: 'CMS',
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
        url: '/devtools',
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
      colors: [
        {
          color: '#DBC96F',
          variation: ColorVariation.Primary,
        },
      ],
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: USER_AVATAR_COLLECTION_NAME,
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
    id: 'com.central-factory.terraform',
    name: 'Terraform',
    description: 'Manage the worlds data',
    startUrl: 'WorldsManagerScene',
    icons: [
      {
        src: 'assets/icons/mdi/web.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Manage Worlds',
        url: '/worlds',
        icons: [
          {
            src: 'assets/icons/mdi/web.svg',
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
      colors: [
        {
          color: '#95C866',
          variation: ColorVariation.Primary,
        },
      ],
      internal: true,
      renderingType: ApplicationRenderingType.Local,
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: USER_AVATAR_COLLECTION_NAME,
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
      sidebarShortcuts: ['Manage Worlds'],
    },
  },
  {
    id: 'com.central-factory.knowledge-base',
    name: 'Knowledge Base',
    description: 'Your personal notebook to store everything.',
    startUrl: 'KnowledgeIndexScene',
    icons: [
      {
        src: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20100%%3B%20width%3A%20100%%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22M262.97%2019.438c-3.533.036-7.074.17-10.595.375%2037.426%205.91%2074.12%2023.423%20102.188%2049.624-55.762-26.124-129.46-27.253-186.875-3.5%2010.37-9.73%2021.777-17.51%2033.875-23.343C48.768%2080.06-6.44%20197.116%2056.72%20343.938c-16.45-26.78-29.106-55.588-35.626-84.688-5.23%2074.055%2032.02%20134.952%20102.47%20197.406.06.063.124.126.186.188%2012.107%2012.125%2024.238%2022.045%2032.875%2027.03%2064.588%2037.292%20121.345-63.365%2057.78-100.062-11.465-6.62-33.518-14.218-56.56-18.875-76.657-36.295-93.91-155.886-20.282-240.687-6.654%2016.82-11.594%2034.836-14.844%2053.375%2076.21-134.99%20312.3-129.124%20324.124%2072.063-10.722-61.622-53.708-113.837-121.03-135.344%2056.69%2023.942%2096.28%2079.752%2096.28%20145.25%200%2094.252-72.826%20148.403-154.594%20165.625%2042.582%202.34%2094.684-13.826%20125.438-36.314-23.357%2039.58-72.146%2067.082-123.25%2081.594%2072.736-2.804%20136.515-41.146%20175.406-97.375-10.316%2011.652-22.718%2022.04-36.78%2030.97%2046.54-55.267%2070.795-137.97%2061.31-210.25%208.428%2016.284%2013.583%2033.51%2015.782%2051.374C485.26%2097.63%20372.46%2018.3%20262.97%2019.437z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Knowledge Index',
        url: '/knowledge',
        icons: [
          {
            src: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20100%%3B%20width%3A%20100%%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22M262.97%2019.438c-3.533.036-7.074.17-10.595.375%2037.426%205.91%2074.12%2023.423%20102.188%2049.624-55.762-26.124-129.46-27.253-186.875-3.5%2010.37-9.73%2021.777-17.51%2033.875-23.343C48.768%2080.06-6.44%20197.116%2056.72%20343.938c-16.45-26.78-29.106-55.588-35.626-84.688-5.23%2074.055%2032.02%20134.952%20102.47%20197.406.06.063.124.126.186.188%2012.107%2012.125%2024.238%2022.045%2032.875%2027.03%2064.588%2037.292%20121.345-63.365%2057.78-100.062-11.465-6.62-33.518-14.218-56.56-18.875-76.657-36.295-93.91-155.886-20.282-240.687-6.654%2016.82-11.594%2034.836-14.844%2053.375%2076.21-134.99%20312.3-129.124%20324.124%2072.063-10.722-61.622-53.708-113.837-121.03-135.344%2056.69%2023.942%2096.28%2079.752%2096.28%20145.25%200%2094.252-72.826%20148.403-154.594%20165.625%2042.582%202.34%2094.684-13.826%20125.438-36.314-23.357%2039.58-72.146%2067.082-123.25%2081.594%2072.736-2.804%20136.515-41.146%20175.406-97.375-10.316%2011.652-22.718%2022.04-36.78%2030.97%2046.54-55.267%2070.795-137.97%2061.31-210.25%208.428%2016.284%2013.583%2033.51%2015.782%2051.374C485.26%2097.63%20372.46%2018.3%20262.97%2019.437z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
      colors: [
        {
          color: '#8966C8',
          variation: ColorVariation.Primary,
        },
      ],
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: USER_AVATAR_COLLECTION_NAME,
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
      sidebarShortcuts: ['Knowledge Index'],
    },
  },
  {
    id: 'com.central-factory.wallet',
    name: 'Wallet',
    description: 'Your personal finances app.',
    startUrl: 'WalletScene',
    icons: [
      {
        src: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20100%%3B%20width%3A%20100%%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22M363.783%2023.545c-9.782.057-16.583%203.047-20.744%2010.22-17.51%2030.18-38.432%2061.645-48.552%2097.245%202.836.83%205.635%201.787%208.373%202.853%207.353%202.863%2014.38%206.482%2020.542%2010.858%2027.534-25.542%2058.165-45.21%2087.45-65.462%2011.356-7.854%2012.273-13.584%2010.183-20.83-2.09-7.246-9.868-16.365-20.525-23.176-10.658-6.81-23.87-11.33-34.73-11.68-.68-.022-1.345-.03-1.997-.027zm-68.998.746c-10.02-.182-17.792%206.393-23.924%2020.24-8.94%2020.194-10.212%2053.436-1.446%2083.185.156-.008.31-.023.467-.03%201.99-.087%203.99-.072%206%20.03%209.436-34.822%2027.966-64.72%2044.013-91.528-10.31-8.496-18.874-11.782-25.108-11.896zM197.5%2082.5L187%2097.97c14.82%2010.04%2029.056%2019.725%2039.813%2031.374%203.916%204.24%207.37%208.722%2010.31%2013.607%203.77-4.73%208.51-8.378%2013.69-10.792.407-.188.82-.355%201.228-.53-3.423-5.44-7.304-10.418-11.51-14.972C227.765%20102.83%20212.29%2092.52%20197.5%2082.5zm223.77%2012.27c-29.255%2020.228-58.575%2039.152-84.348%2062.78.438.576.848%201.168%201.258%201.76%2020.68-6.75%2049.486-15.333%2073.916-19.41%2011.484-1.916%2015.66-6.552%2017.574-13.228%201.914-6.676.447-16.71-5.316-26.983-.924-1.647-1.96-3.29-3.083-4.92zm-223.938%2047.87c-14.95.2-29.732%204.3-43.957%2012.766l9.563%2016.03c21.657-12.89%2042.626-14.133%2065.232-4.563.52-5.592%201.765-10.66%203.728-15.21.35-.806.73-1.586%201.123-2.354-11.87-4.52-23.83-6.827-35.688-6.67zm75.8%203.934c-5.578-.083-10.597.742-14.427%202.526-4.377%202.038-7.466%204.914-9.648%209.97-.884%202.047-1.572%204.54-1.985%207.494.456-.007.91-.03%201.365-.033%2016.053-.084%2032.587%202.77%2049.313%209.19%207.714%202.96%2015.062%207.453%2022.047%2013.184%203.217-2.445%204.99-4.72%205.773-6.535%201.21-2.798%201.095-5.184-.634-8.82-3.46-7.275-15.207-16.955-28.856-22.27-6.824-2.658-13.98-4.224-20.523-4.614-.818-.05-1.627-.08-2.424-.092zm-24.757%2038.457c-22.982.075-44.722%207.386-65%2019.782-32.445%2019.835-60.565%2053.124-80.344%2090.032-19.777%2036.908-31.133%2077.41-31.186%20110.53-.053%2033.06%2010.26%2057.27%2032.812%2067.782.043.02.082.043.125.063h.032c24.872%2011.51%2065.616%2019.337%20108.407%2020.092%2042.79.756%2087.79-5.457%20121.874-20.187%2021.96-9.49%2034.545-28.452%2040.5-54.156%205.954-25.705%204.518-57.657-2.375-89.314-6.894-31.657-19.2-63.06-34.095-87.875-14.894-24.814-32.614-42.664-48.063-48.593-14.664-5.627-28.898-8.2-42.687-8.156z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Wallet',
        url: '/wallet',
        icons: [
          {
            src: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20100%%3B%20width%3A%20100%%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22M262.97%2019.438c-3.533.036-7.074.17-10.595.375%2037.426%205.91%2074.12%2023.423%20102.188%2049.624-55.762-26.124-129.46-27.253-186.875-3.5%2010.37-9.73%2021.777-17.51%2033.875-23.343C48.768%2080.06-6.44%20197.116%2056.72%20343.938c-16.45-26.78-29.106-55.588-35.626-84.688-5.23%2074.055%2032.02%20134.952%20102.47%20197.406.06.063.124.126.186.188%2012.107%2012.125%2024.238%2022.045%2032.875%2027.03%2064.588%2037.292%20121.345-63.365%2057.78-100.062-11.465-6.62-33.518-14.218-56.56-18.875-76.657-36.295-93.91-155.886-20.282-240.687-6.654%2016.82-11.594%2034.836-14.844%2053.375%2076.21-134.99%20312.3-129.124%20324.124%2072.063-10.722-61.622-53.708-113.837-121.03-135.344%2056.69%2023.942%2096.28%2079.752%2096.28%20145.25%200%2094.252-72.826%20148.403-154.594%20165.625%2042.582%202.34%2094.684-13.826%20125.438-36.314-23.357%2039.58-72.146%2067.082-123.25%2081.594%2072.736-2.804%20136.515-41.146%20175.406-97.375-10.316%2011.652-22.718%2022.04-36.78%2030.97%2046.54-55.267%2070.795-137.97%2061.31-210.25%208.428%2016.284%2013.583%2033.51%2015.782%2051.374C485.26%2097.63%20372.46%2018.3%20262.97%2019.437z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
      colors: [
        {
          color: '#8966C8',
          variation: ColorVariation.Primary,
        },
      ],
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: USER_AVATAR_COLLECTION_NAME,
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
      sidebarShortcuts: ['Wallet'],
    },
  },
  {
    id: 'com.central-factory.warehouse',
    name: 'Warehouse',
    description: 'A catalog for all the things you can buy.',
    startUrl: 'WarehouseScene',
    icons: [
      {
        src: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20100%%3B%20width%3A%20100%%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22M363.783%2023.545c-9.782.057-16.583%203.047-20.744%2010.22-17.51%2030.18-38.432%2061.645-48.552%2097.245%202.836.83%205.635%201.787%208.373%202.853%207.353%202.863%2014.38%206.482%2020.542%2010.858%2027.534-25.542%2058.165-45.21%2087.45-65.462%2011.356-7.854%2012.273-13.584%2010.183-20.83-2.09-7.246-9.868-16.365-20.525-23.176-10.658-6.81-23.87-11.33-34.73-11.68-.68-.022-1.345-.03-1.997-.027zm-68.998.746c-10.02-.182-17.792%206.393-23.924%2020.24-8.94%2020.194-10.212%2053.436-1.446%2083.185.156-.008.31-.023.467-.03%201.99-.087%203.99-.072%206%20.03%209.436-34.822%2027.966-64.72%2044.013-91.528-10.31-8.496-18.874-11.782-25.108-11.896zM197.5%2082.5L187%2097.97c14.82%2010.04%2029.056%2019.725%2039.813%2031.374%203.916%204.24%207.37%208.722%2010.31%2013.607%203.77-4.73%208.51-8.378%2013.69-10.792.407-.188.82-.355%201.228-.53-3.423-5.44-7.304-10.418-11.51-14.972C227.765%20102.83%20212.29%2092.52%20197.5%2082.5zm223.77%2012.27c-29.255%2020.228-58.575%2039.152-84.348%2062.78.438.576.848%201.168%201.258%201.76%2020.68-6.75%2049.486-15.333%2073.916-19.41%2011.484-1.916%2015.66-6.552%2017.574-13.228%201.914-6.676.447-16.71-5.316-26.983-.924-1.647-1.96-3.29-3.083-4.92zm-223.938%2047.87c-14.95.2-29.732%204.3-43.957%2012.766l9.563%2016.03c21.657-12.89%2042.626-14.133%2065.232-4.563.52-5.592%201.765-10.66%203.728-15.21.35-.806.73-1.586%201.123-2.354-11.87-4.52-23.83-6.827-35.688-6.67zm75.8%203.934c-5.578-.083-10.597.742-14.427%202.526-4.377%202.038-7.466%204.914-9.648%209.97-.884%202.047-1.572%204.54-1.985%207.494.456-.007.91-.03%201.365-.033%2016.053-.084%2032.587%202.77%2049.313%209.19%207.714%202.96%2015.062%207.453%2022.047%2013.184%203.217-2.445%204.99-4.72%205.773-6.535%201.21-2.798%201.095-5.184-.634-8.82-3.46-7.275-15.207-16.955-28.856-22.27-6.824-2.658-13.98-4.224-20.523-4.614-.818-.05-1.627-.08-2.424-.092zm-24.757%2038.457c-22.982.075-44.722%207.386-65%2019.782-32.445%2019.835-60.565%2053.124-80.344%2090.032-19.777%2036.908-31.133%2077.41-31.186%20110.53-.053%2033.06%2010.26%2057.27%2032.812%2067.782.043.02.082.043.125.063h.032c24.872%2011.51%2065.616%2019.337%20108.407%2020.092%2042.79.756%2087.79-5.457%20121.874-20.187%2021.96-9.49%2034.545-28.452%2040.5-54.156%205.954-25.705%204.518-57.657-2.375-89.314-6.894-31.657-19.2-63.06-34.095-87.875-14.894-24.814-32.614-42.664-48.063-48.593-14.664-5.627-28.898-8.2-42.687-8.156z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Warehouse',
        url: '/warehouse',
        icons: [
          {
            src: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20100%%3B%20width%3A%20100%%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22M262.97%2019.438c-3.533.036-7.074.17-10.595.375%2037.426%205.91%2074.12%2023.423%20102.188%2049.624-55.762-26.124-129.46-27.253-186.875-3.5%2010.37-9.73%2021.777-17.51%2033.875-23.343C48.768%2080.06-6.44%20197.116%2056.72%20343.938c-16.45-26.78-29.106-55.588-35.626-84.688-5.23%2074.055%2032.02%20134.952%20102.47%20197.406.06.063.124.126.186.188%2012.107%2012.125%2024.238%2022.045%2032.875%2027.03%2064.588%2037.292%20121.345-63.365%2057.78-100.062-11.465-6.62-33.518-14.218-56.56-18.875-76.657-36.295-93.91-155.886-20.282-240.687-6.654%2016.82-11.594%2034.836-14.844%2053.375%2076.21-134.99%20312.3-129.124%20324.124%2072.063-10.722-61.622-53.708-113.837-121.03-135.344%2056.69%2023.942%2096.28%2079.752%2096.28%20145.25%200%2094.252-72.826%20148.403-154.594%20165.625%2042.582%202.34%2094.684-13.826%20125.438-36.314-23.357%2039.58-72.146%2067.082-123.25%2081.594%2072.736-2.804%20136.515-41.146%20175.406-97.375-10.316%2011.652-22.718%2022.04-36.78%2030.97%2046.54-55.267%2070.795-137.97%2061.31-210.25%208.428%2016.284%2013.583%2033.51%2015.782%2051.374C485.26%2097.63%20372.46%2018.3%20262.97%2019.437z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
      colors: [
        {
          color: '#8966C8',
          variation: ColorVariation.Primary,
        },
      ],
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: USER_AVATAR_COLLECTION_NAME,
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
      sidebarShortcuts: ['Warehouse'],
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
      colors: [
        {
          color: '#6689C8',
          variation: ColorVariation.Primary,
        },
      ],
      permissions: [
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Read,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: USER_AVATAR_COLLECTION_NAME,
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
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Write,
          target: USER_AVATAR_COLLECTION_NAME,
        },
        {
          kind: PermissionKind.Collection,
          mode: PermissionMode.Delete,
          target: USER_AVATAR_COLLECTION_NAME,
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
      // sidebarShortcuts: ['Selected Avatar'],
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
      colors: [
        {
          color: '#C86666',
          variation: ColorVariation.Primary,
        },
      ],
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
        src: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20100%%3B%20width%3A%20100%%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22M362.04%2024.316c-2.088-.539-21.367%2027.005-31.786%2037.743-18.375-8.277-53.592-26.532-55.125-24.83-.81.898%2018.213%2031.305%2033.101%2067.056l-51.14%2012.516-76.363-45.524-43.457%2050.37c-26.966-33.204-56.644-59.57-57.825-58.987-1.933.954%201.44%2034.405.555%2049.34-19.324%205.723-57.92%2014.878-57.97%2017.168-.03%201.327%2041.264%2014.007%2078.988%2034.498l-51.448%2059.63L72.412%20406.79l146.623-39.393%2031.186%2026.225c-38.113%2012.327-72.757%2018.286-72.897%2019.549-.284%202.565%2041.45%2018.552%2062.176%2027.828-1.242%2016.811-10.003%2053.664-7.986%2055.018%201.225.823%2037.984-23.97%2072.918-56.807L369.59%20494h27.97l-80.203-67.443c16.528-16.86%2031.523-35.104%2040.63-52.715%203.89%202.79%2010.874%2017.491%2013.472%2017.094%203.808-.583%2022.59-82.933%2019.467-85.311-4.446-3.385-82.083%2028.252-81.826%2030.072.24%201.708%2016.603%209.065%2024.117%2014.496-14.937%2015.194-38.718%2027.208-63.248%2036.514l-46.535-39.13-135.715%2036.46-19.3-155.033%2048.397-56.094c14.117%208.936%2026.693%2019.002%2034.948%2029.998-7.25%203.895-22.51%208.44-22.922%209.914-.44%201.571%2064.138%2038.535%2068.447%2036.08%203.027-1.724-3.81-76.379-7.092-77.34-2.239-.655-10.11%2011.457-13.861%2013.454-5.667-15.806-15.983-32.75-27.824-48.844l35.974-41.697%2069.721%2041.564%2060.56-14.82c6.94%2019.615%2011.658%2039.68%2010.522%2056.552-8.034-1.78-22.563-8.296-23.838-7.449-1.359.903%2023.44%2071.06%2028.307%2072.012%203.419.67%2046.966-60.353%2045.107-63.223-1.268-1.958-15.138%202.08-19.283%201.145%207.708-20.06%2010.876-46.496%2011.711-71.893l52.92-12.95L494%20148.495v-22.174l-70.01-50.365-56.472%2013.82c-.279-35.653-4.376-65.176-5.479-65.46z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
            src: 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20100%%3B%20width%3A%20100%%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22M362.04%2024.316c-2.088-.539-21.367%2027.005-31.786%2037.743-18.375-8.277-53.592-26.532-55.125-24.83-.81.898%2018.213%2031.305%2033.101%2067.056l-51.14%2012.516-76.363-45.524-43.457%2050.37c-26.966-33.204-56.644-59.57-57.825-58.987-1.933.954%201.44%2034.405.555%2049.34-19.324%205.723-57.92%2014.878-57.97%2017.168-.03%201.327%2041.264%2014.007%2078.988%2034.498l-51.448%2059.63L72.412%20406.79l146.623-39.393%2031.186%2026.225c-38.113%2012.327-72.757%2018.286-72.897%2019.549-.284%202.565%2041.45%2018.552%2062.176%2027.828-1.242%2016.811-10.003%2053.664-7.986%2055.018%201.225.823%2037.984-23.97%2072.918-56.807L369.59%20494h27.97l-80.203-67.443c16.528-16.86%2031.523-35.104%2040.63-52.715%203.89%202.79%2010.874%2017.491%2013.472%2017.094%203.808-.583%2022.59-82.933%2019.467-85.311-4.446-3.385-82.083%2028.252-81.826%2030.072.24%201.708%2016.603%209.065%2024.117%2014.496-14.937%2015.194-38.718%2027.208-63.248%2036.514l-46.535-39.13-135.715%2036.46-19.3-155.033%2048.397-56.094c14.117%208.936%2026.693%2019.002%2034.948%2029.998-7.25%203.895-22.51%208.44-22.922%209.914-.44%201.571%2064.138%2038.535%2068.447%2036.08%203.027-1.724-3.81-76.379-7.092-77.34-2.239-.655-10.11%2011.457-13.861%2013.454-5.667-15.806-15.983-32.75-27.824-48.844l35.974-41.697%2069.721%2041.564%2060.56-14.82c6.94%2019.615%2011.658%2039.68%2010.522%2056.552-8.034-1.78-22.563-8.296-23.838-7.449-1.359.903%2023.44%2071.06%2028.307%2072.012%203.419.67%2046.966-60.353%2045.107-63.223-1.268-1.958-15.138%202.08-19.283%201.145%207.708-20.06%2010.876-46.496%2011.711-71.893l52.92-12.95L494%20148.495v-22.174l-70.01-50.365-56.472%2013.82c-.279-35.653-4.376-65.176-5.479-65.46z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
      colors: [
        {
          color: '#FFB882',
          variation: ColorVariation.Primary,
        },
      ],
      renderingType: ApplicationRenderingType.Local,
      internal: true,
      sidebarShortcuts: ['World'],
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
      colors: [
        {
          color: '#6FDBCC',
          variation: ColorVariation.Primary,
        },
      ],
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
      colors: [
        {
          color: '#F29B72',
          variation: ColorVariation.Primary,
        },
      ],
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
      colors: [
        {
          color: '#868686',
          variation: ColorVariation.Primary,
        },
      ],
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
        url: 'https://central-factory.github.io/metaverse/apps/codex',
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
    name: USER_APPLICATION_COLLECTION_NAME,
    upsert: true,
    data: userApplications,
  },
  multi: true,
};
