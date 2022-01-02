import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ApplicationWebviewComponent } from './application-webview.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [ApplicationWebviewComponent],
  exports: [ApplicationWebviewComponent],
})
export class ApplicationWebviewModule {}
