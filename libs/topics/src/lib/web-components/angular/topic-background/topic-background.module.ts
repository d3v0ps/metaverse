import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { TopicBackgroundComponent } from './topic-background.component';

@NgModule({
  imports: [CommonModule, BemModule],
  declarations: [TopicBackgroundComponent],
  exports: [TopicBackgroundComponent],
})
export class TopicBackgroundModule {}
