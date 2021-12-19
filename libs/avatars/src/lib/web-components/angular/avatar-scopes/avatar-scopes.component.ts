import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@ng-stack/forms';
import { Scope } from '../../../domain/models/scope';

export class AvatarScopesInput {
  scopes!: Scope[];
}

@Component({
  selector: 'cf-avatar-scopes',
  template: `
    <form [formGroup]="form" block="avatar">
      <div class="form-array" formArrayName="scopes">
        <h2>Scopes</h2>

        <div
          *ngFor="let scope of scopesForm.controls; let i = index"
          class="scope-form"
        >
          <p>
            I can {{ scope.value.scope }}
            <span block="badge"
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

        <button type="button" block="button" mod="secondary">
          <svg-icon
            src="assets/icons/mdi/plus.svg"
            elem="icon"
            [svgClass]="'icon__svg'"
          ></svg-icon>
          Add another scope
        </button>
      </div>
    </form>
  `,
})
export class AvatarScopesComponent {
  @Input() set scopes(value: AvatarScopesInput) {
    if (value) {
      this.scopesForm.clear();
      value.scopes.forEach((appearance) => {
        this.addScope(appearance);
      });
    }
  }

  form = new FormGroup<AvatarScopesInput>({
    scopes: new FormArray<Scope>([]),
  });

  get scopesForm() {
    return this.form.controls.scopes as FormArray<Scope>;
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
