import { Directive } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

@Directive({
  selector: '[cfCloseSidebar]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(click)': '_onClick()',
  },
})
export class CloseSidebarDirective {
  constructor(private _sidebar: SidebarComponent) {}

  /** @internal */
  _onClick(): void {
    if (this._sidebar) {
      this._sidebar.close();
    }
  }
}
