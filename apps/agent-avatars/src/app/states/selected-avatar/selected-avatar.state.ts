import { Injectable } from '@angular/core';
import type { Avatar } from '@central-factory/avatars/models/avatar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedAvatarState {
  avatar$ = new BehaviorSubject<Avatar | undefined>(
    localStorage.getItem('agentAvatars.selectedAvatar')
      ? JSON.parse(
          localStorage.getItem('agentAvatars.selectedAvatar') as string
        )
      : undefined
  );

  selectAvatar(avatar: Avatar) {
    localStorage.setItem('agentAvatars.selectedAvatar', JSON.stringify(avatar));
    this.avatar$.next(avatar);
  }
}
