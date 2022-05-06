import { Injectable } from '@angular/core';
import { World } from '@central-factory/worlds/models/world';
import { Avatar } from '../../models/avatar';

@Injectable({
  providedIn: 'root',
})
export class AvatarKnowledgeGenerator {
  generate(preset: Partial<Avatar> = {}, { map, archetypes }: World): any {
    return {};
  }
}
