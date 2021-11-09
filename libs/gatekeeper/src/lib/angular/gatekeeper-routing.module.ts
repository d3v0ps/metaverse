
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginView } from './views/login.view';
import { RegisterView } from './views/register.view';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginView
  },
  {
    path: 'register',
    component: RegisterView
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatekeeperRoutingModule {}
