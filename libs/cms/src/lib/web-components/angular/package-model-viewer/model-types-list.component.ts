import { Component, Input } from '@angular/core';

@Component({
  selector: 'cf-model-types-list',
  template: `
    <div cfBlock="model-types-list" *ngIf="types">
      <cf-typography
        *ngIf="showHeader"
        type="h3"
        [clickable]="true"
        (click)="onCollapseClick()"
      >
        <cf-svg-icon
          src="assets/icons/mdi/chevron-{{ collapsed ? 'down' : 'up' }}.svg"
        ></cf-svg-icon>
        Types
      </cf-typography>
      <ng-container *ngIf="!collapsed">
        <div cfBlock="type" *ngFor="let type of types | keyvalue">
          <cf-typography [clickable]="true" (click)="onTypeNameClick(type.key)">
            <cf-svg-icon
              cfElem="visibility-toggle"
              src="assets/icons/mdi/chevron-{{
                expandedTypes[type.key] ? 'up' : 'down'
              }}.svg"
            ></cf-svg-icon>
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/codicons/symbol-class.svg"
            ></cf-svg-icon>
            <span cfElem="name">
              {{ type.key | cfCase }}
            </span>
          </cf-typography>
          <ng-container *ngIf="expandedTypes[type.key]">
            <ng-container
              *ngIf="isTypeDefinition(type.value); else propsTemplate"
            >
              <pre>{{ type.value['type'] }}</pre>
            </ng-container>
            <ng-template #propsTemplate>
              <ng-container *ngFor="let prop of type.value | keyvalue">
                <div cfBlock="type-member">
                  <cf-typography type="s">
                    <cf-svg-icon
                      cfElem="icon"
                      src="assets/icons/codicons/symbol-property.svg"
                    ></cf-svg-icon>
                  </cf-typography>
                  <cf-typography type="s">
                    <span cfElem="name"
                      >{{ prop.key }}{{ prop.value.required ? '' : '?' }}</span
                    >:
                    <span cfElem="value">{{ prop.value.type }}</span>
                  </cf-typography>
                </div>
              </ng-container>
            </ng-template>
          </ng-container>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .type {
        padding-left: 1.5rem;
        &__icon,
        &__name {
          color: var(--color-syntax-type);
        }
      }
      .type-member {
        padding-left: 1.5rem;
        display: flex;
        gap: 0.2rem;
        &__icon,
        &__name {
          color: var(--color-syntax-property);
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
export class ModelTypesListComponent {
  @Input() types: Record<
    string,
    { [key: string]: { type: string; required?: boolean } }
  > = {};
  @Input() showHeader = true;
  @Input() collapsed = false;

  expandedTypes: Record<string, boolean> = {};

  isTypeDefinition(data: any) {
    return data.type && Object.keys(data).length === 1;
  }

  onCollapseClick() {
    this.collapsed = !this.collapsed;
  }

  onTypeNameClick(type: string) {
    if (this.expandedTypes[type]) {
      delete this.expandedTypes[type];
    } else {
      this.expandedTypes[type] = true;
    }
  }
}
