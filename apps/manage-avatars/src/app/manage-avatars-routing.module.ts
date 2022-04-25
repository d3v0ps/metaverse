import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAvatarSelectedGuard } from '@central-factory/avatars/user-avatars/guards/is-avatar-selected/is-avatar-selected.guard';
import { IsDatabaseCreatedGuard } from '@central-factory/persistence/guards/is-database-created.guard';

export const routes: Routes = [
  {
    path: 'select-avatar',
    loadChildren: () =>
      import('./scenes/select-avatar/select-avatar.module').then(
        (m) => m.SelectAvatarModule
      ),
    canActivate: [IsDatabaseCreatedGuard],
  },
  {
    path: 'create-avatar',
    loadChildren: () =>
      import('./scenes/create-avatar/create-avatar.module').then(
        (m) => m.CreateAvatarModule
      ),
    canActivate: [IsDatabaseCreatedGuard],
  },
  {
    path: 'selected-avatar',
    loadChildren: () =>
      import('./scenes/selected-avatar/selected-avatar.module').then(
        (m) => m.SelectedAvatarModule
      ),
    canActivate: [IsDatabaseCreatedGuard, IsAvatarSelectedGuard],
  },
  {
    path: '',
    redirectTo: 'select-avatar',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageAvatarsRoutingModule {}
