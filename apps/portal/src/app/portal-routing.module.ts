/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAvatarSelectedGuard } from '@central-factory/avatars/guards/is-avatar-selected.guard';
import { IsDatabaseCreatedGuard } from '@central-factory/persistence/guards/is-database-created.guard';
import { IsNotDatabaseCreatedGuard } from '@central-factory/persistence/guards/is-not-database-created.guard';
import { PortalLayoutScene } from './scenes/portal-layout/portal-layout.scene';

const REMOTE_ENTRY_URL = 'http://localhost:3000/remoteEntry.js';

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
        path: 'start',
        loadChildren: () =>
          import('apps/player/src/app/scenes/start/start.module').then(
            (m) => m.StartModule
          ),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
      },
      {
        path: 'portals',
        loadChildren: () =>
          import('apps/player/src/app/scenes/portals/portals.module').then(
            (m) => m.PortalsModule
          ),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
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
        path: 'world',
        loadChildren: () =>
          import('./scenes/world/world-scene.module').then(
            (m) => m.WorldSceneModule
          ),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
      },
      {
        path: 'devtools',
        loadChildren: () =>
          import(
            '@central-factory/devtools/web-components/angular/devtools/devtools.module'
          ).then((m) => m.DevToolsModule),
        canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
      },
      {
        path: '',
        redirectTo: 'start',
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
