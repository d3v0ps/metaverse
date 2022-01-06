import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayScene } from './play.scene';

export const routes: Routes = [
  {
    path: '',
    component: PlayScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayRoutingModule {}
