import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Application } from '@central-factory/applications/__generated__/models';
import { Topic } from '../../../models/topic';

@Component({
  selector: 'cf-topic-form',
  template: `
    <form cfBlock="form" class="topic-form" [formGroup]="form" *ngIf="topic">
      <h2 cfBlock="heading" cfMod="primary">
        <cf-svg-icon
          *ngIf="topic.icon"
          [src]="topic.icon"
          cfElem="icon"
        ></cf-svg-icon>
        {{ topic.title }}
      </h2>
      <div cfBlock="form-control">
        <label cfElem="label" for="title"> Icon </label>
        <input
          cfBlock="input"
          type="text"
          id="icon"
          name="icon"
          formControlName="icon"
        />
        <cf-svg-icon
          *ngIf="topic.icon"
          [src]="topic.icon"
          cfElem="icon"
        ></cf-svg-icon>
      </div>
      <div cfBlock="form-control">
        <label cfElem="label" for="title"> Title </label>
        <input
          cfBlock="input"
          type="text"
          id="title"
          name="title"
          formControlName="title"
        />
      </div>
      <div cfBlock="form-control">
        <label cfElem="label" for="background"> Background </label>
        <input
          cfBlock="input"
          type="text"
          id="background"
          name="background"
          formControlName="background"
        />
      </div>
      <div
        cfBlock="form-control"
        style="display: flex; gap: .2rem;"
        *ngIf="applications && applications.length > 0"
      >
        <label cfElem="label" for="apps"> Apps </label>
        <ng-select
          id="apps"
          [items]="applications"
          class="select application-select"
          bindLabel="name"
          bindValue="id"
          [multiple]="true"
          formControlName="applications"
        >
          <ng-template ng-label-tmp let-item="item" let-clear="clear">
            <div cfBlock="application-label">
              <cf-application-icon
                [background]="false"
                [outline]="true"
                [application]="item"
                cfElem="icon"
              ></cf-application-icon>
              {{ item.name }}
              <cf-svg-icon
                cfBlock="icon"
                src="assets/icons/mdi/close.svg"
                (click)="clear(item)"
              ></cf-svg-icon>
            </div>
          </ng-template>
          <ng-template ng-option-tmp let-item="item" let-index="index">
            <div cfBlock="application-option">
              <cf-application-header
                [application]="item"
              ></cf-application-header>
            </div>
          </ng-template>
        </ng-select>
      </div>
      <div
        cfBlock="form-control"
        style="display: flex; gap: .2rem;"
        *ngIf="applications && applications.length > 0"
      >
        <label cfElem="label" for="shortcuts"> Shortcuts </label>
        <ng-select
          id="shortcuts"
          [items]="shorcuts"
          class="select application-select"
          bindLabel="name"
          bindValue="id"
          [multiple]="true"
          formControlName="shortcuts"
        >
          <ng-template ng-label-tmp let-item="item" let-clear="clear">
            <div cfBlock="application-label">
              <cf-application-icon
                [background]="false"
                [outline]="true"
                [application]="item"
                cfElem="icon"
              ></cf-application-icon>
              {{ item.additionalProperties?.author?.name }} - {{ item.name }}
              <cf-svg-icon
                cfBlock="icon"
                src="assets/icons/mdi/close.svg"
                (click)="clear(item)"
              ></cf-svg-icon>
            </div>
          </ng-template>
          <ng-template ng-option-tmp let-item="item" let-index="index">
            <div cfBlock="application-option">
              <cf-application-header
                [application]="item"
              ></cf-application-header>
            </div>
          </ng-template>
        </ng-select>
      </div>
      <div
        cfBlock="form-control"
        style="display: flex; gap: .2rem;"
        *ngIf="applications && applications.length > 0"
      >
        <label cfElem="label" for="categories"> Categories </label>
        <ng-select
          id="categories"
          [items]="shorcuts"
          class="select application-select"
          bindLabel="name"
          bindValue="id"
          [multiple]="true"
          formControlName="categories"
        >
          <ng-template ng-label-tmp let-item="item" let-clear="clear">
            <div cfBlock="application-label">
              <cf-application-icon
                [background]="false"
                [outline]="true"
                [application]="item.application"
                cfElem="icon"
              ></cf-application-icon>
              {{ item.application.name }}
              <cf-svg-icon
                cfBlock="icon"
                src="assets/icons/mdi/close.svg"
                (click)="clear(item)"
              ></cf-svg-icon>
            </div>
          </ng-template>
          <ng-template ng-option-tmp let-item="item" let-index="index">
            <div cfBlock="application-option">
              <cf-application-header
                [application]="item.application"
              ></cf-application-header>
            </div>
          </ng-template>
        </ng-select>
      </div>
      <div cfBlock="form-control" style="display: flex; gap: .2rem;">
        <label cfElem="label" for="triggers"> Triggers </label>
        {{ topic?.triggers | json }}
      </div>
    </form>
  `,
  styles: [
    `
      @use 'web-components/abstracts/mixins/materials' as materials;

      .topic-form {
        @include materials.clay;
        margin-bottom: 2rem;
        padding: 1rem;
      }
    `,
  ],
})
export class TopicFormComponent {
  @Input() set topic(value: Topic | undefined) {
    this._topic = value;
    this.form.controls['title'].setValue(value?.title);
    this.form.controls['icon'].setValue(value?.icon);
    this.form.controls['background'].setValue(value?.background);
  }
  get topic(): Topic | undefined {
    return this._topic;
  }

  @Input() set applications(value: Application[] | null | undefined) {
    value = value || [];

    this.topicApplications = value.filter((application) =>
      this.topic?.applications?.includes(application.id)
    );

    this._applications = value;

    this.shorcuts = value.reduce(
      (result, application) =>
        result.concat(
          (application.shortcuts || []).map((shortcut) => ({
            ...application,
            name: shortcut.name,
            startUrl: shortcut.url,
            icons: shortcut.icons,
            description: shortcut.description,
            additionalProperties: {
              ...application.additionalProperties,
              author: {
                id: application.id,
                name: application.name,
              },
            },
          }))
        ),
      [] as any[]
    );

    this.form.controls['applications'].setValue(
      this.topicApplications.map((application) => application.id)
    );

    // this.form.controls.applications.setValue(
    //   this.topicApplications.map((application) => application.id)
    // );
  }

  get applications(): Application[] {
    return this._applications;
  }

  form = this.fb.group({
    title: this.topic?.title || '',
    icon: this.topic?.icon || '',
    background: this.topic?.background || '',
    applications: [],
    shortcuts: [],
    categories: [],
  });

  shorcuts: Application[] = [];

  public topicApplications: Application[] = [];

  private _topic?: Topic;
  private _applications: Application[] = [];

  constructor(private fb: FormBuilder) {}

  onApplicationsChange(applications: Application[]) {
    if (!this.topic) {
      return;
    }

    this.topic.applications = applications.map((application) => application.id);
  }
}
