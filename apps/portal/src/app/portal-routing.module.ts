import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppScene } from '@central-factory/web-components/angular/scene/app.scene';

export const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: AppScene,
  //   loadChildren: () =>
  //     import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  // },
  // {
  //   path: 'create-avatar',
  //   loadChildren: () =>
  //     import('./create-avatar/create-avatar.module').then(
  //       (m) => m.CreateAvatarModule
  //     ),
  // },
  {
    path: '',
    component: AppScene,
    children: [
      {
        path: 'selected-avatar',
        loadChildren: () =>
          import('./selected-avatar/selected-avatar.module').then(
            (m) => m.SelectedAvatarModule
          ),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('./inventory/inventory.module').then((m) => m.InventoryModule),
      },
      {
        path: 'marketplace',
        loadChildren: () =>
          import('./marketplace/marketplace.module').then(
            (m) => m.MarketplaceModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
  // {
  //   path: 'gatekeeper',
  //   loadChildren: () =>
  //     import('@central-factory/gatekeeper').then((m) => m.GatekeeperModule),
  // },
  {
    path: '',
    redirectTo: 'selected-avatar',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
