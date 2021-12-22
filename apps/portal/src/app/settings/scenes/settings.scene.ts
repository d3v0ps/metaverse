import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'cf-settings',
  template: `
    <div cfBlock="scene-content">
      Settings

      <form [formGroup]="form">
        <!-- label>Primary Color</label>
        <input type="color" formControlName="primaryColor" />

        <label>Secondary Color</label>
        <input type="color" formControlName="secondaryColor" / -->

        <label>Theme</label>
        <select formControlName="theme">
          <option>Choose a Theme</option>
          <option *ngFor="let theme of themes" [ngValue]="theme.path">
            {{ theme.name }}
          </option>
        </select>

        <!-- input type="file" / -->
      </form>
    </div>
  `,
})
export class SettingsScene implements OnInit {
  form = new FormGroup({
    theme: new FormControl('assets/themes/default/variables.css'),
    // primaryColor: new FormControl<string>(null),
    // secondaryColor: new FormControl<string>(null),
  });

  themes = [
    {
      name: 'Default',
      path: 'assets/themes/default/variables.css',
    },
    {
      name: 'Matrix',
      path: 'assets/themes/matrix/variables.css',
    },
  ];

  private activeThemeLinkElem?: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.form.controls.theme.valueChanges
      .pipe(tap((themeUrl) => this.loadThemeFromUrl(themeUrl)))
      .subscribe();
  }

  private loadThemeFromUrl(url: string) {
    const headElem = this.document.getElementsByTagName('head')[0];

    const newThemeLinkElem = this.document.createElement('link');
    newThemeLinkElem.rel = 'stylesheet';
    newThemeLinkElem.href = url;

    headElem.appendChild(newThemeLinkElem);

    if (this.activeThemeLinkElem) {
      headElem.removeChild(this.activeThemeLinkElem);
    }

    this.activeThemeLinkElem = newThemeLinkElem;
  }
}
