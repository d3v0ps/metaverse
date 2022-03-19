import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { applicationProviders } from './application/application.providers';
import { componentsProviders } from './components/components.providers';
import { dataProviders } from './data/data.providers';
import {
  PortalMocksModule,
  PortalMocksModuleConfig,
} from './mocks/portal-mocks.module';

export const providers = [
  ...applicationProviders,
  ...componentsProviders,
  ...dataProviders,
];

@NgModule()
export class PortalProvidersModule {
  static providers: Provider[] = providers;

  static forRoot({
    mocks,
  }: {
    mocks: PortalMocksModuleConfig;
  }): ModuleWithProviders<PortalProvidersModule> {
    return {
      ngModule: PortalProvidersModule,
      providers: [
        ...providers,
        ...(PortalMocksModule.forRoot(mocks).providers as Provider[]),
      ],
    };
  }
}
