import { Provider } from '@angular/core';
import { LOCAL_APPLICATION_COMPONENTS_PROVIDER } from '@central-factory/applications/resolvers/components/local-applications/local-application-components.provider';
import { DevtoolsComponent } from '@central-factory/devtools/web-components/angular/devtools/devtools.component';
import { InventoryScene } from '@central-factory/inventory/scenes/inventory/inventory.scene';
import { KnowledgeIndexComponent } from '@central-factory/knowledge/web-components/angular/knowledge-index/knowledge-index.component';
import { CreateAvatarScene } from '@central-factory/manage-avatars/scenes/create-avatar/create-avatar.scene';
import { SelectAvatarScene } from '@central-factory/manage-avatars/scenes/select-avatar/select-avatar.scene';
import { MarketplaceScene } from '@central-factory/marketplace/scenes/marketplace/marketplace.scene';
import { StartScene } from '@central-factory/player/scenes/start/start.scene';
import { BurgMapComponent } from '@central-factory/worlds/web-components/angular/burgs/burg-map/burg-map.component';
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
      component: BurgMapComponent,
    },
    multi: true,
  },
  {
    provide: LOCAL_APPLICATION_COMPONENTS_PROVIDER,
    useValue: {
      type: PortalLocalApplicationType.MarketplaceScene,
      component: MarketplaceScene,
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
];
