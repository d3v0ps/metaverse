import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardView } from './views/dashboard.view';

@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  declarations: [
    DashboardView,
  ]
})
export class DashboardModule {

}
