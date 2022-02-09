import { Component, Input } from '@angular/core';
import {
  Application,
  ApplicationShortcut,
} from '@central-factory/applications/models/application';
import { Topic } from '@central-factory/applications/models/topic';

@Component({
  selector: 'cf-start-topic',
  template: `
    <div cfBlock="topic-card" *ngIf="topic && showTopic">
      <h2 cfBlock="heading" cfMod="primary">
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
              [shortcut]="shortcut.shortcut"
              [application]="shortcut.application"
            ></cf-application-shortcut>
          </ng-container>
        </div>
        <div
          cfBlock="topic-content"
          style="
              width: 80%; margin: 2rem auto;"
        >
          <button
            cfBlock="button"
            [cfMod]="['primary', 'full-width']"
            (click)="showCategories = !showCategories"
          >
            <cf-svg-icon
              [src]="'assets/icons/mdi/web-box.svg'"
              cfElem="icon"
            ></cf-svg-icon>
            <span cfBlock="label">
              {{ showCategories ? 'Hide' : 'Show' }} more Applications
            </span>
          </button>
          <div *ngIf="showCategories" style="margin-top: 2rem">
            <div
              *ngFor="let item of byCategory | keyvalue"
              cfBlock="topic-category"
            >
              <h3 cfBlock="heading" cfMod="primary">
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
              ></cf-applications-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use 'web-components/abstracts/mixins/materials' as materials;

      .topic-card {
        @include materials.clay;
        margin-bottom: 2rem;
        padding: 1rem;
      }
    `,
  ],
})
export class StartTopicComponent {
  @Input() set topic(value: Topic | undefined) {
    this._topic = value;

    if (!value || !value.triggers) {
      return;
    }

    this.showTopic = value.triggers.reduce<boolean>((acc, trigger) => {
      const startTime = trigger.rules?.startTime
        ? trigger.rules?.startTime
        : '00:00';
      const [startHour, startMinute] = startTime.split(':');
      const startDate = new Date(new Date().setHours(startHour, startMinute));

      const greaterThanStartDate = startDate.getTime() <= new Date().getTime();

      if (!greaterThanStartDate) {
        return acc;
      }

      const endTime = trigger.rules?.startTime
        ? trigger.rules?.startTime
        : '00:00';
      const [endHour, endMinute] = endTime.split(':');
      const endDate = new Date(new Date().setHours(endHour, endMinute));

      const smallerThanEndDate = endDate.getTime() <= new Date().getTime();

      return acc || smallerThanEndDate;
    }, false);
  }
  get topic(): Topic | undefined {
    return this._topic;
  }

  @Input() set applications(value: Application[] | null | undefined) {
    value = value || [];

    this.topicApplications = value.filter((application) =>
      this.topic?.applications?.includes(application.id)
    );

    this.shortcuts = value.reduce(
      (result, application) =>
        result.concat(
          (application.shortcuts || [])
            .filter((shortcut) => {
              const shortcutWithoutSpaces = shortcut.name.replace(/\s/g, '');
              return (this.topic?.shortcuts || []).some((topicShortcut) => {
                const [appId, shortcutId] = topicShortcut.split('#');
                return (
                  application.id === appId &&
                  shortcutWithoutSpaces === shortcutId
                );
              });
            })
            .map((shortcut) => ({
              application,
              shortcut,
            }))
        ),
      [] as {
        application: Application;
        shortcut: ApplicationShortcut;
      }[]
    );

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
  public shortcuts: {
    application: Application;
    shortcut: ApplicationShortcut;
  }[] = [];
  public byCategory: Record<string, Application[]> = {};
  public showTopic = true;
  public showCategories = false;

  private _applications: Application[] = [];
  private _topic: Topic | undefined;
}
