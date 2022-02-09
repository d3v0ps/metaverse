import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Avatar } from '@central-factory/avatars/models';

@Component({
  selector: 'cf-assistant-avatar',
  template: `
    <div cfBlock="assistant-avatar">
      <div cfElem="portrait">
        <cf-avatar-appearance-portrait
          [emptyIcon]="assistantIcon"
          [showEmptyIcon]="true"
        ></cf-avatar-appearance-portrait>
      </div>
      <h2
        cfBlock="assistant-message"
        *ngIf="assistantMessage"
        [innerHtml]="assistantMessage"
      ></h2>
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
  @Input() currentDate = new Date();

  @Input() set selectedAvatar(avatar: Avatar) {
    console.log('assistant avatar', this.currentDate);
    this.assistantMessage = `
    Welcome back <strong class="text text--primary">${
      avatar.name
    }</strong>,<br />
      It's ${new DatePipe('en').transform(this.currentDate, 'medium')}
      <br />
      What would you like to do?
  `;
  }
  @Input() assistantMessage = `
    Welcome back,<br />
      It's {{ today | date: 'medium' }}
      <br />
      What would you like to do?
  `;
}
