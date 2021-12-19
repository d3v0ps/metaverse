import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { Avatar } from '../../../domain/models/avatar';

export interface AvatarOverviewInput {
  welcomeMessage: string;
  name: string;
  title: string;
  smallPreviewUrl: string;
}

@Component({
  selector: 'cf-avatar-overview',
  template: `
    <form [formGroup]="form" block="avatar-overview">
      <div fxLayout="column" fxLayoutGap="10px">
        <div fxLayout="row" fxLayoutGap="10px">
          <div fxFlex="100px">
            <img elem="small-preview" [src]="form.value.smallPreviewUrl" />
          </div>

          <div fxFlex>
            <div block="chatbox">
              <div elem="message">
                <div class="form-control" *ngIf="editing.welcomeMessage">
                  <!-- label for="welcomeMessage">Welcome message:</label -->
                  <textarea
                    id="welcomeMessage"
                    formControlName="welcomeMessage"
                  ></textarea>
                  <svg-icon
                    src="assets/icons/mdi/check.svg"
                    elem="icon"
                    [svgClass]="'icon__svg'"
                    (click)="editing.welcomeMessage = !editing.welcomeMessage"
                  ></svg-icon>
                </div>

                <p
                  *ngIf="!editing.welcomeMessage"
                  (click)="editing.welcomeMessage = !editing.welcomeMessage"
                >
                  {{ form.value.welcomeMessage }}
                  <svg-icon
                    src="assets/icons/mdi/pencil-outline.svg"
                    elem="icon"
                    [svgClass]="'icon__svg'"
                  ></svg-icon>
                </p>
              </div>

              <div elem="username">
                <!-- label for="name">Name:</label -->

                <div class="form-control" *ngIf="editing.name">
                  <input id="name" type="text" formControlName="name" />
                  <svg-icon
                    src="assets/icons/mdi/check.svg"
                    elem="icon"
                    [svgClass]="'icon__svg'"
                    (click)="editing.name = !editing.name"
                  ></svg-icon>
                </div>

                <span
                  (click)="editing.name = !editing.name"
                  *ngIf="!editing.name"
                  >{{ form.value.name }}
                  <svg-icon
                    src="assets/icons/mdi/pencil-outline.svg"
                    elem="icon"
                    [svgClass]="'icon__svg'"
                  ></svg-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  `,
})
export class AvatarOverviewComponent {
  @Input() set avatar(value: Avatar) {
    this.form.reset({
      name: value.name,
      title: value.title,
      welcomeMessage: value.welcomeMessage,
      smallPreviewUrl: value.selectedAppearance.smallPreviewUrl,
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

  form = new FormGroup<AvatarOverviewInput>({
    welcomeMessage: new FormControl(``),
    name: new FormControl(''),
    title: new FormControl(''),
    smallPreviewUrl: new FormControl(''),
  });
}
