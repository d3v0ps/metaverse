import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { SplashScreenComponent } from './splash-screen.component';

@NgModule({
  declarations: [SplashScreenComponent],
  exports: [SplashScreenComponent],
  imports: [CommonModule, BemModule, SpinnerModule, SvgIconModule],
})
export class SplashScreenModule {}
