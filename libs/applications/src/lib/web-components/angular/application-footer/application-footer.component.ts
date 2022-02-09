import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';

@Component({
  selector: 'cf-application-footer',
  template: `
    <div cfBlock="application-footer">
      <div cfBlock="form-buttons">
        <button
          *ngIf="
            showInstallButton && !application?.additionalProperties?.internal
          "
          cfBlock="button"
          [cfMod]="['has-icon']"
          (click)="installClick.emit(application)"
        >
          <cf-svg-icon src="assets/icons/mdi/plus.svg"></cf-svg-icon>
          Add
        </button>
        <button
          *ngIf="showPlayButton && !application?.additionalProperties?.internal"
          cfBlock="button"
          [cfMod]="['primary', 'has-icon']"
          (click)="playClick.emit(application)"
        >
          <cf-svg-icon src="assets/icons/mdi/play.svg"></cf-svg-icon>
          Play
        </button>
      </div>
    </div>
  `,
})
export class ApplicationFooterComponent {
  @Input() application?: Application;

  @Input() showInstallButton = false;
  @Input() showPlayButton = false;

  @Output() installClick = new EventEmitter<Application>();
  @Output() playClick = new EventEmitter<Application>();
}
