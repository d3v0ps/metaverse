
import { Component } from '@angular/core';
import { Avatar } from '../../../models/avatar';
import { AvatarDialogMessage } from './avatar-dialog.component';


export type AvatarDialog = {
  messages: {
    avatar?: Avatar;
    message: AvatarDialogMessage;
  }[];
}

@Component({
  selector: 'cf-avatar-dialog-scene',
  template: `
    <div cfBlock="avatar-dialog-scene">
      <div *ngIf="currentMessage" cfElem="message">
        <cf-avatar-dialog [avatar]="currentMessage?.avatar" [message]="currentMessage.message">
        </cf-avatar-dialog>
      </div>
    </div>
  `
})
export class AvatarDialogScene {

  dialog: AvatarDialog = {
    messages: []
  };

  currentMessage?: {
    avatar?: Avatar;
    message: AvatarDialogMessage;
  }

}
