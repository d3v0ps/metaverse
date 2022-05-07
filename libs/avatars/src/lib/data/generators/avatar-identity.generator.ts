import { Injectable } from '@angular/core';
import {
  Burg,
  Culture,
  MapCell,
  Religion,
  World,
} from '@central-factory/worlds/__generated__/models';
import { GenderType } from '@faker-js/faker';
import faker from '@faker-js/faker/locale/en_US';
import {
  Avatar,
  Gender,
  Identity,
  RelationshipKind,
} from '../../__generated__/models';
import { professions } from '../demo/professions.data';

@Injectable({
  providedIn: 'root',
})
export class AvatarIdentityGenerator {
  generate(preset: Partial<Avatar> = {}, world: World): Identity {
    const { burgs = [], cells = [] } = world.map ? world.map.cells : {};

    const gender = (preset.identity?.gender ||
      preset.appearance?.body?.style ||
      faker.random.arrayElement(Object.values(Gender))) as Gender;

    const birthPlace =
      preset.identity?.birthPlace || this.generateBirthPlace(preset, burgs);
    const burg = burgs.find((b: Burg) => b.i === birthPlace) || burgs[0];
    const burgCell = cells.find((cell: MapCell) => cell.i === burg.cell);

    const archetype = world.archetypes?.find(
      (archetype) => archetype.id === preset.identity?.archetype
    );

    const relationships = preset.relationships || [];

    const parents = relationships
      .filter((relationship) => relationship.kind === RelationshipKind.Parent)
      .map((relationship) =>
        world.avatars?.find((avatar) => avatar.id === relationship.avatar)
      ) as Avatar[];

    Object.assign(preset, {
      identity: {
        ...preset.identity,
        gender,
        birthPlace,
      },
    });

    return {
      archetype: archetype?.id,
      icon: archetype?.identity?.icon,
      givenName: this.generateGivenName(preset),
      familyName: this.generateFamilyName(preset),
      gender,
      birthDate: this.generateBirthDate(preset, archetype, parents),
      birthPlace: birthPlace,
      culture: this.generateCulture(preset, burg, world),
      religion: this.generateReligion(preset, burgCell, world),
      mainProfession: this.generateMainProfession(preset, archetype, parents),
      secondaryProfession: this.generateSecondaryProfession(
        preset,
        archetype,
        parents
      ),
    };
  }

  private generateGivenName(preset: Partial<Avatar>): string {
    return (
      preset.identity?.givenName ||
      faker.name.firstName(
        (preset.identity?.gender ||
          preset.appearance?.body?.style) as unknown as GenderType
      )
    );
  }

  private generateFamilyName(preset: Partial<Avatar>): string {
    return (
      preset.identity?.familyName ||
      faker.name.lastName(
        (preset.identity?.gender ||
          preset.appearance?.body?.style) as unknown as GenderType
      )
    );
  }

  private generateBirthDate(
    preset: Partial<Avatar>,
    archetype?: Partial<Avatar>,
    parents?: Avatar[]
  ): string {
    parents = parents || [];

    let birthDate: Date | undefined;

    if (parents.length > 0) {
      birthDate = new Date(parents[0].identity?.birthDate || '');
      const parentYearsWhenBorn = faker.datatype.number({ min: 20, max: 30 });
      birthDate.setFullYear(birthDate.getFullYear() + parentYearsWhenBorn);
    }

    return (
      preset.identity?.birthDate ||
      archetype?.identity?.birthDate ||
      birthDate?.toISOString() ||
      faker.date
        .between('2020-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z')
        .toISOString()
    );
  }

  private generateBirthPlace(
    preset: Partial<Avatar>,
    burgs: Burg[]
  ): number | undefined {
    const burgId =
      preset.identity?.birthPlace ||
      preset.location?.burg ||
      burgs[Math.floor(Math.random() * burgs.length)].i;
    const burg =
      burgs.find((b) => b.i === burgId) || faker.random.arrayElement(burgs);

    return burg.i;
  }

  private generateCulture(
    preset: Partial<Avatar>,
    burg?: Burg,
    world?: World
  ): number | undefined {
    return (
      preset.identity?.culture ||
      burg?.culture ||
      (world?.map
        ? faker.random.arrayElement(world.map.cells.cultures as Culture[]).i
        : undefined)
    );
  }

  private generateReligion(
    preset: Partial<Avatar>,
    burgCell?: MapCell,
    world?: World
  ): number | undefined {
    return (
      preset.identity?.religion ||
      burgCell?.religion ||
      (world?.map
        ? faker.random.arrayElement(world.map.cells.religions as Religion[]).i
        : undefined)
    );
  }

  private generateMainProfession(
    preset: Partial<Avatar>,
    archetype?: Partial<Avatar>,
    parents: Avatar[] = []
  ): string {
    return (
      preset.identity?.mainProfession ||
      archetype?.identity?.mainProfession ||
      faker.random.arrayElement(parents)?.identity?.mainProfession ||
      faker.random.arrayElement(professions).id
    );
  }

  private generateSecondaryProfession(
    preset: Partial<Avatar>,
    archetype?: Partial<Avatar>,
    parents: Avatar[] = []
  ): string {
    return (
      preset.identity?.secondaryProfession ||
      archetype?.identity?.secondaryProfession ||
      faker.random.arrayElement(parents)?.identity?.secondaryProfession ||
      faker.random.arrayElement(professions).id
    );
  }
}
