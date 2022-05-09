import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { MarkdownModule } from '@central-factory/web-components/angular/markdown/markdown.module';
import { WindowModule } from '@central-factory/web-components/angular/window/window.module';
import { PackageModelViewerModule } from '../package-model-viewer/package-model-viewer.module';
import { PackagesListModule } from '../packages-list/packages-list.module';
import { CMSComponent } from './cms.component';

@NgModule({
  imports: [
    EssentialsModule,
    PackagesListModule,
    PackageModelViewerModule,
    MarkdownModule,
    WindowModule,
  ],
  declarations: [CMSComponent],
  exports: [CMSComponent],
})
export class CMSModule {}
