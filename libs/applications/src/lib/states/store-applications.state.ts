import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/entity-manager';
import { UserPreferencesState } from '@central-factory/preferences/states/user-preferences.state';
import { BehaviorSubject, forkJoin, Observable, of, tap } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';
import {
  Application,
  ApplicationAdditionalProperties,
  ApplicationRenderingType,
  ColorVariation,
} from '../__generated__/models';

export type ApplicationsByCategory = Record<string, Application[]>;
export type ApplicationsByAuthor = Record<string, Application[]>;

export type Category = { label: string; icon: string };

@Injectable({
  providedIn: 'root',
})
export class StoreApplicationsState {
  public readonly categories$ = new BehaviorSubject<Category[]>([]);
  public readonly applications$ = new BehaviorSubject<Application[]>([]);
  public readonly featured$ = this.applications$.pipe(share());

  public readonly hot$ = this.applications$.pipe(share());

  public readonly byCategory$: Observable<ApplicationsByCategory> =
    this.applications$.pipe(
      map((applications) =>
        applications.reduce<ApplicationsByCategory>((acc, application) => {
          const categories = application.categories;

          if (!categories || !categories.length) {
            return acc;
          }

          categories.forEach((category) => {
            if (!acc[category]) {
              acc[category] = [];
            }
            acc[category].push(application);
          });

          return acc;
        }, {})
      )
      // share()
    );

  public readonly byAuthor$: Observable<ApplicationsByAuthor> =
    this.applications$.pipe(
      map((applications) =>
        applications.reduce<ApplicationsByAuthor>((acc, application) => {
          const author = application.additionalProperties?.author;

          if (!author) {
            return acc;
          }

          acc[author.id] = acc[author.id] || [];

          acc[author.id].push(application);

          return acc;
        }, {})
      )
    );

  public readonly topAuthors$: Observable<
    ApplicationAdditionalProperties['author'][]
  > = this.byAuthor$.pipe(
    map((byAuthor) => {
      const topAuthors = Object.keys(byAuthor)
        .sort((a, b) => {
          return byAuthor[b].length - byAuthor[a].length;
        })
        .filter((authorId) => byAuthor[authorId].length > 2)
        .map(
          (authorId) =>
            byAuthor[authorId][0].additionalProperties
              ?.author as ApplicationAdditionalProperties['author']
        );

      return topAuthors.slice(0, 5);
    })
  );

  constructor(
    private httpClient: HttpClient,
    private userPreferencesState: UserPreferencesState<
      { label: string; url: string }[]
    >,
    private entityManager: EntityManager
  ) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          this.userPreferencesState.byKey('store.settings.repositories')
        ),
        map((preference) => preference?.value || []),
        switchMap((repositories) => {
          if (!repositories) {
            return of([]);
          }

          const categories$ = forkJoin(
            repositories.map((repository) =>
              this.httpClient.get<Category[]>(
                `${repository.url}/categories.json`
              )
            )
          ).pipe(
            map((categories) =>
              categories.reduce(
                (acc, current) => acc.concat(current),
                [] as Category[]
              )
            )
          );

          const applications$ = forkJoin(
            repositories.map((repository) =>
              this.httpClient.get<Application[]>(
                `${repository.url}/applications.json`
              )
            )
          ).pipe(
            map((applications) =>
              applications.reduce(
                (acc, current) => acc.concat(current),
                [] as Application[]
              )
            )
          );

          return forkJoin([categories$, applications$]);
        }),
        tap(([categories, applications]) => {
          this.categories$.next(categories);

          this.applications$.next(
            applications.map((application) => {
              const primaryColor: string | undefined =
                this.getPrimaryColor(application);
              const primaryColorProperty = {
                color: primaryColor || '#000000',
                variation: ColorVariation.Primary,
              };

              return {
                ...application,
                createdAt: application.createdAt || new Date().toISOString(),
                updatedAt: application.updatedAt || new Date().toISOString(),
                additionalProperties: {
                  ...application.additionalProperties,
                  author: application.additionalProperties?.author || {
                    id: application.id,
                    name: application.name,
                  },
                  renderingType:
                    application.additionalProperties?.renderingType ||
                    ApplicationRenderingType.Webview,
                  supportsBrowser:
                    application.additionalProperties?.supportsBrowser || false,
                  internal: false,
                  permissions:
                    application.additionalProperties?.permissions || [],
                  defaultShortcut:
                    application.additionalProperties?.defaultShortcut ||
                    (application.shortcuts
                      ? application.shortcuts[0].name
                      : undefined),
                  sidebarShortcuts:
                    application.additionalProperties?.sidebarShortcuts ||
                    (application.shortcuts
                      ? [application.shortcuts[0].name]
                      : []),
                  colors: application.additionalProperties?.colors || [
                    primaryColorProperty,
                  ],
                },
              };
            })
          );
        })
      )
      .subscribe();
  }

  private getPrimaryColor(application: Application): string | undefined {
    const hasColors =
      application.additionalProperties?.colors &&
      application.additionalProperties?.colors.length > 0;

    if (hasColors) {
      const primaryColor = application.additionalProperties?.colors?.find(
        (c) => c.variation === ColorVariation.Primary
      );

      if (primaryColor) {
        return primaryColor?.color;
      }
    }

    return application.themeColor || application.backgroundColor;
  }
}
