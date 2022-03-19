import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { DevtoolsComponent } from './devtools.component';

@NgModule({
  imports: [CommonModule, BemModule],
  exports: [DevtoolsComponent],
  declarations: [DevtoolsComponent],
})
export class DevToolsModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customElementEntryComponents: Type<any>[] = [DevtoolsComponent];
}
