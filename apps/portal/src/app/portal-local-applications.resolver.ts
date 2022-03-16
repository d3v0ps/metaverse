import { Inject, Injectable, InjectionToken, Type } from '@angular/core';
import { NgxdProvider, NgxdResolver } from '@ngxd/core';

export enum PortalLocalApplicationType {
  CreateAvatarScene = 'CreateAvatarScene',
  ManageAvatarsScene = 'ManageAvatarsScene',
  InventoryScene = 'InventoryScene',
  WorldScene = 'WorldScene',
  BurgMapScene = 'BurgMapScene',
  SettingsScene = 'SettingsScene',
  MarketplaceScene = 'MarketplaceScene',
  StartScene = 'StartScene',
}

export type PortalLocalApplicationsProvider = NgxdProvider<
  Type<any>,
  Type<any>
>;

export const PORTAL_LOCAL_APPLICATIONS_PROVIDER = new InjectionToken<
  PortalLocalApplicationsProvider[]
>('PortalModule.ApplicationsProvider');

@Injectable({
  providedIn: 'root',
})
export class PortalLocalApplicationsResolver extends NgxdResolver<
  Type<any>,
  Type<any>
> {
  constructor(
    @Inject(PORTAL_LOCAL_APPLICATIONS_PROVIDER)
    providers: PortalLocalApplicationsProvider[]
  ) {
    super(providers);
  }
}
