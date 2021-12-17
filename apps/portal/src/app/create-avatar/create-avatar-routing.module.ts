import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAvatarScene } from './scenes/create-avatar.scene';

export const routes: Routes = [
  {
    path: '',
    component: CreateAvatarScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAvatarRoutingModule {}
