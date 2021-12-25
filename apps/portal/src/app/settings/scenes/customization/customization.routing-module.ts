import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizationScene } from './customization.scene';

export const routes: Routes = [
  {
    path: '',
    component: CustomizationScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizationRoutingModule {}
