import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'cf-tabset',
  template: `
    <ul
      cfBlock="tabset"
      [class.disable-style]="disableStyle"
      [ngClass]="customTabsetClass"
    >
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        cfBlock="tab"
        [cfMod]="[
          tab.active ? 'active' : undefined,
          tab.disabled ? 'disabled' : undefined,
          theme
        ]"
        class="button"
        [ngClass]="{
          'button--has-icon': tab.icon
        }"
      >
        <cf-svg-icon
          *ngIf="tab.icon"
          [src]="tab.icon"
          class="button__icon"
        ></cf-svg-icon>

        <p class="button__label">
          {{ tab.title }}
        </p>
      </li>
    </ul>
    <div class="tabset-content" [ngClass]="customContentClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabsetComponent implements AfterContentInit {
  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent> =
    new QueryList();

  @Input() public disableStyle = false;
  @Input() public customTabsetClass = '';
  @Input() public customContentClass = '';
  @Input() public theme?: string;

  @Output() public selectedTabChange = new EventEmitter();

  public ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab: TabComponent) => tab.active);

    if (activeTabs?.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  public selectTab(tab: TabComponent): void {
    if (tab.disabled === true || tab.active === true) {
      return;
    }

    const tabsArray = this.tabs.toArray();

    tabsArray.forEach((tab: TabComponent) => (tab.active = false));

    tab.active = true;
    this.selectedTabChange.emit(tabsArray.indexOf(tab));
  }
}
