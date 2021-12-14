import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'cf-settings',
  template: `
    <div block="scene-content">
      Settings

      <form [formGroup]="form">
        <label>Primary Color</label>
        <input type="color" formControlName="primaryColor" />

        <label>Secondary Color</label>
        <input type="color" formControlName="secondaryColor" />
      </form>
    </div>
  `,
})
export class SettingsScene implements OnInit {
  form = new FormGroup({
    primaryColor: new FormControl<string>(null),
    secondaryColor: new FormControl<string>(null),
  });

  private readonly documentRoot = document.documentElement;

  ngOnInit() {
    console.log(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-primary')
        .trim()
    );
    this.form.patchValue(
      {
        primaryColor: getComputedStyle(this.documentRoot)
          .getPropertyValue('--color-primary')
          .trim(),
        secondaryColor: getComputedStyle(this.documentRoot)
          .getPropertyValue('--color-secondary')
          .trim(),
      },
      { emitEvent: false }
    );

    this.form.controls.primaryColor.valueChanges
      .pipe(
        filter((value) => this.isColor(value)),
        tap((value) =>
          this.documentRoot.style.setProperty('--color-primary', value)
        )
      )
      .subscribe();

    this.form.controls.secondaryColor.valueChanges
      .pipe(
        filter((value) => this.isColor(value)),
        tap((value) =>
          this.documentRoot.style.setProperty('--color-secondary', value)
        )
      )
      .subscribe();
  }

  private isColor(value: string): boolean {
    return /^#[0-9a-f]{6}$/i.test(value);
  }
}
