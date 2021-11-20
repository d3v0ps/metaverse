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
  // {
  //   path: 'marketplace',
  //   loadChildren: () =>
  //     import('./marketplace/marketplace.module').then(
  //       (m) => m.MarketplaceModule
  //     ),
  // },
  // {
  //   path: 'gatekeeper',
  //   loadChildren: () =>
  //     import('@central-factory/gatekeeper').then((m) => m.GatekeeperModule),
  // },
  {
    path: 'selected-avatar',
    component: AppScene,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./selected-avatar/selected-avatar.module').then(
            (m) => m.SelectedAvatarModule
          ),
      },
    ],
  },
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
