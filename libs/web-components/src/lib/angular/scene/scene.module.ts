import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { BemModule } from 'angular-bem';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { AppScene } from './app.scene';

@NgModule({
  imports: [
    AngularSvgIconModule,
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
