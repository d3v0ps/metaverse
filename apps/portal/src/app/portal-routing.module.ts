import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'create-avatar',
    loadChildren: () =>
      import('./create-avatar/create-avatar.module').then(
        (m) => m.CreateAvatarModule
      ),
  },
  {
    path: 'marketplace',
    loadChildren: () =>
      import('./marketplace/marketplace.module').then(
        (m) => m.MarketplaceModule
      ),
  },
  {
    path: 'gatekeeper',
    loadChildren: () =>
      import('@central-factory/gatekeeper').then((m) => m.GatekeeperModule),
  },
  {
    path: 'selected-avatar',
    loadChildren: () =>
      import('./selected-avatar/selected-avatar.module').then(
        (m) => m.SelectedAvatarModule
      ),
  },
  {
    path: '',
    redirectTo: 'gatekeeper',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
