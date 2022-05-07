import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Application,
  ColorVariation,
} from '../../../models/__generated__/types';

@Component({
  selector: 'cf-application-toolbar',
  template: `
    <ng-container *ngIf="application">
      <div
        cfBlock="application-toolbar"
        [ngStyle]="{
          'background-color': toolbarColor
        }"
      >
        <div cfElem="content">
          <div cfBlock="application-toolbar-buttons">
            <button
              cfBlock="button"
              [cfMod]="['danger', 'small', 'has-icon', 'only-icon', 'rounded']"
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
              [cfMod]="['light', 'small', 'has-icon', 'only-icon', 'rounded']"
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
            <cf-svg-icon
              *ngIf="icon"
              [src]="icon"
              cfElem="icon"
              [svgClass]="'icon__svg'"
            ></cf-svg-icon>
            {{ application.name }}
          </h3>
          <div
            cfBlock="application-toolbar-buttons"
            *ngIf="application.shortcuts && application.shortcuts.length > 0"
          >
            <ng-select
              [items]="application.shortcuts"
              [classList]="'ng-select--primary'"
              bindLabel="name"
              style="width: 300px;"
              placeholder="Select a shortcut"
            >
              <ng-template ng-option-tmp let-item="item">
                <div cfBlock="application-toolbar-shortcut">
                  <cf-svg-icon
                    *ngIf="icon"
                    [src]="
                      item.icons && item.icons.length > 0
                        ? item.icons[0].src
                        : ''
                    "
                    cfElem="icon"
                    [svgClass]="'icon__svg'"
                  ></cf-svg-icon>
                  {{ item.name }}
                </div>
              </ng-template>
            </ng-select>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class ApplicationToolbarComponent {
  @Input() set application(value: Application | undefined) {
    this._application = value;
    this.toolbarColor =
      value?.additionalProperties?.colors?.find(
        (color) => color.variation === ColorVariation.Primary
      )?.color || value?.themeColor;
    this.icon = value?.icons?.find((icon) => icon.src)?.src;
  }
  get application(): Application | undefined {
    return this._application;
  }

  @Output() closeButtonClick = new EventEmitter<Application>();
  @Output() optionsButtonClick = new EventEmitter<Application>();

  toolbarColor?: string;
  icon?: string;

  private _application?: Application;
}
