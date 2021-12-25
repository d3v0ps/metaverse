import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const mockData = {
  name: 'Default',
  path: 'assets/themes/default/variables.css',
};

@Injectable({
  providedIn: 'root',
})
export class SelectedThemeState {
  theme$ = new BehaviorSubject<any | undefined>(
    localStorage.getItem('settings.selectedTheme')
      ? JSON.parse(localStorage.getItem('settings.selectedTheme') as string)
      : mockData
  );

  private activeThemeLinkElem?: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const theme = this.theme$.getValue();
    this.loadThemeFromUrl(theme.path);
  }

  selectTheme(theme: any) {
    this.loadThemeFromUrl(theme.path);
    localStorage.setItem('settings.selectedTheme', JSON.stringify(theme));
    this.theme$.next(theme);
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
