import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'customization',
    outlet: 'settings',
    loadChildren: () =>
      import('./scenes/customization/customization.module').then(
        (m) => m.CustomizationModule
      ),
  },
  {
    path: 'credits',
    outlet: 'settings',
    loadChildren: () =>
      import('./scenes/credits/credits.module').then((m) => m.CreditsModule),
  },
  {
    path: '',
    outlet: 'settings',
    redirectTo: 'settings/customization',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
