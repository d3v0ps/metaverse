import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginScene } from './login.scene';

@NgModule({
  declarations: [LoginScene],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BemModule,
    SvgIconModule,
    LoginRoutingModule,
  ],
  exports: [],
})
export class LoginModule {}
