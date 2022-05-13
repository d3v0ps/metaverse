import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntityManager } from '@central-factory/persistence/entity-manager';
import { catchError, tap, throwError } from 'rxjs';

export type LoginForm = {
  name: string;
  password: string;
};

@Component({
  selector: 'cf-login',
  template: `
    <div cfBlock="scene-content">
      <h2>Access to the Metaverse</h2>

      <div cfBlock="login-form">
        <form cfBlock="form" [formGroup]="form" (submit)="onFormSubmit()">
          <div cfBlock="form-group">
            <label cfBlock="form-label" for="name">Name</label>
            <input
              class="input"
              cfBlock="form-control"
              type="name"
              id="name"
              formControlName="name"
            />
          </div>
          <div cfBlock="form-group">
            <label cfBlock="form-label" for="password">Password</label>
            <div cfBlock="input-group">
              <input
                class="input"
                cfBlock="form-control"
                type="text"
                id="password"
                formControlName="password"
              />
              <button
                cfBlock="input-group-append"
                type="button"
                class="button button--primary"
                (click)="onRandomizePasswordButtonClick()"
              >
                <cf-svg-icon
                  src="assets/icons/mdi/dice-multiple.svg"
                  cfElem="icon"
                  [svgClass]="'icon__svg'"
                ></cf-svg-icon>
              </button>
            </div>
            <label cfBlock="form-info" for="password"
              >We don't store your password, make sure you remember it.
              Otherwise you will lose your data.</label
            >
            <label
              cfBlock="form-error"
              *ngIf="
                form.controls.password.errors &&
                form.controls.password.errors.invalidPassword
              "
              >Invalid Password</label
            >
          </div>
          <div cfBlock="form-buttons">
            <button cfBlock="button" cfMod="primary" type="submit">
              Access
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class LoginScene {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private entityManager: EntityManager, private router: Router) {}

  onFormSubmit() {
    if (!this.form.valid) {
      return;
    }

    const { name, password } = this.form.value;

    this.entityManager
      .setupDatabase(name, password)
      .pipe(
        tap(() => this.router.navigate(['/'])),
        catchError((error) => {
          if (error.rxdb && error.code === 'DB1') {
            this.form.controls.password.setErrors({
              invalidPassword: true,
            });
          }

          return throwError(() => error);
        })
      )
      .subscribe();
  }

  onRandomizePasswordButtonClick() {
    this.form.controls.password.setValue(Math.random().toString(36).slice(-8));
  }
}
