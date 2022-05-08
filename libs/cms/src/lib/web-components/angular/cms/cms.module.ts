import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { PackagesListModule } from '../packages-list/packages-list.module';
import { CMSComponent } from './cms.component';

@NgModule({
  imports: [EssentialsModule, PackagesListModule],
  declarations: [CMSComponent],
  exports: [CMSComponent],
})
export class CMSModule {}
