import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppearanceFormat } from '@central-factory/avatars';
import type { Avatar } from '../../../models/avatar';

export interface AvatarOverviewInput {
  welcomeMessage: string;
  name: string;
  title: string;
  smallPreviewUrl?: string;
  appearance: {
    id: string;
    filename: string;
    format: AppearanceFormat;
    src?: string;
    portrait: {
      id: string;
      filename: string;
      format: AppearanceFormat;
      src?: string;
    };
  };
}

@Component({
  selector: 'cf-avatar-overview',
  template: `
    <form [formGroup]="form" cfBlock="avatar-overview" *ngIf="form.value?.name">
      <cf-avatar-appearance-portrait
        [appearancePortrait]="form.value.appearance?.portrait"
      ></cf-avatar-appearance-portrait>

      <div cfBlock="chatbox">
        <div cfElem="message">
          <div class="form-control" *ngIf="editing.welcomeMessage">
            <!-- label for="welcomeMessage">Welcome message:</label -->
            <textarea
              id="welcomeMessage"
              formControlName="welcomeMessage"
            ></textarea>
            <cf-svg-icon
              src="assets/icons/mdi/check.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
              (click)="editing.welcomeMessage = !editing.welcomeMessage"
            ></cf-svg-icon>
          </div>

          <p
            *ngIf="!editing.welcomeMessage"
            (click)="editing.welcomeMessage = !editing.welcomeMessage"
          >
            {{ form.value.welcomeMessage }}
            <cf-svg-icon
              src="assets/icons/mdi/pencil-outline.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
            ></cf-svg-icon>
          </p>
        </div>

        <div cfElem="username">
          <!-- label for="name">Name:</label -->

          <div class="form-control" *ngIf="editing.name">
            <input id="name" type="text" formControlName="name" />
            <cf-svg-icon
              src="assets/icons/mdi/check.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
              (click)="editing.name = !editing.name"
            ></cf-svg-icon>
          </div>

          <span (click)="editing.name = !editing.name" *ngIf="!editing.name"
            >{{ form.value.name }}
            <cf-svg-icon
              src="assets/icons/mdi/pencil-outline.svg"
              cfElem="icon"
              [svgClass]="'icon__svg'"
            ></cf-svg-icon>
          </span>
        </div>
      </div>
    </form>
  `,
})
export class AvatarOverviewComponent {
  @Input() set avatar(value: Avatar) {
    if (!value) {
      return;
    }

    this.form.reset({
      name: value.name,
      title: value.title,
      welcomeMessage: value.welcomeMessage,
      smallPreviewUrl: value.selectedAppearance.portrait.src,
      appearance: value.selectedAppearance,
    });
  }

  editing: {
    [key: string]: boolean;
  } = {
    name: false,
    title: false,
    welcomeMessage: false,
    smallPreviewUrl: false,
  };

  form = new FormGroup({
    welcomeMessage: new FormControl(``),
    name: new FormControl(''),
    title: new FormControl(''),
    smallPreviewUrl: new FormControl(''),
    appearance: new FormGroup({
      id: new FormControl(''),
      filename: new FormControl(''),
      src: new FormControl(''),
      format: new FormControl(AppearanceFormat.Model),
      portrait: new FormGroup({
        id: new FormControl(''),
        filename: new FormControl(''),
        src: new FormControl(''),
        format: new FormControl(AppearanceFormat.Image),
        style: new FormControl({}),
      }),
    }),
  });
}
