import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomizationRoutingModule } from './customization.routing-module';
import { CustomizationScene } from './customization.scene';

@NgModule({
  declarations: [CustomizationScene],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BemModule,
    NgSelectModule,
    CustomizationRoutingModule,
  ],
  exports: [],
})
export class CustomizationModule {}
