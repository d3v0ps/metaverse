import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationViewComponent } from './application-view.component';
import { ApplicationWebviewModule } from './components/application-webview/application-webview.module';

@NgModule({
  imports: [CommonModule, ApplicationWebviewModule],
  declarations: [ApplicationViewComponent],
  exports: [ApplicationViewComponent],
})
export class ApplicationViewModule {}
