import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { BemModule } from '../bem/bem.module';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { AppScene } from './app.scene';

@NgModule({
  imports: [
    CommonModule,
    SvgIconModule,
    FlexLayoutModule,
    BemModule,
    RouterModule,
    NavbarModule,
    SidebarModule,
  ],
  declarations: [AppScene],
  exports: [AppScene],
})
export class SceneModule {}
