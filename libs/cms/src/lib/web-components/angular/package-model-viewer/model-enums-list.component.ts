import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-model-enums-list',
  template: `
    <div cfBlock="model-enums-list" *ngIf="enums">
      <cf-typography
        *ngIf="showHeader"
        type="h3"
        [clickable]="true"
        (click)="onCollapseClick()"
      >
        <cf-svg-icon
          src="assets/icons/mdi/chevron-{{ collapsed ? 'down' : 'up' }}.svg"
        ></cf-svg-icon>
        Enums
      </cf-typography>
      <ng-container *ngIf="!collapsed">
        <div cfBlock="enum" *ngFor="let enum of enums | keyvalue">
          <cf-typography [clickable]="true" (click)="onEnumNameClick(enum.key)">
            <cf-svg-icon
              cfElem="visibility-toggle"
              src="assets/icons/mdi/chevron-{{
                expandedEnums[enum.key] ? 'up' : 'down'
              }}.svg"
            ></cf-svg-icon>
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/codicons/symbol-class.svg"
            ></cf-svg-icon>
            <span cfElem="name">
              {{ enum.key | cfCase }}
            </span>
          </cf-typography>
          <ng-container *ngIf="expandedEnums[enum.key]">
            <ng-container *ngFor="let prop of enum.value | keyvalue">
              <div cfBlock="enum-member">
                <cf-typography type="s">
                  <cf-svg-icon
                    cfElem="icon"
                    src="assets/icons/codicons/symbol-enum-member.svg"
                  ></cf-svg-icon>
                </cf-typography>
                <cf-typography type="s">
                  <span cfElem="name">{{ prop.key }}</span
                  >:
                  <span cfElem="value">{{
                    prop.value | json
                  }}</span></cf-typography
                >
              </div>
            </ng-container>
          </ng-container>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .enum {
        padding-left: 1.5rem;
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
        &__icon,
        &__name {
          color: var(--color-syntax-enum);
        }
      }
      .enum-member {
        padding-left: 1.5rem;
        display: flex;
        gap: 0.2rem;
        &__icon,
        &__name {
          color: var(--color-syntax-key);
        }
        &__name {
          font-weight: bold;
        }
        &__value {
          font-weight: bold;
          color: var(--color-syntax-string);
        }
      }
    `,
  ],
})
export class ModelEnumsListComponent {
  @Input() enums: Record<string, any> = {};
  @Input() showHeader = true;
  @Input() collapsed = false;

  expandedEnums: Record<string, boolean> = {};

  onCollapseClick() {
    this.collapsed = !this.collapsed;
  }

  onEnumNameClick(name: string) {
    if (this.expandedEnums[name]) {
      delete this.expandedEnums[name];
    } else {
      this.expandedEnums[name] = true;
    }
  }
}
