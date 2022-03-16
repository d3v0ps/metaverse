import { Injectable } from '@angular/core';
import { arms } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/arms';
import { backs } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/backs';
import { bothHands } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/both-hands';
import { feet } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/feet';
import { headVisors } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/head-visors';
import { heads } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/heads';
import { leftHands } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/left-hands';
import { legs } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/legs';
import { rightHands } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/right-hands';
import { torsos } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/torsos';
import { World } from '@central-factory/worlds/models/world';
import faker from '@faker-js/faker/locale/en_US';
import { Avatar, AvatarOutfit } from '../../models/avatar';

@Injectable({
  providedIn: 'root',
})
export class AvatarOutfitsGenerator {
  generate(
    preset: Partial<Avatar> = {},
    { map, archetypes }: World
  ): AvatarOutfit[] {
    if (preset.outfits) {
      return preset.outfits;
    }

    archetypes = archetypes || [];
    const archetype = archetypes.find(
      (archetype) => archetype.id === preset.identity?.archetype
    );

    if (archetype && archetype.outfits) {
      return archetype.outfits;
    }

    const amount = faker.datatype.number({ min: 1, max: 5 });

    return Array(amount)
      .fill(null)
      .map((item, index) => {
        const wearsHelmet = faker.datatype.boolean();
        const wearsTorsoLayer = true;
        const wearsTorsoLayer2 = faker.datatype.boolean();
        const wearsTorsoLayer3 = false;

        return {
          name: faker.name.jobArea(),
          head: wearsHelmet
            ? {
                headgear: faker.random.arrayElement(heads).id,
                visor: faker.random.arrayElement(headVisors).id,
              }
            : undefined,
          torso: {
            layer1: wearsTorsoLayer
              ? faker.random.arrayElement(torsos).id
              : undefined,
            layer2: wearsTorsoLayer2
              ? faker.random.arrayElement(torsos).id
              : undefined,
            layer3: wearsTorsoLayer3
              ? faker.random.arrayElement(torsos).id
              : undefined,
          },
          shoulders: faker.random.arrayElement(arms).id,
          legs: faker.random.arrayElement(legs).id,
          feet: faker.random.arrayElement(feet).id,
          back: faker.random.arrayElement(backs).id,
          hands: {
            slot1: {
              rightHand: faker.random.arrayElement(rightHands).id,
              leftHand: faker.random.arrayElement(leftHands).id,
              bothHands: faker.random.arrayElement(bothHands).id,
            },

            slot2: {
              rightHand: faker.random.arrayElement(rightHands).id,
              leftHand: faker.random.arrayElement(leftHands).id,
              bothHands: faker.random.arrayElement(bothHands).id,
            },
          },
        };
      });
  }
}
