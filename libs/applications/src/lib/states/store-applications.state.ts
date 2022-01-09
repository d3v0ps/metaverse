import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import {
  Application,
  ApplicationRenderingType,
  ColorVariation,
} from '../models/application';

@Injectable({
  providedIn: 'root',
})
export class StoreApplicationsState {
  public readonly applications$ = new BehaviorSubject<Application[]>([]);

  private readonly storeDataUrl =
    'https://raw.githubusercontent.com/central-factory/web-application-manifests/main/applications.json';

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<Application[]>(this.storeDataUrl)
      .pipe(
        tap((applications) => {
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
