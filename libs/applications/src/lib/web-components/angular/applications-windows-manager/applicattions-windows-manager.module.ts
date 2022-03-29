import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { TabsetModule } from '@central-factory/web-components/angular/tabset/tabset.module';
import { WindowModule } from '@central-factory/web-components/angular/window/window.module';
import { ApplicationViewModule } from '../application-view/application-view.module';
import { ApplicationsWindowsManagerComponent } from './applications-windows-manager.component';

@NgModule({
  imports: [
    CommonModule,
    BemModule,
    SvgIconModule,
    TabsetModule,
    WindowModule,
    ApplicationViewModule,
  ],
  declarations: [ApplicationsWindowsManagerComponent],
  exports: [ApplicationsWindowsManagerComponent],
})
export class ApplicationsWindowsManagerModule {}
