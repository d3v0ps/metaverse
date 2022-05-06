import { Component, Input } from '@angular/core';
import { Avatar } from '@central-factory/avatars/models/avatar';

@Component({
  selector: 'cf-assistant-avatar',
  template: `
    <div cfBlock="assistant-avatar">
      <div cfElem="portrait">
        <cf-avatar-appearance-portrait
          [emptyIcon]="assistantIcon"
          [showEmptyIcon]="true"
          size="xs"
        ></cf-avatar-appearance-portrait>
      </div>
      <div style="width: 100%">
        <cf-typography
          *ngIf="assistantMessage"
          [innerHtml]="assistantMessage"
        ></cf-typography>
        <cf-command-bar [fullLength]="true"></cf-command-bar>
      </div>
    </div>
  `,
  styles: [
    `
      .assistant-avatar {
        display: flex;
        gap: 2rem;
        margin-bottom: 1rem;

        @media (max-width: 600px) {
          flex-direction: column;
          gap: 0;
        }
      }
    `,
  ],
})
export class AssistantAvatarComponent {
  @Input() assistantIcon = 'assets/icons/mdi/robot-happy.svg';
  @Input() set selectedAvatar(avatar: Avatar) {
    if (!avatar) {
      return;
    }
    this.assistantMessage = `
      Welcome back <a href="select-avatar" class="text text--primary">${avatar.identity?.givenName}</a>,<br />
        What would you like to do?
    `;
  }

  @Input() assistantMessage?: string;
}
