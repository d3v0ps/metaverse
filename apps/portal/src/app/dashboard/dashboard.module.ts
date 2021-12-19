import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardScene } from './scenes/dashboard.scene';

@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [DashboardScene],
})
export class DashboardModule {}
