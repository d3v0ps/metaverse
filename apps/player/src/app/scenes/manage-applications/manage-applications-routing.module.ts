import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageApplicationsScene } from './manage-applications.scene';

export const routes: Routes = [
  {
    path: '',
    component: ManageApplicationsScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageApplicationsRoutingModule {}
