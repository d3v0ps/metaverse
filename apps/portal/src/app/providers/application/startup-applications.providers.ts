import { Provider } from '@angular/core';
import { userApplicationsById } from '@central-factory/applications/data/base/user-applications.data';
import { ApplicationOpenCommand } from '@central-factory/applications/models/application-commands';
import { STARTUP_APPLICATIONS_PROVIDER } from '@central-factory/applications/states/application-display.state';

const vw = document.documentElement.clientWidth;
const vh = document.documentElement.clientHeight;

export const startupApplicationsProviders: Provider[] = [
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.terraform'],
      settings: {
        groupId: 'terraform',
        show: true,
        x: 99,
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
      application: userApplicationsById['com.central-factory.mirror'],
      settings: {
        groupId: 'mirror',
        show: true,
        x: (vw * 37) / 100,
        width: `calc(100vw - 67%)`,
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
      application: userApplicationsById['com.central-factory.knowledge-base'],
      settings: {
        groupId: 'knowledge-base',
        show: true,
        x: 99,
        width: `calc(100vw - 70%)`,
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
        groupId: 'world',
        show: true,
        x: (vw * 37) / 100,
        width: `calc(100vw - 67%)`,
        y: 45,
        height: `calc(100vh - 64%)`,
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
        groupId: 'burg',
        show: true,
        x: (vw * 37) / 100,
        width: `calc(100vw - 67%)`,
        y: 470,
        height: `calc(100vh - 78%)`,
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
        groupId: 'settings',
        show: true,
        x: (vw * 72) / 100,
        width: `calc(100vw - 75%)`,
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
      application: userApplicationsById['com.central-factory.inventory'],
      settings: {
        groupId: 'mirror',
        show: true,
        x: (vw * 37) / 100,
        width: `calc(100vw - 67%)`,
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
        groupId: 'portals',
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
