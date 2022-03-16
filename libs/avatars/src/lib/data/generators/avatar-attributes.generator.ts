import { Injectable } from '@angular/core';
import { World } from '@central-factory/worlds/models/world';
import { Avatar, AvatarAttributes } from '../../models/avatar';

@Injectable({
  providedIn: 'root',
})
export class AvatarAttributesGenerator {
  generate(
    preset: Partial<Avatar> = {},
    { map, archetypes }: World
  ): AvatarAttributes {
    return {};
  }
}
