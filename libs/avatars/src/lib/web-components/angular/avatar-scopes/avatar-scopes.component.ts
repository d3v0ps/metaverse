import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import type { Scope } from '../../../models/scope';

export class AvatarScopesInput {
  scopes!: Scope[];
}

@Component({
  selector: 'cf-avatar-scopes',
  template: `
    <form [formGroup]="form" cfBlock="avatar">
      <div class="form-array" formArrayName="scopes">
        <h2>Scopes</h2>

        <div
          *ngFor="let scope of scopesForm.controls; let i = index"
          class="scope-form"
        >
          <p>
            I can {{ scope.value.scope }}
            <span cfBlock="badge"
              >{{ scope.value.integration }} {{ scope.value.domain }}</span
            >
          </p>

          <div [formGroupName]="i" *ngIf="false">
            <div class="form-control">
              <label for="integration-{{ i }}">Integration:</label>
              <input
                id="integration-{{ i }}"
                type="text"
                formControlName="integration"
              />
            </div>

            <div class="form-control">
              <label for="domain-{{ i }}">Domain:</label>
              <input id="domain-{{ i }}" type="text" formControlName="domain" />
            </div>

            <div class="form-control">
              <label for="scope-{{ i }}">Scope:</label>
              <input id="scope-{{ i }}" type="text" formControlName="scope" />
            </div>
          </div>
        </div>

        <button type="button" cfBlock="button" cfMod="secondary">
          <cf-svg-icon
            src="assets/icons/mdi/plus.svg"
            cfElem="icon"
            [svgClass]="'icon__svg'"
          ></cf-svg-icon>
          Add another scope
        </button>
      </div>
    </form>
  `,
})
export class AvatarScopesComponent {
  @Input() set scopes(value: Scope[]) {
    if (value) {
      this.scopesForm.clear();
      value.forEach((appearance) => {
        this.addScope(appearance);
      });
    }
  }

  form = new FormGroup({
    scopes: new FormArray([]),
  });

  get scopesForm(): FormArray {
    return this.form.controls.scopes as FormArray;
  }

  addScope(scope: Scope) {
    this.scopesForm.push(
      new FormGroup({
        domain: new FormControl(scope.domain),
        integration: new FormControl(scope.integration),
        scope: new FormControl(scope.scope),
      })
    );
  }
}
