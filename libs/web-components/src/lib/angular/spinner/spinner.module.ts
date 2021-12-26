import { NgModule } from '@angular/core';
import { BemModule } from '../bem/bem.module';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  imports: [BemModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
