import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { InstallApplicationsState } from '@central-factory/applications/states/install-application.state';
import {
  ApplicationsByCategory,
  StoreApplicationsState,
} from '@central-factory/applications/states/store-applications.state';
import { UserApplicationsState } from '@central-factory/applications/states/user-applications.state';
import {
  Application,
  ApplicationAuthor,
} from '@central-factory/applications/__generated__/models';
import { WindowComponent } from '@central-factory/web-components/angular/window/window.component';
import { catchError, forkJoin, map, of, share, switchMap } from 'rxjs';

@Component({
  selector: 'cf-applications-portals',
  template: `
    <div cfBlock="scene-content" cfMod="portals">
      <div cfBlock="store">
        <div cfElem="nav">
          <ul cfBlock="nav">
            <li>
              <button
                cfBlock="button"
                [cfMod]="{
                  'has-icon': true,
                  'full-width': true,
                  primary: activeSection === 'home'
                }"
                (click)="onHomeClick()"
              >
                <cf-svg-icon
                  elem="icon"
                  [src]="'assets/icons/mdi/home.svg'"
                ></cf-svg-icon>
                Home
              </button>
            </li>
          </ul>
          <ul cfBlock="nav">
            <li>
              <button
                cfBlock="button"
                [cfMod]="{
                  'has-icon': true,
                  'full-width': true,
                  primary: activeSection === 'featured'
                }"
                (click)="onFeaturedClick()"
              >
                <cf-svg-icon
                  elem="icon"
                  [src]="'assets/icons/mdi/star.svg'"
                ></cf-svg-icon>
                Featured
              </button>
            </li>
          </ul>
          <ul cfBlock="nav">
            <li>
              <button
                cfBlock="button"
                [cfMod]="{
                  'has-icon': true,
                  'full-width': true,
                  primary: activeSection === 'picks'
                }"
                (click)="onHomeClick()"
              >
                <cf-svg-icon
                  elem="icon"
                  [src]="'assets/icons/mdi/check-decagram.svg'"
                ></cf-svg-icon>
                Editor's Picks
              </button>
            </li>
          </ul>
          <ul cfBlock="nav">
            <li>
              <button
                cfBlock="button"
                [cfMod]="{
                  'has-icon': true,
                  'full-width': true,
                  primary: activeSection === 'installed'
                }"
                (click)="onInstalledClick()"
              >
                <cf-svg-icon
                  elem="icon"
                  [src]="'assets/icons/mdi/apps.svg'"
                ></cf-svg-icon>
                Installed
              </button>
            </li>
          </ul>
          <ul cfBlock="nav">
            <li>
              <button
                cfBlock="button"
                [cfMod]="{
                  'has-icon': true,
                  'full-width': true,
                  primary: activeSection === 'settings'
                }"
                (click)="onSettingsClick()"
              >
                <cf-svg-icon
                  elem="icon"
                  [src]="'assets/icons/mdi/store-cog.svg'"
                ></cf-svg-icon>
                Settings
              </button>
            </li>
          </ul>
          <h2>Top Publishers</h2>
          <ul cfBlock="nav" cfMod="grid">
            <li *ngFor="let author of applicationsTopAuthors$ | async">
              <button
                cfBlock="button"
                [cfMod]="['has-icon']"
                [cfMod]="{
                  primary:
                    activeSection === 'author' &&
                    author.id === selectedAuthor.id
                }"
                (click)="onAuthorClick(author)"
              >
                <cf-svg-icon
                  *ngIf="author.icon"
                  elem="icon"
                  [src]="author.icon"
                ></cf-svg-icon>
                {{ author.name | titlecase }}
                <ng-container *ngIf="applicationsByAuthor$ | async as byAuthor">
                  ({{ byAuthor[author.id].length }})
                </ng-container>
              </button>
            </li>
          </ul>
          <h2>Categories</h2>
          <ul cfBlock="nav" cfMod="grid">
            <ng-container *ngFor="let category of categories$ | async">
              <ng-container
                *ngIf="applicationsByCategory$ | async as byCategory"
              >
                <li
                  *ngIf="
                    byCategory[category.label] &&
                    byCategory[category.label].length > 0
                  "
                >
                  <button
                    cfBlock="button"
                    [cfMod]="['has-icon']"
                    [cfMod]="{
                      primary:
                        activeSection === 'category' &&
                        category.label === selectedCategory.label
                    }"
                    (click)="onCategoryClick(category)"
                  >
                    <cf-svg-icon
                      elem="icon"
                      [src]="category.icon"
                    ></cf-svg-icon>
                    {{ category.label | titlecase }}
                    ({{ byCategory[category.label]?.length }})
                  </button>
                </li>
              </ng-container>
            </ng-container>
          </ul>
        </div>
        <div
          cfElem="content"
          *ngIf="{
            byCategory: applicationsByCategory$ | async,
            byAuthor: applicationsByAuthor$ | async
          } as data"
        >
          <ng-container [ngSwitch]="activeSection">
            <ng-container *ngSwitchCase="'home'">
              <cf-start></cf-start>
            </ng-container>
            <ng-container *ngSwitchCase="'featured'">
              <div cfBlock="portals-featured">
                <h2 cfBlock="heading">Featured</h2>
                <cf-applications-carousel
                  *ngIf="
                    installedApplications$ | async as installedApplications
                  "
                  [outline]="true"
                  [installableApplications]="installedApplications"
                  [installedApplications]="installedApplications || []"
                  [applications]="installedApplications"
                  (applicationInstallClick)="onInstallApplicationClick($event)"
                  (applicationUninstallClick)="
                    onUninstallApplicationClick($event)
                  "
                >
                </cf-applications-carousel>
              </div>
            </ng-container>
            <ng-container *ngSwitchCase="'hot'"> </ng-container>
            <ng-container *ngSwitchCase="'settings'">
              <cf-portals-preferences></cf-portals-preferences>
            </ng-container>
            <ng-container *ngSwitchCase="'installed'">
              <div cfBlock="portals-installed">
                <h2 cfBlock="heading">Installed</h2>
                <cf-applications-carousel
                  *ngIf="
                    installedApplications$ | async as installedApplications
                  "
                  [outline]="true"
                  [installableApplications]="installedApplications"
                  [installedApplications]="installedApplications || []"
                  [applications]="installedApplications"
                  (applicationInstallClick)="onInstallApplicationClick($event)"
                  (applicationUninstallClick)="
                    onUninstallApplicationClick($event)
                  "
                >
                </cf-applications-carousel>
              </div>
            </ng-container>
            <ng-container *ngSwitchCase="'author'">
              <h2 cfBlock="text" cfMod="light" *ngIf="selectedAuthor">
                <cf-svg-icon
                  *ngIf="selectedAuthor.icon"
                  cfElem="icon"
                  [src]="selectedAuthor.icon"
                ></cf-svg-icon>
                {{ selectedAuthor.name | titlecase }}
              </h2>

              <ng-container
                *ngIf="!data.byAuthor || !data.byAuthor[selectedAuthor.id]"
              >
                <p>
                  No applications found for author
                  <strong class="text--primary">{{
                    selectedAuthor.name | titlecase
                  }}</strong
                  >.
                </p>
              </ng-container>
              <ng-container
                *ngIf="
                  selectedAuthor &&
                  data.byAuthor &&
                  data.byAuthor[selectedAuthor.id]
                "
              >
                <cf-applications-carousel
                  *ngIf="
                    installedApplications$ | async as installedApplications
                  "
                  [outline]="true"
                  [installableApplications]="
                    data.byAuthor && data.byAuthor[selectedAuthor.id]
                  "
                  [installedApplications]="installedApplications || []"
                  [applications]="data.byAuthor[selectedAuthor.id]"
                  (applicationInstallClick)="onInstallApplicationClick($event)"
                  (applicationUninstallClick)="
                    onUninstallApplicationClick($event)
                  "
                >
                </cf-applications-carousel>
              </ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="'category'">
              <h2 cfBlock="text" cfMod="light" *ngIf="selectedCategory">
                <cf-svg-icon
                  cfElem="icon"
                  [src]="selectedCategory.icon"
                ></cf-svg-icon>
                {{ selectedCategory.label | titlecase }}
              </h2>
              <ng-container
                *ngIf="
                  !data.byCategory || !data.byCategory[selectedCategory.label]
                "
              >
                <p>
                  No applications found for category
                  <strong class="text--primary">{{
                    selectedCategory.label | titlecase
                  }}</strong
                  >.
                </p>
              </ng-container>
              <ng-container
                *ngIf="
                  selectedCategory &&
                  data.byCategory &&
                  data.byCategory[selectedCategory.label]
                "
              >
                <cf-applications-carousel
                  *ngIf="
                    installedApplications$ | async as installedApplications
                  "
                  [outline]="true"
                  [installableApplications]="
                    data.byCategory[selectedCategory.label]
                  "
                  [installedApplications]="installedApplications || []"
                  [applications]="data.byCategory[selectedCategory.label]"
                  (applicationInstallClick)="onInstallApplicationClick($event)"
                  (applicationUninstallClick)="
                    onUninstallApplicationClick($event)
                  "
                >
                </cf-applications-carousel>
              </ng-container>
            </ng-container>
          </ng-container>
        </div>
      </div>
    </div>

    <cf-window #installApplicationWindow [maximizable]="false">
      <ng-container class="window-header__content"
        >Install {{ selectedApplication?.name || 'Application' }}</ng-container
      >
      <ng-container class="window-body__content">
        <div cfBlock="window-content">
          <cf-application-card
            [application]="selectedApplication"
            [showFooter]="false"
            [outline]="true"
          ></cf-application-card>
          <cf-application-permissions
            [permissions]="
              selectedApplication?.additionalProperties?.permissions || []
            "
          ></cf-application-permissions>
        </div>
      </ng-container>
      <ng-container
        class="window-footer__content"
        *ngIf="installedApplications$ | async as installedApplications"
      >
        <button
          cfBlock="button"
          [cfMod]="['primary', 'has-icon']"
          (click)="onConfirmInstallApplicationClick(selectedApplication)"
          *ngIf="
            selectedApplication &&
            !installingApplications[selectedApplication.id] &&
            !findById(selectedApplication, installedApplications)
          "
        >
          <cf-svg-icon
            cfElem="icon"
            src="assets/icons/mdi/check.svg"
          ></cf-svg-icon>
          I'm ready!
        </button>
        <button
          cfBlock="button"
          [cfMod]="['success', 'has-icon']"
          (click)="installApplicationWindow?.hide()"
          *ngIf="
            selectedApplication &&
            !installingApplications[selectedApplication.id] &&
            findById(selectedApplication, installedApplications)
          "
        >
          <cf-svg-icon
            cfElem="icon"
            src="assets/icons/mdi/check.svg"
          ></cf-svg-icon>
          Done
        </button>
        <button
          cfBlock="button"
          [cfMod]="['primary', 'has-icon']"
          disabled
          *ngIf="
            selectedApplication &&
            installingApplications[selectedApplication.id]
          "
        >
          <cf-spinner size="1x"></cf-spinner>
          Installing...
        </button>
      </ng-container>
    </cf-window>

    <cf-window #uninstallApplicationWindow [maximizable]="false">
      <ng-container class="window-header__content"
        >Uninstall
        {{ selectedApplication?.name || 'Application' }}</ng-container
      >
      <ng-container class="window-body__content">
        <div cfBlock="window-content">
          <cf-application-card
            [application]="selectedApplication"
            [showFooter]="false"
            [outline]="true"
          ></cf-application-card>
        </div>
      </ng-container>
      <ng-container
        class="window-footer__content"
        *ngIf="installedApplications$ | async as installedApplications"
      >
        <button
          cfBlock="button"
          [cfMod]="['danger', 'has-icon']"
          (click)="onConfirmUninstallApplicationClick(selectedApplication)"
          *ngIf="
            selectedApplication &&
            !uninstallingApplications[selectedApplication.id] &&
            findById(selectedApplication, installedApplications)
          "
        >
          <cf-svg-icon
            cfElem="icon"
            src="assets/icons/mdi/check.svg"
          ></cf-svg-icon>
          Bye!
        </button>
        <button
          cfBlock="button"
          [cfMod]="['success', 'has-icon']"
          (click)="uninstallApplicationWindow?.hide()"
          *ngIf="
            selectedApplication &&
            !uninstallingApplications[selectedApplication.id] &&
            !findById(selectedApplication, installedApplications)
          "
        >
          <cf-svg-icon
            cfElem="icon"
            src="assets/icons/mdi/check.svg"
          ></cf-svg-icon>
          Done
        </button>
        <button
          cfBlock="button"
          cfMod="danger"
          disabled
          *ngIf="
            selectedApplication &&
            uninstallingApplications[selectedApplication.id]
          "
        >
          <cf-spinner size="1x"></cf-spinner>
          Uninstalling...
        </button>
      </ng-container>
    </cf-window>
  `,
  styles: [
    `
      .store {
        display: grid;
        grid-template-columns: auto 1fr;
        height: 100%;
        gap: 1rem;

        &__content {
          height: calc(100vh - 100px);
          overflow: auto;
        }

        &__nav {
          height: calc(100vh - 100px);
          overflow: auto;
          width: 100%;
          padding-right: 1rem;
        }
      }

      .nav {
        li {
          padding: 0.2rem;
        }

        &--grid {
          display: grid;
          flex-wrap: wrap;
          grid-template-columns: auto auto;
        }
      }

      .window-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    `,
  ],
})
export class PortalsScene {
  @ViewChild('installApplicationWindow', { static: true })
  installApplicationWindow?: WindowComponent;
  @ViewChild('uninstallApplicationWindow', { static: true })
  uninstallApplicationWindow?: WindowComponent;

  installingApplications: Record<string, boolean> = {};
  uninstallingApplications: Record<string, boolean> = {};

  activeSection:
    | 'home'
    | 'featured'
    | 'hot'
    | 'picks'
    | 'category'
    | 'author'
    | 'installed'
    | 'settings' = 'home';

  selectedCategory = {
    label: '',
    icon: '',
  };

  selectedAuthor: ApplicationAuthor = {
    id: '',
    name: '',
  };

  selectedApplication?: Application;

  categories$ = this.storeApplicationsState.categories$;

  featuredApplications$ = this.storeApplicationsState.featured$;
  applicationsByCategory$ = this.storeApplicationsState.byCategory$;

  applicationsByAuthor$ = this.storeApplicationsState.byAuthor$;
  applicationsTopAuthors$ = this.storeApplicationsState.topAuthors$.pipe(
    // use legacy names
    switchMap((authors: ApplicationAuthor[]) =>
      forkJoin(
        authors
          .map((author) => {
            author.icon =
              this.publishersIcons[author.id] ||
              `assets/icons/simple-icons/${author.name.toLowerCase()}.svg`;
            return author;
          })
          .map((author) =>
            this.httpClient
              .get(author.icon as string, {
                responseType: 'text',
              })
              .pipe(catchError(() => of(undefined)))
              .pipe(
                map((found: unknown) => {
                  return {
                    ...author,
                    icon: found
                      ? author.icon
                      : 'assets/icons/mdi/application.svg',
                  };
                })
              )
          )
      )
    ),
    share()
  );
  installedApplications$ = this.userApplicationsState.applications$;

  private publishersIcons: Record<string, string> = {
    'com.alphabet': 'assets/icons/simple-icons/google.svg',
    'com.meta': 'assets/icons/simple-icons/facebook.svg',
  };

  constructor(
    private storeApplicationsState: StoreApplicationsState,
    private userApplicationsState: UserApplicationsState,
    private installApplicationsState: InstallApplicationsState,
    private httpClient: HttpClient
  ) {}

  getInstallableApplicationsByCategory(
    applications: ApplicationsByCategory,
    category: { label: string; icon: string }
  ) {
    return applications[category.label] || [];
  }

  onInstallApplicationClick(application: Application) {
    this.selectedApplication = application;
    this.installApplicationWindow?.show();
  }

  onConfirmInstallApplicationClick(application?: Application) {
    if (!application || this.installingApplications[application.id]) {
      return;
    }

    this.installingApplications[application.id] = true;
    setTimeout(() => {
      this.installApplicationsState.install(application);
      delete this.installingApplications[application.id];
    }, 1000);
  }

  onUninstallApplicationClick(application: Application) {
    this.installApplicationWindow?.hide();

    this.selectedApplication = application;
    this.uninstallApplicationWindow?.show();
  }

  onConfirmUninstallApplicationClick(application?: Application) {
    if (!application || this.uninstallingApplications[application.id]) {
      return;
    }

    this.uninstallingApplications[application.id] = true;
    setTimeout(() => {
      this.installApplicationsState.uninstall(application);
      delete this.uninstallingApplications[application.id];
    }, 1000);
  }

  onHomeClick() {
    this.selectedCategory = {
      label: '',
      icon: '',
    };
    this.selectedAuthor = {
      id: '',
      name: '',
    };

    this.activeSection = 'home';
  }

  onHotClick() {
    this.selectedCategory = {
      label: '',
      icon: '',
    };
    this.selectedAuthor = {
      id: '',
      name: '',
    };

    this.activeSection = 'hot';
  }

  onFeaturedClick() {
    this.selectedCategory = {
      label: '',
      icon: '',
    };
    this.selectedAuthor = {
      id: '',
      name: '',
    };

    this.activeSection = 'featured';
  }

  onInstalledClick() {
    this.selectedCategory = {
      label: '',
      icon: '',
    };
    this.selectedAuthor = {
      id: '',
      name: '',
    };

    this.activeSection = 'installed';
  }

  onSettingsClick() {
    this.selectedCategory = {
      label: '',
      icon: '',
    };
    this.selectedAuthor = {
      id: '',
      name: '',
    };

    this.activeSection = 'settings';
  }

  onAuthorClick(author: ApplicationAuthor) {
    this.selectedCategory = {
      label: '',
      icon: '',
    };

    this.selectedAuthor = author;
    this.activeSection = 'author';
  }

  onCategoryClick(category: { label: string; icon: string }) {
    this.selectedAuthor = {
      id: '',
      name: '',
    };

    this.selectedCategory = category;
    this.activeSection = 'category';
  }

  findById(item: { id: string }, arr: { id: string }[]) {
    return arr.find((i) => i.id === item.id);
  }
}
