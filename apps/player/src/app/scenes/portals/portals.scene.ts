import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  Application,
  ApplicationAuthor,
} from '@central-factory/applications/models/application';
import { InstallApplicationsState } from '@central-factory/applications/states/install-application.state';
import {
  ApplicationsByCategory,
  StoreApplicationsState,
} from '@central-factory/applications/states/store-applications.state';
import { UserApplicationsState } from '@central-factory/applications/states/user-applications.state';
import { catchError, forkJoin, map, of, share, switchMap } from 'rxjs';

@Component({
  selector: 'cf-applications-portals',
  template: `
    <div cfBlock="scene-content">
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
            <ng-container *ngFor="let category of categories">
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
            <ng-container *ngSwitchCase="'settings'">
              <cf-portals-preferences></cf-portals-preferences>
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
                >
                </cf-applications-carousel>
              </ng-container>
            </ng-container>
          </ng-container>
        </div>
      </div>
    </div>
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
    `,
  ],
})
export class PortalsScene {
  activeSection: 'home' | 'picks' | 'category' | 'author' | 'settings' = 'home';

  categories = [
    {
      label: 'lifestyle',
      icon: 'assets/icons/mdi/account-supervisor-circle.svg',
    },
    {
      label: 'productivity',
      icon: 'assets/icons/mdi/order-bool-ascending-variant.svg',
    },
    { label: 'books', icon: 'assets/icons/mdi/book.svg' },
    { label: 'business', icon: 'assets/icons/mdi/briefcase.svg' },
    { label: 'education', icon: 'assets/icons/mdi/school.svg' },
    { label: 'entertainment', icon: 'assets/icons/mdi/play-box.svg' },
    { label: 'tv', icon: 'assets/icons/mdi/television.svg' },
    { label: 'finance', icon: 'assets/icons/mdi/finance.svg' },
    { label: 'fitness', icon: 'assets/icons/mdi/dumbbell.svg' },
    { label: 'food', icon: 'assets/icons/mdi/food-fork-drink.svg' },
    { label: 'games', icon: 'assets/icons/mdi/google-controller.svg' },
    { label: 'government', icon: 'assets/icons/mdi/home-city.svg' },
    { label: 'health', icon: 'assets/icons/mdi/hospital-box.svg' },
    { label: 'kids', icon: 'assets/icons/mdi/account-child.svg' },
    { label: 'magazines', icon: 'assets/icons/mdi/newspaper-variant.svg' },
    { label: 'medical', icon: 'assets/icons/mdi/medical-bag.svg' },
    { label: 'music', icon: 'assets/icons/mdi/music-circle.svg' },
    { label: 'navigation', icon: 'assets/icons/mdi/navigation.svg' },
    { label: 'news', icon: 'assets/icons/mdi/newspaper-variant.svg' },
    { label: 'personalization', icon: 'assets/icons/mdi/palette.svg' },
    { label: 'photo', icon: 'assets/icons/mdi/image.svg' },
    { label: 'politics', icon: 'assets/icons/mdi/account-tie-voice.svg' },
    { label: 'security', icon: 'assets/icons/mdi/shield-account.svg' },
    { label: 'shopping', icon: 'assets/icons/mdi/basket.svg' },
    { label: 'social', icon: 'assets/icons/mdi/account-group.svg' },
    { label: 'sports', icon: 'assets/icons/mdi/basketball.svg' },
    { label: 'travel', icon: 'assets/icons/mdi/train-car.svg' },
    { label: 'utilities', icon: 'assets/icons/mdi/hammer-screwdriver.svg' },
    { label: 'weather', icon: 'assets/icons/mdi/sun-wireless.svg' },
    { label: 'devtools', icon: 'assets/icons/mdi/code-tags.svg' },
  ];

  selectedCategory = {
    label: '',
    icon: '',
  };

  selectedAuthor: ApplicationAuthor = {
    id: '',
    name: '',
  };

  applicationsByCategory$ = this.storeApplicationsState.byCategory$;

  applicationsByAuthor$ = this.storeApplicationsState.byAuthor$;
  applicationsTopAuthors$ = this.storeApplicationsState.topAuthors$.pipe(
    switchMap((authors: ApplicationAuthor[]) =>
      forkJoin(
        authors.map((author) =>
          this.httpClient
            .get(`assets/icons/simple-icons/${author.name.toLowerCase()}.svg`, {
              responseType: 'text',
            })
            .pipe(catchError(() => of(undefined)))
            .pipe(
              map((found: unknown) => {
                return {
                  ...author,
                  icon: found
                    ? `assets/icons/simple-icons/${author.name.toLowerCase()}.svg`
                    : undefined,
                };
              }),
              // use legacy names
              map((author) => {
                switch (author.id) {
                  case 'com.alphabet':
                    author.icon = 'assets/icons/simple-icons/google.svg';
                    return author;
                  case 'com.meta':
                    author.icon = 'assets/icons/simple-icons/facebook.svg';
                    return author;
                  default:
                    return author;
                }
              })
            )
        )
      )
    ),
    share()
  );
  installedApplications$ = this.userApplicationsState.applications$;

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
    this.installApplicationsState.install(application);
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
}
