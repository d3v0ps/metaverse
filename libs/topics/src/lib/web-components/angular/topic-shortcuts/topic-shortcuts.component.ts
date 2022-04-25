import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Application,
  ApplicationShortcut,
} from '@central-factory/applications/models/application';
import { ApplicationShortcutView } from '@central-factory/applications/web-components/angular/application-shortcut/application-shortcut.component';

@Component({
  selector: 'cf-topic-shortcuts',
  template: `
    <div cfBlock="topic-shortcuts">
      <ng-container *ngFor="let shortcut of shortcuts">
        <cf-application-shortcut
          theme="application"
          [shortcut]="shortcut.shortcut"
          [application]="shortcut.application"
          (shortcutClick)="shortcutClick.emit($event)"
        ></cf-application-shortcut>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .topic-shortcuts {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
      }
    `,
  ],
})
export class TopicShortcutsComponent {
  @Input() shortcuts: {
    shortcut: ApplicationShortcut;
    application: Application;
  }[] = [];

  @Output() shortcutClick = new EventEmitter<ApplicationShortcutView>();
}
