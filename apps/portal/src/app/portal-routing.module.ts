import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppScene } from '@central-factory/web-components/angular/scene/app.scene';

export const routes: Routes = [
  {
    path: '',
    component: AppScene,
    children: [
      {
        path: 'select-avatar',
        loadChildren: () =>
          import(
            '@central-factory/agent-avatars/scenes/select-avatar/select-avatar.module'
          ).then((m) => m.SelectAvatarModule),
      },
      {
        path: 'create-avatar',
        loadChildren: () =>
          import(
            '@central-factory/agent-avatars/scenes/create-avatar/create-avatar.module'
          ).then((m) => m.CreateAvatarModule),
      },
      {
        path: 'selected-avatar',
        loadChildren: () =>
          import(
            '@central-factory/agent-avatars/scenes/selected-avatar/selected-avatar.module'
          ).then((m) => m.SelectedAvatarModule),
      },
      {
        path: 'play',
        loadChildren: () =>
          import('@central-factory/play/scenes/play/play.module').then(
            (m) => m.PlayModule
          ),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import(
            '@central-factory/inventory/scenes/inventory/inventory.module'
          ).then((m) => m.InventoryModule),
      },
      {
        path: 'marketplace',
        loadChildren: () =>
          import(
            '@central-factory/marketplace/scenes/marketplace/marketplace.module'
          ).then((m) => m.MarketplaceModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: '',
        redirectTo: 'play',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
