import { Component, Input } from '@angular/core';
import { ApplicationAdditionalProperties } from '@central-factory/applications/__generated__/models';

@Component({
  selector: 'cf-application-permissions',
  template: `
    <div cfBlock="application-permissions" *ngIf="permissions">
      <h3 cfBlock="heading">Permissions</h3>
      <div cfElem="permissions">
        <ng-container *ngIf="permissions.length > 0; else noPermissions">
          <span>{{ permissions | json }}</span>
        </ng-container>
        <ng-template #noPermissions>
          <span>No permissions required</span>
        </ng-template>
      </div>
    </div>
  `,
})
export class ApplicationPermissionsComponent {
  @Input() permissions: ApplicationAdditionalProperties['permissions'] = [];
}
