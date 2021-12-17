import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectAvatarScene } from './scenes/select-avatar.scene';

export const routes: Routes = [
  {
    path: '',
    component: SelectAvatarScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectAvatarRoutingModule {}
