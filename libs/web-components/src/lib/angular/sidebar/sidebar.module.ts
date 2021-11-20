import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CloseSidebarDirective } from './close-sidebar.directive';
import { SidebarContainerComponent } from './sidebar-container.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SidebarComponent,
    SidebarContainerComponent,
    CloseSidebarDirective,
  ],
  exports: [SidebarComponent, SidebarContainerComponent, CloseSidebarDirective],
})
export class SidebarModule {}
