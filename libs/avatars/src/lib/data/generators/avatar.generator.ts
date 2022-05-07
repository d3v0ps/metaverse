/* eslint-disable no-restricted-syntax */
import { Injectable } from '@angular/core';
import { Avatar } from '@central-factory/avatars/__generated__/models';
import { Burg, World } from '@central-factory/worlds/__generated__/models';
import faker from '@faker-js/faker/locale/en_US';
import { v4 as uuid } from 'uuid';
import {
  Gender,
  Relationship,
  RelationshipKind,
  SexualOrientation,
} from '../../__generated__/models';
import { AvatarAppearanceGenerator } from './avatar-appearance.generator';
import { AvatarAttributesGenerator } from './avatar-attributes.generator';
import { AvatarIdentityGenerator } from './avatar-identity.generator';
import { AvatarKnowledgeGenerator } from './avatar-knowledge.generator';
import { AvatarOutfitsGenerator } from './avatar-outfits.generator';

const PANSEXUAL_INTELLECT_THRESHOLD = 5;

export enum BurgTopic {
  Residence = 'Residence',
  Tradepoint = 'Tradepoint',
  Capital = 'Capital',
  Military = 'Military',
  Religion = 'Religion',
  Wood = 'Wood',
  Mineral = 'Mineral',
  Farm = 'Farm',
}

export enum BurgSize {
  Small = 0,
  Medium = 1,
  Large = 2,
}

@Injectable({
  providedIn: 'root',
})
export class AvatarGenerator {
  avatarsPercentagePerBurgTopic: Record<
    BurgTopic,
    {
      court: number;
      militians: number;
      religious: number;
      workers: number;
      foreigners: number;
      residents: number;
    }
  > = {
    [BurgTopic.Capital]: {
      court: 0.3,
      militians: 0.2,
      religious: 0.1,
      workers: 0.1,
      foreigners: 0.1,
      residents: 0.2,
    },
    [BurgTopic.Farm]: {
      court: 0,
      militians: 0,
      religious: 0.05,
      workers: 0.4,
      foreigners: 0.05,
      residents: 0.5,
    },
    [BurgTopic.Military]: {
      court: 0.3,
      militians: 0.2,
      religious: 0.1,
      workers: 0.1,
      foreigners: 0.1,
      residents: 0.2,
    },
    [BurgTopic.Mineral]: {
      court: 0,
      militians: 0,
      religious: 0.05,
      workers: 0.6,
      foreigners: 0.05,
      residents: 0.3,
    },
    [BurgTopic.Religion]: {
      court: 0.3,
      militians: 0.2,
      religious: 0.1,
      workers: 0.1,
      foreigners: 0.1,
      residents: 0.2,
    },
    [BurgTopic.Residence]: {
      court: 0,
      militians: 0,
      religious: 0.05,
      workers: 0.2,
      foreigners: 0.05,
      residents: 0.7,
    },
    [BurgTopic.Tradepoint]: {
      court: 0,
      militians: 0.1,
      religious: 0.05,
      workers: 0.6,
      foreigners: 0.2,
      residents: 0.05,
    },
    [BurgTopic.Wood]: {
      court: 0,
      militians: 0,
      religious: 0.05,
      workers: 0.6,
      foreigners: 0.05,
      residents: 0.3,
    },
  };

  constructor(
    private identityGenerator: AvatarIdentityGenerator,
    private attributesGenerator: AvatarAttributesGenerator,
    private knowledgeGenerator: AvatarKnowledgeGenerator,
    private appearanceGenerator: AvatarAppearanceGenerator,
    private outfitsGenerator: AvatarOutfitsGenerator
  ) {}

  generate(world: World, preset: Partial<Avatar> = {}): Avatar {
    const result = Object.assign(
      {
        id: preset.id || uuid(),
      },
      preset
    ) as Avatar;

    const identity = this.identityGenerator.generate(result, world);

    Object.assign(result, { identity });

    const attributes = this.attributesGenerator.generate(result, world);

    Object.assign(result, { attributes });

    const knowledge = this.knowledgeGenerator.generate(result, world);

    Object.assign(result, { knowledge });

    const appearance = this.appearanceGenerator.generate(result, world);

    Object.assign(result, { appearance });

    const outfits = this.outfitsGenerator.generate(result, world);

    Object.assign(result, { outfits });

    const relationships = this.generateRelationships(result, world);

    Object.assign(result, { relationships });

    const location = {
      world: world.map?.info.seed,
      burg: result.identity?.birthPlace,
    };

    Object.assign(result, { location });

    return result;
  }

  generateDemigods(world: World): Avatar[] {
    const eras = world.eras || [];

    const startYear = eras.length > 0 ? eras[0].startYear : 0;
    const startDate = new Date();
    const startISOString = `${startYear}-01-01T00:00:42.546Z`;

    return [
      this.generate(world, {
        id: 'alfred',
        identity: {
          givenName: 'Alfred',
          archetype: 'assistant',
          bio: '',
          birthDate: startISOString,
          birthPlace: 0,
          culture: 0,
          familyName: '',
          gender: Gender.Male,
        },
        appearances: [],
        appearance: {
          body: {
            style: Gender.Male,
            color: 'light',
          },
          eyes: {
            color: 'purple',
          },
          hair: {
            style: 'bangs',
            color: 'black',
          },
          facialHair: {
            style: 'mustache',
            color: 'black',
          },
        },
        outfits: [
          {
            name: 'default',
            back: undefined,
            feet: 'shoes/black_shoes',
            hands: undefined,
            head: undefined,
            legs: 'pants/formal_pants_stripes',
            shoulders: undefined,
            torso: {
              layer1: 'shirts/formal_shirt',
              layer2: 'jackets/formal_jacket_black',
            },
          },
        ],
      }),
    ];
  }

  generateBurg(world: World, burg: Burg, levels = 3) {
    // 23 (16f + 7m)
    const topic = this.getBurgTopic(burg);
    const rootAmountPerCategory = this.avatarsPercentagePerBurgTopic[topic];

    world.avatars = world.avatars || [];

    // const totalMales = 7;
    // const totalFemales = 16;

    // Age: 75 - 95 (death)
    const rootLevel: Avatar[] = Object.entries(rootAmountPerCategory).reduce<
      Avatar[]
    >(
      (acc, [citizenType, percentage]) =>
        acc.concat(
          Array(Math.round(25 * percentage))
            .fill(citizenType)
            .map(() => {
              let archetype = 'citizen';

              switch (citizenType) {
                case 'court':
                  archetype = 'noble';
                  break;
                case 'militians':
                  archetype = 'soldier';
                  break;
                case 'religious':
                  archetype = 'priest';
                  break;
                case 'workers':
                  switch (topic) {
                    case BurgTopic.Farm:
                      archetype = 'farmer';
                      break;
                    case BurgTopic.Wood:
                      archetype = 'woodcutter';
                      break;
                    case BurgTopic.Mineral:
                      archetype = 'miner';
                      break;
                    case BurgTopic.Religion:
                      archetype = 'priest';
                      break;
                    case BurgTopic.Residence:
                      archetype = 'citizen';
                      break;
                    case BurgTopic.Tradepoint:
                      archetype = 'merchant';
                      break;
                  }
                  break;
                case 'foreigners':
                  archetype = 'nomad';
                  break;
                case 'residents':
                  archetype = 'citizen';
                  break;
              }

              const currentYear =
                world.map?.settings.options.year || new Date().getFullYear();
              const minBirthDate = new Date();
              minBirthDate.setFullYear(currentYear - 75);
              const maxBirthDate = new Date();
              maxBirthDate.setFullYear(currentYear - 60);

              const birthDate = faker.date
                .between(minBirthDate.toISOString(), maxBirthDate.toISOString())
                .toISOString();

              return this.generate(world, {
                identity: {
                  archetype,
                  birthPlace: burg.i,
                  birthDate,
                },
              });
            })
        ),
      []
    );
    world.avatars = world.avatars.concat(rootLevel);
    // console.debug('🌲 root', rootLevel);
    const rootLevelCouples = this.generateCouples(rootLevel);

    // console.debug('👪 root', rootLevelCouples);

    // Age: 55 - 75
    const firstGeneration = rootLevelCouples.reduce<Avatar[]>(
      (acc, { member1, member2 }) =>
        acc.concat(this.generateChildren(world, member1, member2)),
      []
    );
    world.avatars = world.avatars.concat(firstGeneration);

    // console.debug('🌲 first', firstGeneration);

    const firstGenerationCouples = this.generateCouples(firstGeneration);

    // Age: 35 - 55
    const secondGeneration = firstGenerationCouples.reduce<Avatar[]>(
      (acc, { member1, member2 }) =>
        acc.concat(this.generateChildren(world, member1, member2)),
      []
    );
    world.avatars = world.avatars.concat(secondGeneration);

    // console.debug('🌲 second', secondGeneration);

    const secondGenerationCouples = this.generateCouples(secondGeneration);

    // Age: 15 - 35
    const thirdGeneration = secondGenerationCouples.reduce<Avatar[]>(
      (acc, { member1, member2 }) =>
        acc.concat(this.generateChildren(world, member1, member2)),
      []
    );
    world.avatars = world.avatars.concat(thirdGeneration);

    // console.debug('🌲 third', thirdGeneration);

    const thirdGenerationCouples = this.generateCouples(thirdGeneration);

    return rootLevel.concat(firstGeneration, secondGeneration, thirdGeneration);
  }

  private generateCouples(generation: Avatar[]) {
    const couples = generation.reduce<{ member1: Avatar; member2: Avatar }[]>(
      (couples, current) => {
        const isInRelationship = couples.some(
          (couple) =>
            couple.member1.id === current.id || couple.member2.id === current.id
        );

        if (isInRelationship) {
          return couples;
        }

        const match = generation.find(
          (member) =>
            member.id !== current.id &&
            !couples.some(
              (couple) =>
                couple.member1.id === member.id ||
                couple.member2.id === member.id
            ) &&
            this.avatarIsInterestedInAvatar(member, current) &&
            this.avatarIsInterestedInAvatar(current, member)
        );

        if (!match) {
          return couples;
        }

        current.relationships = current.relationships || [];
        match.relationships = match.relationships || [];

        current.relationships.push({
          kind: RelationshipKind.Spouse,
          avatar: match.id,
        });
        match.relationships.push({
          kind: RelationshipKind.Spouse,
          avatar: current.id,
        });

        return couples.concat({
          member1: current,
          member2: match,
        });
      },
      []
    );

    const nonMatched = generation.filter(
      (avatar) =>
        !avatar.relationships?.some(
          ({ kind }) => kind === RelationshipKind.Spouse
        )
    );

    return couples.concat(
      nonMatched.map((avatar) => ({ member1: avatar, member2: avatar }))
    );
  }

  private generateChildren(world: World, parent1: Avatar, parent2: Avatar) {
    const amounts = [0, 0, 1, 1, 2, 2, 2, 2, 3, 4];

    const parentBirthDate = new Date(parent1.identity?.birthDate || '');
    const currentYear =
      world.map?.settings.options.year || new Date().getFullYear();

    if (currentYear <= parentBirthDate.getFullYear() + 15) {
      return [];
    }

    const childrenAmount = Math.floor(Math.random() * amounts.length);
    const archetype =
      Math.random() > 0.5
        ? parent1.identity?.archetype
        : parent2.identity?.archetype;

    const children = Array(amounts[childrenAmount])
      .fill(null)
      .map(() =>
        this.generate(world, {
          identity: {
            archetype,
            familyName: parent1.identity?.familyName,
            birthPlace: parent1.identity?.birthPlace,
          },
          relationships: [
            {
              kind: RelationshipKind.Parent,
              avatar: parent1.id,
            },
            {
              kind: RelationshipKind.Parent,
              avatar: parent2.id,
            },
          ],
        })
      );

    return children;
  }

  private avatarIsInterestedInAvatar(avatar1: Avatar, avatar2: Avatar) {
    switch (avatar1.identity?.sexualOrientation) {
      case SexualOrientation.Asexual:
        return false;
      case SexualOrientation.Pansexual:
        return (
          avatar2.attributes?.base?.intelligence &&
          avatar2.attributes.base.intelligence >= PANSEXUAL_INTELLECT_THRESHOLD
        );
      case SexualOrientation.Heterosexual:
        return avatar1.appearance?.body?.style === Gender.Male
          ? avatar2.appearance?.body?.style === Gender.Female
          : avatar2.appearance?.body?.style === Gender.Male;
      case SexualOrientation.Homosexual:
        return avatar1.appearance?.body?.style === Gender.Male
          ? avatar2.appearance?.body?.style === Gender.Male
          : avatar2.appearance?.body?.style === Gender.Female;
      case SexualOrientation.Bisexual:
        return true;
      default:
        return true;
    }
  }

  generateRelationships(result: Avatar, world: World) {
    const relationships: Relationship[] = result.relationships || [];

    if (
      !relationships.some(
        (relationship) => relationship.kind === RelationshipKind.Parent
      )
    ) {
      relationships.push({
        kind: RelationshipKind.Parent,
        avatar: '0',
      });
    }

    return relationships;
  }

  private getBurgTopic(burg: Burg) {
    if (burg.capital) {
      return BurgTopic.Capital;
    }

    if (burg.citadel) {
      return BurgTopic.Military;
    }

    if (burg.temple) {
      return BurgTopic.Religion;
    }

    if (burg.port) {
      return BurgTopic.Tradepoint;
    }

    if (burg.shanty) {
      return BurgTopic.Residence;
    }

    return [
      BurgTopic.Farm,
      BurgTopic.Mineral,
      BurgTopic.Wood,
      BurgTopic.Residence,
    ][Math.floor(Math.random() * 3)];
  }
}
