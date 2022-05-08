import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { PackageModelViewerModule } from '../package-model-viewer/package-model-viewer.module';
import { PackagesListModule } from '../packages-list/packages-list.module';
import { CMSComponent } from './cms.component';

@NgModule({
  imports: [EssentialsModule, PackagesListModule, PackageModelViewerModule],
  declarations: [CMSComponent],
  exports: [CMSComponent],
})
export class CMSModule {}
