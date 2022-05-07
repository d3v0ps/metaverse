import { Component, EventEmitter, Input, Output } from '@angular/core';
import { World } from '@central-factory/worlds/__generated__/models';

@Component({
  selector: 'cf-worlds-list-item',
  template: `
    <div cfBlock="worlds-list-item" *ngIf="world">
      <div cfElem="header">
        <!-- h3 cfBlock="heading">#{{ world.id }}</h3 -->
      </div>

      <div cfElem="body">
        <div cfElem="name">
          <h4 cfBlock="heading">{{ world.displayName }} - {{ world.year }}</h4>
          <p>Era: {{ world.map?.settings?.options?.era }}</p>
        </div>
        <div cfElem="preview">
          <div
            *ngIf="world.meta.previewUrl"
            cfBlock="preview-image"
            [ngStyle]="{
              backgroundImage: 'url(' + world.meta.previewUrl + ')'
            }"
          ></div>
        </div>
      </div>

      <div cfElem="footer">
        <div cfBlock="form-buttons">
          <button
            cfBlock="button"
            cfMod="primary has-icon"
            type="button"
            [disabled]="true"
            (click)="playClick.emit(world)"
          >
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/mdi/play.svg"
            ></cf-svg-icon>
            Play
          </button>
        </div>
        <!--  div cfElem="source">
          <cf-code [content]="world | json"> </cf-code>
        </div -->
      </div>
    </div>
  `,
})
export class WorldsListItemComponent {
  @Input() world?: World;

  @Output() showCulturesClick = new EventEmitter<World>();
  @Output() showStatesClick = new EventEmitter<World>();
  @Output() showBurgsClick = new EventEmitter<World>();
  @Output() showAvatarsClick = new EventEmitter<World>();
  @Output() generateClick = new EventEmitter<World>();
  @Output() playClick = new EventEmitter<World>();
}
