import { NgModule } from '@angular/core';
import { EssentialsModule } from '../essentials.module';

import { ListItemComponent } from './list-item.component';
import { ListComponent } from './list.component';

@NgModule({
  imports: [EssentialsModule],
  exports: [ListComponent, ListItemComponent],
  declarations: [ListComponent, ListItemComponent],
  providers: [],
})
export class ListModule {}
