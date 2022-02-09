import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartScene } from './start.scene';

export const routes: Routes = [
  {
    path: '',
    component: StartScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule {}
