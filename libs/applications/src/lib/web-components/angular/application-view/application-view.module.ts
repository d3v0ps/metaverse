import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ApplicationViewComponent } from './application-view.component';
import { ApplicationWebviewModule } from './components/application-webview/application-webview.module';

@NgModule({
  imports: [CommonModule, BemModule, ApplicationWebviewModule],
  declarations: [ApplicationViewComponent],
  exports: [ApplicationViewComponent],
})
export class ApplicationViewModule {}
