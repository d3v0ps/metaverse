import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardView } from './views/dashboard.view';

export const routes: Routes = [
  {
    path: '',
    component: DashboardView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
