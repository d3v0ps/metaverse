import { NgModule } from '@angular/core';
import { EssentialsModule } from '@central-factory/web-components/angular/essentials.module';
import { ListModule } from '@central-factory/web-components/angular/list/list.module';
import { PackagesListComponent } from './packages-list.component';

@NgModule({
  imports: [EssentialsModule, ListModule],
  exports: [PackagesListComponent],
  declarations: [PackagesListComponent],
  providers: [PackagesListComponent],
})
export class PackagesListModule {}
