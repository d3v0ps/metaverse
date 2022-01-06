import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetadronesMainScene } from './metadrones-main.scene';

export const routes: Routes = [
  {
    path: '',
    component: MetadronesMainScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetadronesRoutingModule {}
