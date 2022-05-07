import { Injectable } from '@angular/core';
import { Avatar } from '@central-factory/avatars/__generated__/models';
import { BehaviorSubject } from 'rxjs';
import { Burg } from '../__generated__/models';
import { WorldsState } from './worlds.state';

export enum RoomKind {
  Burg = 'burg',
}

export type Room = {
  name: string;
  kind: RoomKind;
  burg?: Burg;
  avatars: Avatar[];
};

@Injectable({
  providedIn: 'root',
})
export class RoomsState {
  rooms$ = new BehaviorSubject<Room[]>([]);

  selectedRoom$ = new BehaviorSubject<Room | undefined>(undefined);

  constructor(private worldsState: WorldsState) {
    this.worldsState.selectedBurg$.subscribe((burg) => {
      this.rooms$.next([
        {
          name: `${burg?.name} - 1`,
          avatars: [],
          kind: RoomKind.Burg,
          burg,
        },
      ]);
      this.selectedRoom$.next(this.rooms$.value[0]);
    });
  }

  public selectRoom(room: Room) {
    this.selectedRoom$.next(room);
  }
}
