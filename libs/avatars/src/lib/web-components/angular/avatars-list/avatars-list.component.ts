import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Avatar } from '@central-factory/avatars/models/avatar';
import { Burg } from '@central-factory/worlds/models/fmg-map';
import { World } from '@central-factory/worlds/models/world';

@Component({
  selector: 'cf-avatars-list',
  template: `
    <div cfBlock="avatars-list">
      <form>
        <!-- div *ngFor="let house of houses">
          <img
            *ngIf="house.burg?.coa"
            src="https://armoria.herokuapp.com/?size=500&format=png&coa={{
              house.burg?.coa | json
            }}"
          />
        </div -->
        <select [(ngModel)]="selectedHouse" name="selectedHouse">
          <option *ngFor="let house of houses" [ngValue]="house.name">
            {{ house.name }} ({{ house.avatars.length }})
          </option>
        </select>
      </form>
      <cf-avatars-carousel
        [direction]="'column'"
        [avatars]="houseAvatars"
        [world]="world"
        (avatarClick)="onSelectAvatarClick($event)"
        displayComponent="avataaars"
      ></cf-avatars-carousel>
    </div>
  `,
  styles: [
    `
      .avatars-list {
        height: 100%;
        overflow: auto;
      }
    `,
  ],
})
export class AvatarsListComponent {
  @Input() avatars: Avatar[] = [];
  @Input() world?: World;

  @Input() selectedAvatar?: Avatar;

  @Output() selectAvatar: EventEmitter<Avatar> = new EventEmitter();

  selectedHouse?: string;

  onSelectAvatarClick(avatar: Avatar) {
    this.selectAvatar.emit(avatar);
  }

  get houses() {
    return this.avatars.reduce<
      {
        name: string;
        mainProfession: string;
        burg?: Burg;
        avatars: Avatar[];
      }[]
    >((acc, avatar) => {
      const house = avatar.identity?.familyName;

      if (!house) {
        return acc;
      }

      if (!this.selectedHouse) {
        this.selectedHouse = house;
      }

      let houseObj = acc.find((item) => item.name === house);

      if (!houseObj) {
        houseObj = {
          name: house,
          mainProfession: avatar.identity?.mainProfession || 'noble',
          burg:
            this.world?.map.cells.burgs.find(
              (burg) => avatar.identity?.birthPlace === burg.i
            ) || undefined,
          avatars: [avatar],
        };
        acc.push(houseObj);
      } else {
        houseObj.avatars.push(avatar);
      }

      return acc;
    }, []);
  }

  get houseAvatars() {
    if (!this.selectedHouse) {
      return this.avatars;
    }

    return this.avatars.filter(
      (avatar) => avatar.identity?.familyName === this.selectedHouse
    );
  }
}
