import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { UserPreferencesState } from '@central-factory/preferences/states/user-preferences.state';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'cf-portals-preferences',
  template: `
    <form
      class="portals-preferences"
      cfBlock="form"
      cfMod="horizontal"
      [formGroup]="form"
    >
      <div cfBlock="form-section" formArrayName="repositories">
        <h2>Repositories</h2>
        <div cfBlock="form-array">
          <div *ngFor="let repo of form.value.repositories; let i = index">
            <div [formGroupName]="i" cfBlock="form-group">
              <div cfBlock="form-control">
                <label cfBlock="form-label" for="label"> Label </label>
                <input
                  class="input"
                  cfBlock="form-control"
                  type="text"
                  id="label-{{ i }}"
                  formControlName="label"
                />
              </div>
              <div cfBlock="form-control">
                <label cfBlock="form-label" for="url"> Url* </label>
                <input
                  class="input"
                  cfBlock="form-control"
                  type="text"
                  id="url-{{ i }}"
                  formControlName="url"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div cfBlock="form-buttons">
        <button cfBlock="button" (click)="onAddButtonClick()">
          Add repository
        </button>
      </div>
    </form>
  `,
  styles: [
    `
      .form-array {
        display: grid;
        grid-template-columns: auto auto;
        gap: 1rem;
        .form-group {
          display: grid;
          grid-template-columns: auto auto;
          gap: 0.5rem;
          .form-control {
            margin-bottom: 1rem;
          }
        }
      }
    `,
  ],
})
export class PortalsPreferencesComponent implements OnInit, AfterViewInit {
  form = this.fb.group({
    repositories: this.fb.array([]),
  });

  onAddButtonClick() {
    this.form.value.repositories = this.form.value.repositories || [];
    this.addRepositoryForm();
  }

  constructor(
    private fb: FormBuilder,
    private userPreferencesState: UserPreferencesState<
      {
        label: string;
        url: string;
      }[]
    >
  ) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid),
        filter(() => this.form.dirty),
        tap(() =>
          this.userPreferencesState
            .setValue(
              'store.settings.repositories',
              this.form.value.repositories
            )
            .subscribe()
        )
      )

      .subscribe();
  }

  ngAfterViewInit() {
    this.userPreferencesState
      .byKey('store.settings.repositories')
      .pipe(
        map((preference) => preference?.value || []),
        tap((repositories) =>
          this.form.setControl(
            'repositories',
            this.fb.array(
              repositories.map((repository) =>
                this.fb.group({
                  label: [repository.label || ''],
                  url: [repository.url, Validators.required],
                })
              )
            )
          )
        )
      )
      .subscribe();
  }

  addRepositoryForm() {
    const repositoryForm = this.fb.group({
      label: [''],
      url: ['https://', Validators.required],
    });

    this.repositories.push(repositoryForm);
  }

  get repositories() {
    return this.form.controls['repositories'] as unknown as FormArray;
  }
}
