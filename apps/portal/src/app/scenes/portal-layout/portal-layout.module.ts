import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { NavbarModule } from '@central-factory/web-components/angular/navbar/navbar.module';
import { SidebarModule } from '@central-factory/web-components/angular/sidebar/sidebar.module';
import { SplashScreenModule } from '@central-factory/web-components/angular/splash-screen/splash-screen.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { PortalLayoutScene } from './portal-layout.scene';

@NgModule({
  imports: [
    CommonModule,
    SvgIconModule,
    BemModule,
    DragDropModule,
    RouterModule,
    NavbarModule,
    SidebarModule,
    SplashScreenModule,
  ],
  declarations: [PortalLayoutScene],
  exports: [PortalLayoutScene],
})
export class PortalLayoutSceneModule {}
