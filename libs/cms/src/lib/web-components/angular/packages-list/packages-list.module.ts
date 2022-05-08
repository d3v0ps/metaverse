import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { PackagesListComponent } from './packages-list.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [PackagesListComponent],
  declarations: [PackagesListComponent],
  providers: [PackagesListComponent],
})
export class PackagesListModule {}
