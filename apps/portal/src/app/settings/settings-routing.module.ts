import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsScene } from './settings.scene';

export const routes: Routes = [
  {
    path: '',
    component: SettingsScene,
    children: [
      {
        path: 'customization',
        loadChildren: () =>
          import('./scenes/customization/customization.module').then(
            (m) => m.CustomizationModule
          ),
      },
      {
        path: '',
        redirectTo: 'customization',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
