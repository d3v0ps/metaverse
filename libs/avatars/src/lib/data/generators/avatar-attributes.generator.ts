import { Injectable } from '@angular/core';
import { World } from '@central-factory/worlds/__generated__/models';
import { Attributes, Avatar } from '../../__generated__/models';

@Injectable({
  providedIn: 'root',
})
export class AvatarAttributesGenerator {
  generate(
    preset: Partial<Avatar> = {},
    { map, archetypes }: World
  ): Attributes {
    return {};
  }
}
