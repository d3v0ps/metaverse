import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationsCarouselModule } from '@central-factory/applications/web-components/angular/applications-carousel/applications-carousel.module';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { SvgIconModule } from '@central-factory/web-components/angular/svg-icon/svg-icon.module';
import { TopicCategoriesComponent } from './topic-categories.component';

@NgModule({
  imports: [CommonModule, BemModule, SvgIconModule, ApplicationsCarouselModule],
  declarations: [TopicCategoriesComponent],
  exports: [TopicCategoriesComponent],
})
export class TopicCategoriesModule {}
