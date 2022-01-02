import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { USER_ASSETS_MOCKS_DATA_PROVIDER } from '@central-factory/assets/data/mocks/user-assets.data';
import { USER_AVATARS_MOCKS_DATA_PROVIDER } from '@central-factory/avatars/data/mocks/user-avatars.data';

export type PortalMocksModuleConfig = {
  enabled: boolean;
};

@NgModule()
export class PortalMocksModule {
  static forRoot({
    enabled = false,
  }: PortalMocksModuleConfig): ModuleWithProviders<PortalMocksModule> {
    const providers: Provider[] = [];

    if (enabled) {
      providers.push(USER_AVATARS_MOCKS_DATA_PROVIDER);
      providers.push(USER_ASSETS_MOCKS_DATA_PROVIDER);
    }

    return {
      ngModule: PortalMocksModule,
      providers,
    };
  }
}
