import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationViewModule } from '@central-factory/applications/web-components/angular/application-view/application-view.module';
import { AvatarAppearancePortraitModule } from '@central-factory/avatars/web-components/angular/avatar-appearance-portrait/avatar-appearance-portrait.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { NavbarModule } from '@central-factory/web-components/angular/navbar/navbar.module';
import { SidebarModule } from '@central-factory/web-components/angular/sidebar/sidebar.module';
import { SplashScreenModule } from '@central-factory/web-components/angular/splash-screen/splash-screen.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { SystemToolbarModule } from '@central-factory/web-components/angular/system-toolbar/system-toolbar.module';
import { TabsetModule } from '@central-factory/web-components/angular/tabset/tabset.module';
import { WindowModule } from '@central-factory/web-components/angular/window/window.module';
import { ApplicationManagerComponent } from './application-manager.component';
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
    AvatarAppearancePortraitModule,
    SystemToolbarModule,
    WindowModule,
    TabsetModule,
    ApplicationViewModule,
  ],
  declarations: [PortalLayoutScene,
    ApplicationManagerComponent],
  exports: [PortalLayoutScene],
})
export class PortalLayoutSceneModule { }
