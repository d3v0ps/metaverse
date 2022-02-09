import { Component, Input } from '@angular/core';
import {
  Application,
  ApplicationShortcut,
} from '@central-factory/applications/models/application';
import { Topic } from '@central-factory/applications/models/topic';
import { ApplicationShortcutView } from '@central-factory/applications/web-components/angular/application-shortcut/application-shortcut.component';

export type ApplicationWithShortcut = {
  application: Application;
  shortcut: ApplicationShortcut;
};

@Component({
  selector: 'cf-start-topic',
  template: `
    <div cfBlock="topic-card">
      <div
        cfBlock="topic-background"
        *ngIf="topic && showTopic"
        [ngStyle]="{
          'background-size': 'cover',
          'background-blend-mode': 'saturation',
          background: topic.background
            ? 'rgba(0, 0, 0, 0.4) url(' + topic.background + ')'
            : ''
        }"
      ></div>
      <div cfBlock="topic-body" *ngIf="topic && showTopic">
        <h2
          cfBlock="heading"
          [cfMod]="[topic.background ? topic.themeColor || 'light' : 'dark']"
        >
          <cf-svg-icon
            *ngIf="topic.icon"
            [src]="topic.icon"
            cfElem="icon"
          ></cf-svg-icon>
          {{ topic.title }}
        </h2>
        <div cfBlock="topic-content">
          <cf-applications-carousel
            [showInfo]="false"
            [outline]="true"
            [shadow]="false"
            [showPlayButton]="false"
            [showUninstallButton]="false"
            [showDescription]="false"
            [applications]="topicApplications"
            [installedApplications]="topicApplications"
            [cardStyle]="{
              width: '100%'
            }"
            (applicationCardClick)="onApplicationCardClick($event)"
          ></cf-applications-carousel>
          <div
            cfBlock="topic-content"
            style="
              width: 80%; margin: 0 auto;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              gap: 1rem;
            "
          >
            <ng-container *ngFor="let shortcut of shortcuts">
              <cf-application-shortcut
                theme="application"
                [shortcut]="shortcut.shortcut"
                [application]="shortcut.application"
                (shortcutClick)="onShortcutClick($event)"
              ></cf-application-shortcut>
            </ng-container>
          </div>
          <div
            cfBlock="topic-content"
            style="
              width: 80%;
              margin: 1rem auto;
              display: flex;
              flex-direction: row;
              gap: 1rem;
            "
          >
            <ng-container *ngFor="let media of topic.media">
              <cf-media [media]="media"></cf-media>
            </ng-container>
          </div>
          <div
            cfBlock="topic-content"
            style="
                width: 80%; margin: 2rem auto;"
          >
            <button
              cfBlock="button"
              (click)="showCategories = !showCategories"
              [ngStyle]="{
                margin: '0 auto'
              }"
            >
              <cf-svg-icon
                [src]="'assets/icons/mdi/web-box.svg'"
                cfElem="icon"
              ></cf-svg-icon>
              <span cfBlock="label">
                {{ showCategories ? 'Hide' : 'Show' }} more Applications
              </span>
            </button>
            <div
              *ngIf="showCategories"
              style="margin-top: 2rem; max-height: 200px; overflow: auto"
            >
              <div
                *ngFor="let item of byCategory | keyvalue"
                cfBlock="topic-category"
              >
                <h3 cfBlock="heading">
                  {{ item.key | titlecase }}
                </h3>
                <cf-applications-carousel
                  [outline]="true"
                  [shadow]="false"
                  [showDescription]="false"
                  [showPlayButton]="false"
                  [showUninstallButton]="false"
                  [applications]="item.value"
                  [installedApplications]="item.value"
                  [cardStyle]="{
                    width: '100%'
                  }"
                  (applicationCardClick)="onApplicationCardClick($event)"
                ></cf-applications-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class TopicCardComponent {
  @Input() set currentDate(date: Date) {
    this._currentDate = date;

    this.topic = this._topic;
  }
  get currentDate(): Date {
    return this._currentDate;
  }

  @Input() set topic(value: Topic | undefined) {
    this._topic = value;

    if (!value || !value.triggers) {
      return;
    }

    const currentDate = this.currentDate || new Date();

    this.showTopic = value.triggers.reduce<boolean>((acc, trigger) => {
      const startTime = trigger.rules?.startTime
        ? trigger.rules?.startTime
        : '00:00';
      const [startHour, startMinute] = startTime.split(':');
      const startDate = new Date(
        new Date(currentDate).setHours(startHour, startMinute)
      );

      const greaterThanStartDate =
        startDate.getTime() <= new Date(currentDate).getTime();

      if (!greaterThanStartDate) {
        return acc;
      }

      const endTime = trigger.rules?.endTime ? trigger.rules?.endTime : '00:00';
      const [endHour, endMinute] = endTime.split(':');
      const endDate = new Date(
        new Date(currentDate).setHours(endHour, endMinute)
      );

      const smallerThanEndDate =
        endDate.getTime() > new Date(currentDate).getTime();

      return acc || smallerThanEndDate;
    }, false);
  }
  get topic(): Topic | undefined {
    return this._topic;
  }

  @Input() set applications(value: Application[] | null | undefined) {
    value = value || [];

    const allApplications = value || [];
    const applications = this.topic?.applications || [];
    const shortcuts = this.topic?.shortcuts || [];

    this.topic?.applications;

    this.topicApplications = applications
      .map((application) => value?.find((app) => app.id === application))
      .filter((app) => (app ? true : false)) as Application[];

    this.shortcuts = shortcuts
      .map((shortcutId) =>
        allApplications.reduce<ApplicationWithShortcut | undefined>(
          (result, application) => {
            if (result) {
              return result;
            }

            const [appId, shortcutName] = shortcutId.split('#');

            if (appId !== application.id) {
              return undefined;
            }

            const appShortcuts = application.shortcuts || [];

            const shortcut = appShortcuts.find(
              (s) => s.name.replace(/\s/g, '').replace("'", '') === shortcutName
            );

            if (!shortcut) {
              return undefined;
            }

            return {
              application,
              shortcut,
            };
          },
          undefined
        )
      )
      .filter((shortcuts) =>
        shortcuts ? true : false
      ) as ApplicationWithShortcut[];

    const categories: string[] = this.topic?.categories || [];

    this.byCategory = categories.reduce((result, category) => {
      const applications =
        value?.filter((application) =>
          application.categories?.includes(category)
        ) || [];

      return Object.assign(result, { [category]: applications });
    }, {});

    this._applications = value;
  }

  public topicApplications: Application[] = [];
  public shortcuts: ApplicationWithShortcut[] = [];
  public byCategory: Record<string, Application[]> = {};
  public showTopic = true;
  public showCategories = false;

  private _applications: Application[] = [];
  private _topic: Topic | undefined;
  private _currentDate: Date = new Date();

  onApplicationCardClick(application: Application) {
    window.open(application.startUrl, '__blank');
  }

  onShortcutClick(shortcut: ApplicationShortcutView) {
    window.open(shortcut.url, '__blank');
  }
}
