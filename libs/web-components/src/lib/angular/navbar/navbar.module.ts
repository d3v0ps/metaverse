import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BemModule } from '../bem/bem.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [SvgIconModule, FlexLayoutModule, BemModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarModule {}
