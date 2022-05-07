import { Injectable } from '@angular/core';
import { World } from '@central-factory/worlds/__generated__/models';
import { Avatar } from '../../__generated__/models';

@Injectable({
  providedIn: 'root',
})
export class AvatarKnowledgeGenerator {
  generate(preset: Partial<Avatar> = {}, { map, archetypes }: World): any {
    return {};
  }
}
