import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryScene } from './scenes/inventory.scene';

export const routes: Routes = [
  {
    path: '',
    component: InventoryScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
