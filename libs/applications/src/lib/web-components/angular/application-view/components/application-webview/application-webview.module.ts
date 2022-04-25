import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ApplicationWebviewComponent } from './application-webview.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [ApplicationWebviewComponent],
  exports: [ApplicationWebviewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ApplicationWebviewModule {}
