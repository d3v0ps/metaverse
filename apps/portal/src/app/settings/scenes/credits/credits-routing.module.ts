import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsScene } from './credits.scene';

export const routes: Routes = [
  {
    path: '',
    component: CreditsScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditsRoutingModule {}
