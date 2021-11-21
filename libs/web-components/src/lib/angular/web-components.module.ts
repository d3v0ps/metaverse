import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BemModule } from 'angular-bem';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarModule } from './navbar/navbar.module';
import { SceneModule } from './scene/scene.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    BemModule,
    FlexLayoutModule,
    AngularSvgIconModule,
    NavbarModule,
    SceneModule,
  ],
  exports: [
    FlexLayoutModule,
    SidebarModule,
    BemModule,
    AngularSvgIconModule,
    NavbarModule,
    SceneModule,
  ],
})
export class WebComponentsModule {}
