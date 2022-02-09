import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import {
  BehaviorSubject,
  forkJoin,
  map,
  Observable,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { UserPreferenceDocType } from '../collections/user-preferences.collection';
import { Preference } from '../models/preference';

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesState<TValue = string> {
  public readonly userPreferences$ = new BehaviorSubject<Preference<TValue>[]>(
    []
  );

  private userPreferencesRepository?: Repository<UserPreferenceDocType<TValue>>;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly entityManager: EntityManager
  ) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<UserPreferenceDocType<TValue>>(
              'userpreferences',
              'com.central-factory.settings'
            ),
          ])
        ),
        tap(([userPreferencesRepository]) => {
          this.userPreferencesRepository = userPreferencesRepository;
          this.subscribeToDataChanges();
        })
      )
      .subscribe();
  }

  public setValue(key: string, value: TValue) {
    if (!this.userPreferencesRepository) {
      return throwError(() => new Error('Repositories not initialized'));
    }

    return this.userPreferencesRepository.upsert({
      id: key,
      key,
      value,
    });
  }

  private subscribeToDataChanges() {
    if (!this.userPreferencesRepository) {
      throw new Error('Repositories not initialized');
    }
  }

  public byKey(
    key: string
  ): Observable<UserPreferenceDocType<TValue> | undefined> {
    if (!this.userPreferencesRepository) {
      throw new Error('Repositories not initialized');
    }

    return this.userPreferencesRepository
      .observeOne({
        selector: {
          key,
        },
      })
      .pipe(map((value) => (value ? value : undefined)));
  }
}
