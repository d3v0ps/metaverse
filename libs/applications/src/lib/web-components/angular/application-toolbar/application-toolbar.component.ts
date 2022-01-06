import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Application } from '../../../models/application';

@Component({
  selector: 'cf-application-toolbar',
  template: `
    <ng-container *ngIf="application">
      <div cfBlock="application-toolbar">
        <div cfElem="content">
          <div cfBlock="application-toolbar-buttons">
            <button
              cfBlock="button"
              cfMod="danger"
              (click)="closeButtonClick.emit(application)"
            >
              <cf-svg-icon
                src="assets/icons/mdi/close.svg"
                cfElem="icon"
                [svgClass]="'icon__svg'"
              ></cf-svg-icon>
            </button>
            <button
              cfBlock="button"
              cfMod="light"
              (click)="optionsButtonClick.emit(application)"
            >
              <cf-svg-icon
                src="assets/icons/mdi/dots-vertical.svg"
                cfElem="icon"
                [svgClass]="'icon__svg'"
              ></cf-svg-icon>
            </button>
          </div>
          <h3 cfBlock="application-toolbar-title">
            {{ application.name }}
          </h3>
        </div>
      </div>
    </ng-container>
  `,
})
export class ApplicationToolbarComponent {
  @Input() application?: Application;

  @Output() closeButtonClick = new EventEmitter<Application>();
  @Output() optionsButtonClick = new EventEmitter<Application>();
}
