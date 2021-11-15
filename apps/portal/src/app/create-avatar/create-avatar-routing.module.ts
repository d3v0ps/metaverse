import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAvatarView } from './views/create-avatar.view';

export const routes: Routes = [
  {
    path: '',
    component: CreateAvatarView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAvatarRoutingModule {}
