import { Provider } from '@angular/core';
import { LOCAL_APPLICATION_COMPONENTS_PROVIDER } from '@central-factory/applications/resolvers/components/local-applications/local-application-components.provider';
import { MarketplaceComponent } from '@central-factory/assets/web-components/angular/marketplace/marketplace.component';
import { DevtoolsComponent } from '@central-factory/devtools/web-components/angular/devtools/devtools.component';
import { WalletScene } from '@central-factory/finances/web-components/angular/wallet/wallet.scene';
import { InventoryScene } from '@central-factory/inventory/scenes/inventory/inventory.scene';
import { KnowledgeIndexComponent } from '@central-factory/knowledge/web-components/angular/knowledge-index/knowledge-index.component';
import { CreateAvatarScene } from '@central-factory/manage-avatars/scenes/create-avatar/create-avatar.scene';
import { SelectAvatarScene } from '@central-factory/manage-avatars/scenes/select-avatar/select-avatar.scene';
import { StartScene } from '@central-factory/player/scenes/start/start.scene';
import { BurgScene } from '@central-factory/worlds/web-components/angular/burgs/burg.scene';
import { WorldsManagerComponent } from '@central-factory/worlds/web-components/angular/worlds-manager/worlds-manager.component';
import { WorldScene } from '../../scenes/world/world.scene';
import { CustomizationScene } from '../../settings/scenes/customization/customization.scene';

export enum PortalLocalApplicationType {
  CreateAvatarScene = 'CreateAvatarScene',
  ManageAvatarsScene = 'ManageAvatarsScene',
  InventoryScene = 'InventoryScene',
  WorldScene = 'WorldScene',
  BurgMapScene = 'BurgMapScene',
  SettingsScene = 'SettingsScene',
  MarketplaceScene = 'MarketplaceScene',
  StartScene = 'StartScene',
  DevToolsScene = 'DevToolsScene',
  WorldsManagerScene = 'WorldsManagerScene',
  KnowledgeIndexScene = 'KnowledgeIndexScene',
  WalletScene = 'WalletScene',
}

export const portalLocalApplicationComponentsProviders: Provider[] = [
  // Applications
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.InventoryScene,
      component: InventoryScene,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.ManageAvatarsScene,
      component: SelectAvatarScene,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.CreateAvatarScene,
      component: CreateAvatarScene,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.WorldScene,
      component: WorldScene,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.BurgMapScene,
      component: BurgScene,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.MarketplaceScene,
      component: MarketplaceComponent,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.SettingsScene,
      component: CustomizationScene,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.StartScene,
      component: StartScene,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.DevToolsScene,
      component: DevtoolsComponent,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.WorldsManagerScene,
      component: WorldsManagerComponent,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.KnowledgeIndexScene,
      component: KnowledgeIndexComponent,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.WalletScene,
      component: WalletScene,
    },
    multi: true,
  },
];
