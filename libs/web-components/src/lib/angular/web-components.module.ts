import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BemModule } from 'angular-bem';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderModule } from './header/header.module';
import { SceneModule } from './scene/scene.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    BemModule,
    FlexLayoutModule,
    AngularSvgIconModule,
    HeaderModule,
    SceneModule,
  ],
  exports: [
    FlexLayoutModule,
    SidebarModule,
    BemModule,
    AngularSvgIconModule,
    HeaderModule,
    SceneModule,
  ],
})
export class WebComponentsModule {}
