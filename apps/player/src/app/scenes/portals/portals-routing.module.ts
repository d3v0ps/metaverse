import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalsScene } from './portals.scene';

export const routes: Routes = [
  {
    path: '',
    component: PortalsScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalsRoutingModule {}
