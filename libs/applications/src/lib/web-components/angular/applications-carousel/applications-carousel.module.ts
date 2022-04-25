import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BemModule } from '@central-factory/web-components/angular/bem/bem.module';
import { ApplicationCardModule } from '../application-card/application-card.module';
import { ApplicationsCarouselComponent } from './applications-carousel.component';

@NgModule({
  imports: [CommonModule, BemModule, DragDropModule, ApplicationCardModule],
  declarations: [ApplicationsCarouselComponent],
  exports: [ApplicationsCarouselComponent],
})
export class ApplicationsCarouselModule {}
