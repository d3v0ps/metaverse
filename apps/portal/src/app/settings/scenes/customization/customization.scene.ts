import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'cf-customization',
  template: `
    <div>
      <h4>Customization</h4>

      <form [formGroup]="form">
        <table>
          <tr>
            <td>
              <label> Theme </label>
            </td>
            <td>
              <ng-select formControlName="theme">
                <ng-option *ngFor="let theme of themes" [value]="theme.path">
                  {{ theme.name }}
                </ng-option>
              </ng-select>
            </td>
          </tr>
        </table>
      </form>
    </div>
  `,
  styles: [
    `
      h4 {
        margin-block-start: 0;
      }

      table {
        width: 100%;
      }
    `,
  ],
})
export class CustomizationScene implements OnInit {
  form = new FormGroup({
    theme: new FormControl('assets/themes/default/variables.css'),
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
