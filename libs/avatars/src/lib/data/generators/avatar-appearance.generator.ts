import { Injectable } from '@angular/core';
import { bodyTypes } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/body-types';
import { ears } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/ears';
import { eyes } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/eyes';
import { facialHairStyles } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/facial-hair-styles';
import { hairColors } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/hair-colors';
import { hairStyles } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/hair-styles';
import { noses } from '@central-factory/avatars/web-components/angular/avatar-appearance-editor/components/avatar-appearance-portrait-designer/design-styles/lpc/noses';
import { World } from '@central-factory/worlds/__generated__/models';
import faker from '@faker-js/faker/locale/en_US';
import {
  Appearance,
  Avatar,
  Gender,
  RelationshipKind,
} from '../../__generated__/models';

@Injectable({
  providedIn: 'root',
})
export class AvatarAppearanceGenerator {
  generate(preset: Partial<Avatar> = {}, world: World): Appearance {
    const bodyType =
      preset.identity?.gender ||
      preset.appearance?.body?.style ||
      faker.random.arrayElement(Object.values(Gender));

    const humanSkins = bodyTypes.filter(
      (bodyType) =>
        !bodyType.id.toLowerCase().includes('lizard') &&
        !bodyType.id.toLowerCase().includes('orc') &&
        !bodyType.id.toLowerCase().includes('wolf') &&
        !bodyType.id.toLowerCase().includes('skeleton') &&
        !bodyType.id.toLowerCase().includes('zombie') &&
        !bodyType.id.toLowerCase().includes('beast') &&
        !bodyType.id.toLowerCase().includes('darkelf')
    );

    const skins =
      bodyType === Gender.Male
        ? humanSkins.filter(
            (bodyType) => !bodyType.id.toLowerCase().includes('pregnant')
          )
        : humanSkins.filter(
            (bodyType) => !bodyType.id.toLowerCase().includes('muscular')
          );

    const hasFacialHair =
      preset.appearance?.facialHair?.style ||
      (bodyType === Gender.Male && faker.datatype.boolean());

    const relationships = preset.relationships || [];

    const parents = relationships
      .filter((relationship) => relationship.kind === RelationshipKind.Parent)
      .map((relationship) =>
        world.avatars?.find((avatar) => avatar.id === relationship.avatar)
      );

    const hairColor =
      preset.appearance?.hair?.color ||
      faker.random.arrayElement(parents)?.appearance?.hair?.color ||
      faker.random.arrayElement(hairColors).id;

    return {
      body: {
        style: preset.appearance?.body?.style || bodyType,
        shape: preset.appearance?.body?.shape || 'Default',
        color:
          preset.appearance?.body?.color ||
          faker.random.arrayElement(parents)?.appearance?.body?.color ||
          faker.random.arrayElement(skins).id,
      },
      eyes: {
        color:
          preset.appearance?.eyes?.color ||
          faker.random.arrayElement(parents)?.appearance?.eyes?.color ||
          faker.random.arrayElement(
            eyes.filter((eye) => eye.id.toLowerCase() !== 'cyclops')
          ).id,
      },
      ears: {
        shape:
          preset.appearance?.ears?.shape ||
          faker.random.arrayElement(parents)?.appearance?.ears?.shape ||
          faker.random.arrayElement(ears).id,
      },
      nose: {
        shape:
          preset.appearance?.nose?.shape || faker.random.arrayElement(noses).id,
      },
      hair: {
        color: hairColor,
        style:
          preset.appearance?.hair?.style ||
          faker.random.arrayElement(hairStyles).id,
      },
      facialHair: {
        color: hairColor,
        style: hasFacialHair
          ? preset.appearance?.facialHair?.style ||
            faker.random.arrayElement(facialHairStyles).id
          : undefined,
      },
    };
  }
}
