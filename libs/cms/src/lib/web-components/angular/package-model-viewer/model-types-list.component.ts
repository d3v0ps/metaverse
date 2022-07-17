import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  SymbolType,
  TypeToken,
} from '@central-factory/platforms/__generated__/models';

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
        <div cfBlock="type" *ngFor="let type of types">
          <cf-typography
            [clickable]="true"
            (click)="onTypeNameClick(type.name)"
          >
            <cf-svg-icon
              cfElem="visibility-toggle"
              src="assets/icons/mdi/chevron-{{
                expandedTypes[type.name] ? 'up' : 'down'
              }}.svg"
            ></cf-svg-icon>
            <cf-svg-icon
              cfElem="icon"
              src="assets/icons/fluent-icons/symbol-class.svg"
            ></cf-svg-icon>
            <span cfElem="name" #typeNames>
              {{ type.name | cfCase }}
            </span>
          </cf-typography>
          <ng-container *ngIf="expandedTypes[type.name]">
            <ng-container
              *ngIf="type.symbol === symbolTypes.Union; else propsTemplate"
            >
              <pre (click)="onTypeDefClick(type)">{{
                type.properties[0].type
              }}</pre>
            </ng-container>
            <ng-template #propsTemplate>
              <ng-container *ngFor="let prop of type.properties">
                <div cfBlock="type-member" (click)="typeClick.emit(prop.type)">
                  <cf-typography type="s">
                    <cf-svg-icon
                      cfElem="icon"
                      src="assets/icons/fluent-icons/symbol-property.svg"
                    ></cf-svg-icon>
                  </cf-typography>
                  <cf-typography type="s">
                    <span cfElem="name"
                      >{{ prop.name }}{{ prop.required ? '' : '?' }}</span
                    >:
                    <span cfElem="value">{{ prop.type }}</span>
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
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
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
  @Input() types: TypeToken[] = [];
  @Input() set type(value: TypeToken | undefined) {
    this._type = value;

    if (!value) {
      return;
    }

    setTimeout(() => {
      if (!this.typeNames) {
        return;
      }
      const index = this.types.findIndex((t) => t.name === value.name);
      const typeName = this.typeNames.get(index);
      if (typeName) {
        typeName.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.expandedTypes[value.name] = true;
      }
    }, 1);
  }
  get type(): TypeToken | undefined {
    return this._type;
  }
  @Input() showHeader = true;
  @Input() collapsed = false;

  @ViewChildren('typeNames') typeNames?: QueryList<ElementRef>;

  @Output() typeClick = new EventEmitter<string>();

  symbolTypes = SymbolType;

  expandedTypes: Record<string, boolean> = {};

  private _type?: TypeToken;

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

  onTypeDefClick(type: TypeToken) {
    this.typeClick.emit(type.raw.type);
  }
}
