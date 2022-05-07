import { Component, Input } from '@angular/core';
import { Avatar } from '../../../__generated__/models';

export type AvatarDialogMessage = {
  content: string;
  machine?: any;
};

@Component({
  selector: 'cf-avatar-dialog',
  template: `
    <div cfBlock="avatar-dialog">
      <h2 cfBlock="heading">{{ avatar?.name }}</h2>
      <div cfBlock="message">
        {{ message?.content }}
        <cf-avatar-appearance-portrait></cf-avatar-appearance-portrait>
      </div>
    </div>
  `,
})
export class AvatarDialogComponent {
  @Input() avatar?: Avatar;
  @Input() message?: AvatarDialogMessage;
}
