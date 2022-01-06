/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAvatarSelectedGuard } from '@central-factory/avatars/guards/is-avatar-selected.guard';
import { IsDatabaseCreatedGuard } from '@central-factory/persistence/guards/is-database-created.guard';
import { IsNotDatabaseCreatedGuard } from '@central-factory/persistence/guards/is-not-database-created.guard';
import { PortalLayoutScene } from './scenes/portal-layout/portal-layout.scene';

const METADRONES_URL = 'http://localhost:3000/remoteEntry.js';

export const routes: Routes = [
  {
    path: '',
    component: PortalLayoutScene,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('@central-factory/gatekeeper/scenes/login/login.module').then(
            (m) => m.LoginModule
          ),
        canActivate: [IsNotDatabaseCreatedGuard],
      },
      {
        path: 'select-avatar',
        loadChildren: () =>
          import(
            '@central-factory/manage-avatars/scenes/select-avatar/select-avatar.module'
          ).then((m) => m.SelectAvatarModule),
        canActivate: [IsDatabaseCreatedGuard],
      },
      {
        path: 'create-avatar',
        loadChildren: () =>
          import(
            '@central-factory/manage-avatars/scenes/create-avatar/create-avatar.module'
          ).then((m) => m.CreateAvatarModule),
        canActivate: [IsDatabaseCreatedGuard],
      },
      {
        path: 'selected-avatar',
        loadChildren: () =>
          import(
            '@central-factory/manage-avatars/scenes/selected-avatar/selected-avatar.module'
          ).then((m) => m.SelectedAvatarModule),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
      },
      {
        path: 'play',
        loadChildren: () =>
          import('apps/player/src/app/scenes/play/play.module').then(
            (m) => m.PlayModule
          ),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
      },
      {
        path: 'metadrones',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: METADRONES_URL,
            exposedModule: './Module',
          }).then((m) => m.MetadronesModule),
      },
      {
        path: 'manage-applications',
        loadChildren: () =>
          import(
            '@central-factory/player/scenes/manage-applications/manage-applications.module'
          ).then((m) => m.ManageApplicationsModule),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import(
            '@central-factory/inventory/scenes/inventory/inventory.module'
          ).then((m) => m.InventoryModule),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
      },
      {
        path: 'marketplace',
        loadChildren: () =>
          import(
            '@central-factory/marketplace/scenes/marketplace/marketplace.module'
          ).then((m) => m.MarketplaceModule),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
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
