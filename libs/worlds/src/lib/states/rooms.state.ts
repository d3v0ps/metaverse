import { Injectable } from '@angular/core';
import { Avatar } from '@central-factory/avatars/models';
import { BehaviorSubject } from 'rxjs';
import { Burg } from '../models/fmg-map';
import { WorldsState } from './worlds.state';

export enum RoomKind {
  Burg = 'burg',
}

export type Room = {
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
    this.worldsState.selectedBurg$.subscribe((burg) =>
      this.rooms$.next([
        {
          avatars: [],
          kind: RoomKind.Burg,
          burg,
        },
      ])
    );
  }
}
