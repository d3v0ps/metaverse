import { Component } from '@angular/core';
import { ClockService } from '@central-factory/physics/services/clock.service';
import { of } from 'rxjs';

@Component({
  selector: 'cf-system-toolbar',
  template: `
    <div cfBlock="system-toolbar">
      <div cfBlock="system-toolbar-content" cfMod="left">
        <div cfElem="assistant">
          <cf-svg-icon src="assets/icons/mdi/robot-happy.svg"></cf-svg-icon>
          <cf-command-bar size="xs"></cf-command-bar>
          <cf-world-selector></cf-world-selector>
          <cf-burg-selector></cf-burg-selector>
          <cf-room-selector></cf-room-selector>
        </div>
      </div>
      <div cfBlock="system-toolbar-content" cfMod="center"></div>
      <div cfBlock="system-toolbar-content" cfMod="right">
        <div cfElem="clock">
          {{ clock$ | async | date: 'LLL d, yyyy, HH:mm' }}
        </div>
        <div cfElem="version">v{{ version$ | async }}</div>
      </div>
    </div>
  `,
  styles: [
    `
      .system-toolbar {
        position: absolute;
        width: 100%;
        z-index: 999;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        background: rgba(0, 0, 0, 0.5);
        color: white;

        .system-toolbar-content {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          &__assistant {
            display: flex;
            gap: 0.5rem;
          }
        }
      }
    `,
  ],
})
export class SystemToolbarComponent {
  clock$ = this.clock.everyMinute$;
  version$ = of('0.0.1');

  constructor(private clock: ClockService) {}
}
