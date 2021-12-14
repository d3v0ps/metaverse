import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsScene } from './scenes/settings.scene';

export const routes: Routes = [
  {
    path: '',
    component: SettingsScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
