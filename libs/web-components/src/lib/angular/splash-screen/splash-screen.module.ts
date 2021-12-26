import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BemModule } from '../bem/bem.module';
import { SplashScreenComponent } from './splash-screen.component';

@NgModule({
  declarations: [SplashScreenComponent],
  exports: [SplashScreenComponent],
  imports: [CommonModule, BemModule, NgxSpinnerModule],
})
export class SplashScreenModule {}
