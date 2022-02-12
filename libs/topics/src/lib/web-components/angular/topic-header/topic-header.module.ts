import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { TopicHeaderComponent } from './topic-header.component';

@NgModule({
  declarations: [TopicHeaderComponent],
  imports: [CommonModule, BemModule, SvgIconModule],
  exports: [TopicHeaderComponent],
})
export class TopicHeaderModule {}
