import { Provider } from '@angular/core';
import { userApplicationsById } from '@central-factory/applications/data/base/user-applications.data';
import { ApplicationOpenCommand } from '@central-factory/applications/models/application-commands';
import {
  GROUP_IDS,
  STARTUP_APPLICATIONS_PROVIDER,
} from '@central-factory/applications/states/application-display.state';

export const startupApplicationsProviders: Provider[] = [
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.mirror'],
      settings: {
        groupId: GROUP_IDS.AVATAR,
        show: true,
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
      },
    },
    multi: true,
  },
  {
    provide: STARTUP_APPLICATIONS_PROVIDER,
    useValue: {
      name: ApplicationOpenCommand.name,
      application: userApplicationsById['com.central-factory.devtools'],
      settings: {
        groupId: GROUP_IDS.PORTALS,
        show: true,
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
      },
    },
    multi: true,
  },
];
