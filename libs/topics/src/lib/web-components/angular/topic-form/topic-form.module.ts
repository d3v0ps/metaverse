import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationHeaderModule } from '@central-factory/applications/web-components/angular/application-header/application-header.module';
import { ApplicationIconModule } from '@central-factory/applications/web-components/angular/application-icon/application-icon.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { TopicFormComponent } from './topic-form.component';

@NgModule({
  declarations: [TopicFormComponent],
  exports: [TopicFormComponent],
  imports: [
    CommonModule,
    BemModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SvgIconModule,
    ApplicationHeaderModule,
    ApplicationIconModule,
  ],
})
export class TopicFormModule {}
