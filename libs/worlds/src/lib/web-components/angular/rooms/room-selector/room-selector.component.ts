import { Component } from '@angular/core';
import { Room, RoomsState } from '@central-factory/worlds/states/rooms.state';

@Component({
  selector: 'cf-room-selector',
  template: `
    <div cfBlock="room-selector">
      <ng-select
        cfBlock="select"
        cfMod="xs"
        [items]="rooms$ | async"
        [ngModel]="selectedRoom$ | async"
        (ngModelChange)="onRoomSelect($event)"
      >
        <ng-template ng-label-tmp let-item="item" let-clear="clear">
          Room: {{ item?.burg?.name }}
        </ng-template>
        <ng-template ng-option-tmp let-item="item">
          Room: {{ item?.burg?.name }}
        </ng-template>
      </ng-select>
    </div>
  `,
  styles: [
    `
      .select {
        min-width: 10rem;
      }
    `,
  ],
})
export class RoomSelectorComponent {
  selectedRoom$ = this.roomsState.selectedRoom$;
  rooms$ = this.roomsState.rooms$;

  constructor(private roomsState: RoomsState) {}

  onRoomSelect(room: Room) {
    this.roomsState.selectRoom(room);
  }
}
