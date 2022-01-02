import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { BehaviorSubject, forkJoin, switchMap, tap, throwError } from 'rxjs';
import { UserPreferenceDocType } from '../../collections/user-preferences.collection';
import { Customization } from '../../models/customization';

@Injectable({
  providedIn: 'root',
})
export class CustomizationSettingsState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public readonly customizationSettings$ = new BehaviorSubject<
    Customization | undefined
  >(undefined);

  private userPreferencesRepository?: Repository<
    UserPreferenceDocType<Customization>
  >;

  private activeThemeLinkElem?: HTMLLinkElement;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly entityManager: EntityManager
  ) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<
              UserPreferenceDocType<Customization>
            >('userpreferences', 'com.central-factory.settings'),
          ])
        ),
        tap(([userPreferencesRepository]) => {
          this.userPreferencesRepository = userPreferencesRepository;
          this.subscribeToDataChanges();
        })
      )
      .subscribe();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public setCustomizationSettings(settings: any) {
    if (!this.userPreferencesRepository) {
      return throwError(() => new Error('Repositories not initialized'));
    }

    return this.userPreferencesRepository.upsert({
      id: 'settings.customization',
      value: settings,
    });
  }

  private subscribeToDataChanges() {
    if (!this.userPreferencesRepository) {
      throw new Error('Repositories not initialized');
    }

    this.customizationSettings$
      .pipe(
        tap((customizationSettings) => {
          if (!customizationSettings) {
            return;
          }

          if (customizationSettings.theme) {
            this.loadThemeFromUrl(customizationSettings.theme.path);
          }
        })
      )
      .subscribe();

    this.userPreferencesRepository
      .observeOne({
        selector: {
          id: 'settings.customization',
        },
      })
      .pipe(
        tap((customizationSettings) => {
          this.customizationSettings$.next(customizationSettings?.value);
        })
      )
      .subscribe();
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
