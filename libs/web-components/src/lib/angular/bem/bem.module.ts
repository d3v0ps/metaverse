import { NgModule } from '@angular/core';
import { BlockDirective } from './block.directive';
import { ElemDirective } from './elem.directive';
import { ModDirective } from './mod.directive';

@NgModule({
  declarations: [BlockDirective, ElemDirective, ModDirective],
  exports: [BlockDirective, ElemDirective, ModDirective],
})
export class BemModule {}
