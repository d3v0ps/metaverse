import { Provider } from '@angular/core';
import { userApplicationsById } from '@central-factory/applications/data/base/user-applications.data';
import { ApplicationOpenCommand } from '@central-factory/applications/models/application-commands';
import {
  GROUP_IDS,
  STARTUP_APPLICATIONS_PROVIDER,
} from '@central-factory/applications/states/application-display.state';

const vw = document.documentElement.clientWidth;
const vh = document.documentElement.clientHeight;

export const startupApplicationsProviders: Provider[] = [
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.mirror'],
      settings: {
        groupId: GROUP_IDS.AVATAR,
        show: true,
        x: (vw * 72) / 100,
        width: `calc(100vw - 73%)`,
        y: 45,
        height: `calc(100vh - 35%)`,
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.wallet'],
      settings: {
        groupId: GROUP_IDS.KNOWLEDGE_BASE,
        show: true,
        x: 15,
        width: `calc(100vw - 80%)`,
        y: 49,
        height: `calc(100vh - 40%)`,
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.marketplace'],
      settings: {
        groupId: GROUP_IDS.KNOWLEDGE_BASE,
        show: true,
        x: 15,
        width: `calc(100vw - 80%)`,
        y: 49,
        height: `calc(100vh - 40%)`,
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.knowledge-base'],
      settings: {
        groupId: GROUP_IDS.KNOWLEDGE_BASE,
        show: true,
        x: 15,
        width: `calc(100vw - 80%)`,
        y: 49,
        height: `calc(100vh - 40%)`,
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.world'],
      settings: {
        groupId: GROUP_IDS.WORLD,
        show: true,
        x: 15,
        width: `calc(100vw - 80%)`,
        y: (vh * 67) / 100,
        height: `calc(100vh - 70%)`,
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.burg'],
      settings: {
        groupId: GROUP_IDS.WORLD,
        show: true,
        x: 15,
        width: `calc(100vw - 70%)`,
        y: (vh * 67) / 100,
        height: `calc(100vh - 70%)`,
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.inventory'],
      settings: {
        groupId: GROUP_IDS.INVENTORY,
        show: true,
        x: (vw * 72) / 100,
        width: `calc(100vw - 73%)`,
        y: (vh * 72) / 100,
        height: `calc(100vh - 75%)`,
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.portals'],
      settings: {
        groupId: GROUP_IDS.PORTALS,
        show: true,
        x: (vw * 23) / 100,
        width: `calc(100vw - 53%)`,
        y: (vh * 67) / 100,
        height: `calc(100vh - 70%)`,
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.terraform'],
      settings: {
        groupId: GROUP_IDS.PORTALS,
        show: true,
        x: (vw * 27) / 100,
        width: `calc(100vw - 57%)`,
        y: (vh * 67) / 100,
        height: `calc(100vh - 70%)`,
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.settings'],
      settings: {
        groupId: GROUP_IDS.PORTALS,
        show: true,
        x: (vw * 72) / 100,
        width: `calc(100vw - 75%)`,
        y: 45,
        height: `calc(100vh - 35%)`,
      },
    },
    multi: true,
  },
];
