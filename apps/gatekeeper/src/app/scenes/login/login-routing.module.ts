import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScene } from './login.scene';

export const routes: Routes = [
  {
    path: '',
    component: LoginScene,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
