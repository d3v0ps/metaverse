import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const mockData = {
  theme: {
    name: 'Default',
    path: 'assets/themes/default/variables.css',
  },
  showSplashScreen: true,
  playSounds: true,
};

@Injectable({
  providedIn: 'root',
})
export class CustomizationSettingsState {
  customizationSettings$ = new BehaviorSubject<any | undefined>(
    localStorage.getItem('settings.customization')
      ? JSON.parse(localStorage.getItem('settings.customization') as string)
      : mockData
  );

  private activeThemeLinkElem?: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const customizationSettings = this.customizationSettings$.getValue();

    if (customizationSettings.theme) {
      this.loadThemeFromUrl(customizationSettings.theme.path);
    }
  }

  setCustomizationSettings(settings: any) {
    localStorage.setItem('settings.customization', JSON.stringify(settings));
    this.customizationSettings$.next(settings);

    this.loadThemeFromUrl(settings.theme.path);
  }

  private loadThemeFromUrl(url: string) {
    const themeAlreadyLoaded =
      this.activeThemeLinkElem && this.activeThemeLinkElem?.href.endsWith(url);

    if (themeAlreadyLoaded) {
      return;
    }

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
