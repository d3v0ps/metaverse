import { Component, Input } from '@angular/core';
import {
  Application,
  ApplicationShortcut,
} from '@central-factory/applications/models/application';
import { ApplicationShortcutView } from '@central-factory/applications/web-components/angular/application-shortcut/application-shortcut.component';
import { Topic } from '../../../models/topic';

export type ApplicationWithShortcut = {
  application: Application;
  shortcut: ApplicationShortcut;
};

@Component({
  selector: 'cf-start-topic',
  template: `
    <div cfBlock="topic-card" *ngIf="topic && showTopic">
      <cf-topic-background [topic]="topic"></cf-topic-background>

      <div cfBlock="topic-body">
        <cf-topic-header [topic]="topic"></cf-topic-header>

        <div
          cfBlock="topic-content"
          *ngIf="topic.applications && topic.applications.length > 0"
        >
          <cf-topic-applications
            [applications]="topicApplications"
            [installedApplications]="installedApplications"
          >
          </cf-topic-applications>
        </div>

        <div
          cfBlock="topic-content"
          *ngIf="topic.shortcuts && topic.shortcuts.length > 0"
        >
          <cf-topic-shortcuts
            [shortcuts]="shortcuts"
            (shortcutClick)="onShortcutClick($event)"
          ></cf-topic-shortcuts>
        </div>

        <div
          cfBlock="topic-content"
          *ngIf="topic.media && topic.media.length > 0"
        >
          <cf-topic-media [topic]="topic"></cf-topic-media>
        </div>

        <div
          cfBlock="topic-content"
          *ngIf="topic.categories && topic.categories.length > 0"
        >
          <cf-topic-categories
            [applicationsByCategory]="byCategory"
            [installedApplications]="installedApplications"
            (applicationClick)="onApplicationCardClick($event)"
          >
          </cf-topic-categories>
        </div>
      </div>
    </div>
  `,
})
export class TopicCardComponent {
  @Input() set currentDate(date: Date) {
    this._currentDate = date;

    if (this.topic) {
      this.showTopic = this.resolveTopicVisibility(
        this.topic,
        this.currentDate
      );
    }
  }
  get currentDate(): Date {
    return this._currentDate;
  }

  @Input() set topic(value: Topic | undefined) {
    this._topic = value;

    if (this.topic && this.applications) {
      this.generateData(this.topic, this.applications);
    }
  }
  get topic(): Topic | undefined {
    return this._topic;
  }

  @Input() installedApplications: Application[] = [];

  @Input() set applications(value: Application[] | null | undefined) {
    value = value || [];

    if (this.topic) {
      this.generateData(this.topic, value);
    }

    this._applications = value;
  }
  get applications(): Application[] {
    return this._applications;
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

  private resolveTopicVisibility(topic: Topic, currentDate = new Date()) {
    if (!topic || !topic.triggers) {
      return false;
    }

    return topic.triggers.reduce<boolean>((acc, trigger) => {
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

  private generateData(topic: Topic, applications: Application[]) {
    this.showTopic = this.resolveTopicVisibility(topic, this.currentDate);
    this.topicApplications = this.resolveTopicApplications(topic, applications);
    this.shortcuts = this.resolveShortcuts(topic, applications);
    this.byCategory = this.resolveCategories(topic, applications);
  }

  private resolveTopicApplications(topic: Topic, applications: Application[]) {
    const topicApplications = topic.applications || [];

    return topicApplications
      .map((application) => applications.find((app) => app.id === application))
      .filter((app) => (app ? true : false)) as Application[];
  }

  private resolveShortcuts(topic: Topic, applications: Application[]) {
    const shortcuts = topic.shortcuts || [];

    return shortcuts
      .map((shortcutId) =>
        applications.reduce<ApplicationWithShortcut | undefined>(
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
  }

  private resolveCategories(topic: Topic, applications: Application[]) {
    const categories: string[] = topic.categories || [];

    return categories.reduce((result, category) => {
      const applicationsByCategory =
        applications?.filter((application) =>
          application.categories?.includes(category)
        ) || [];

      return Object.assign(result, { [category]: applicationsByCategory });
    }, {});
  }
}
