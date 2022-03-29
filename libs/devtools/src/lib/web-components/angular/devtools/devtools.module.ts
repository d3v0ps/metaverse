import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { WorldsManagerModule } from '@central-factory/worlds/web-components/angular/worlds-manager/worlds-manager.module';
import { CodeComponent } from '../code/code.component';
import { DevtoolsComponent } from './devtools.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule, WorldsManagerModule],
  exports: [DevtoolsComponent],
  declarations: [DevtoolsComponent, CodeComponent],
})
export class DevToolsModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customElementEntryComponents: Type<any>[] = [DevtoolsComponent];
}
