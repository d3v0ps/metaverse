import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [SvgIconModule, BemModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarModule {}
