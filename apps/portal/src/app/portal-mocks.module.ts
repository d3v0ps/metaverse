import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  Provider,
} from '@angular/core';
import { USER_ASSETS_MOCKS_DATA_PROVIDER } from '@central-factory/assets/data/mocks/user-assets.data';
import { USER_AVATARS_MOCKS_DATA_PROVIDER } from '@central-factory/avatars/data/mocks/user-avatars.data';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { firstValueFrom } from 'rxjs';

export type PortalMocksModuleConfig = {
  enabled: boolean;
  autologin: boolean;
};

@NgModule()
export class PortalMocksModule {
  static forRoot({
    enabled = false,
    autologin = false,
  }: PortalMocksModuleConfig): ModuleWithProviders<PortalMocksModule> {
    const providers: Provider[] = [];

    if (enabled) {
      providers.push(USER_AVATARS_MOCKS_DATA_PROVIDER);
      providers.push(USER_ASSETS_MOCKS_DATA_PROVIDER);
    }

    if (autologin) {
      providers.push({
        provide: APP_INITIALIZER,
        useFactory: (entityManager: EntityManager) => () =>
          firstValueFrom(entityManager.setupDatabase('test', 'test1234')),
        deps: [EntityManager],
        multi: true,
      });
    }

    return {
      ngModule: PortalMocksModule,
      providers,
    };
  }
}
