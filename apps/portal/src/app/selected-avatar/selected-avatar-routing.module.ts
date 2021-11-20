import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedAvatarScene } from './scenes/selected-avatar/selected-avatar.scene';

export const routes: Routes = [
  {
    path: '',
    component: SelectedAvatarScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedAvatarRoutingModule {}
