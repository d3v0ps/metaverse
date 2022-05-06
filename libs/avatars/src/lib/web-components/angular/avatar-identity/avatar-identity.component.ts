import { Component, Input } from '@angular/core';
import {
  AvatarAppearance,
  AvatarIdentity,
  AvatarOutfit,
} from '@central-factory/avatars/models/avatar';
import {
  Burg,
  Culture,
  Religion,
} from '@central-factory/worlds/models/fmg-map';

@Component({
  selector: 'cf-avatar-identity',
  template: `
    <div cfBlock="avatar-identity" *ngIf="identity">
      <table>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true"> Given Name </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">{{ identity.givenName }}</cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true"> Family Name </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">{{ identity.familyName }}</cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true"> Title </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">{{ identity.title }}</cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true">
              Main Profession
            </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">{{
              identity.mainProfession
            }}</cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true">
              Secondary Profession
            </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">{{
              identity.secondaryProfession
            }}</cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true"> Birth Date </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">
              <cf-svg-icon src="assets/icons/mdi/cake.svg"></cf-svg-icon>
              {{ identity.birthDate }}
            </cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true"> Birth Place </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">
              <cf-svg-icon src="assets/icons/mdi/city.svg"></cf-svg-icon>
              {{ birthPlace?.name }}
            </cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true"> Culture </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">{{ culture?.name }}</cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true"> Gender </cf-typography>
          </td>
          <td>
            <cf-avatar-gender [gender]="identity.gender"></cf-avatar-gender>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true">
              Sexual Orientation
            </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">{{
              identity?.sexualOrientation
            }}</cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true">Beliefs</cf-typography>
          </td>
          <td>
            <cf-typography
              type="h5"
              [ngStyle]="{
                color: religion?.color || 'var(--color-base-light-medium)'
              }"
              >{{
                religion?.name === 'No religion' ? 'Ateist' : religion?.name
              }}</cf-typography
            >
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true"> Quote </cf-typography>
          </td>
          <td>
            <cf-typography type="h5">{{ identity.quote }}</cf-typography>
          </td>
        </tr>
        <tr>
          <td>
            <cf-typography type="h5" [bold]="true">Bio</cf-typography>
          </td>
          <td>
            <cf-typography type="h5">{{ identity.bio }}</cf-typography>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class AvatarIdentityComponent {
  @Input() identity?: AvatarIdentity;
  @Input() birthPlace?: Burg;
  @Input() culture?: Culture;
  @Input() religion?: Religion;
  @Input() appearance?: AvatarAppearance;
  @Input() outfit?: AvatarOutfit;
}
