import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, NgZone } from '@angular/core';
import { Application } from '@central-factory/applications/__generated__/models';
import { professions } from '@central-factory/avatars/data/demo/professions.data';
import { AvatarGenerator } from '@central-factory/avatars/data/generators/avatar.generator';
import { Avatar } from '@central-factory/avatars/__generated__/models';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { UserPreferencesState } from '@central-factory/preferences/states/user-preferences.state';
import { BehaviorSubject, forkJoin, of, tap } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';
import { Back4App } from '../models/b4a-city';
import { GENESIS_STATES, WORLD_STATES } from '../state-machines/world';
import { Burg, FantasyMapGeneratorMap, World } from '../__generated__/models';

export type ApplicationsByCategory = Record<string, Application[]>;
export type ApplicationsByAuthor = Record<string, Application[]>;

export type Category = { label: string; icon: string };

export type Source = {
  src: string;
};

export const CITIES_URL = new InjectionToken<string>('CITIES_URL');
export const CITIES_APPLICATION_ID = new InjectionToken<string>(
  'CITIES_APPLICATION_ID'
);
export const CITIES_APPLICATION_KEY = new InjectionToken<string>(
  'CITIES_APPLICATION_KEY'
);

@Injectable({
  providedIn: 'root',
})
export class WorldsState {
  selectedWorld$ = new BehaviorSubject<World | undefined>(undefined);
  selectedBurg$ = new BehaviorSubject<Burg | undefined>(undefined);
  worlds$ = new BehaviorSubject<World[]>([]);

  burgs$ = this.selectedWorld$.pipe(
    map((world) => world?.map?.cells?.burgs || []),
    share()
  );

  constructor(
    private httpClient: HttpClient,
    private userPreferencesState: UserPreferencesState<Source[]>,

    private avatarGenerator: AvatarGenerator,
    private zone: NgZone,
    private entityManager: EntityManager,
    @Inject(CITIES_URL) private citiesUrl: string,
    @Inject(CITIES_APPLICATION_ID) private citiesApplicationId: string,
    @Inject(CITIES_APPLICATION_KEY) private citiesApiKey: string
  ) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          this.userPreferencesState.byKey('worlds.settings.repositories')
        ),
        map((preference) => preference?.value || []),
        switchMap((repositories) => {
          if (!repositories) {
            return of([]);
          }

          return forkJoin(
            repositories.map((repository) =>
              this.httpClient.get<Source[]>(repository.src)
            )
          );
        }),
        map((worlds) => worlds.reduce((acc, world) => acc.concat(world), [])),
        switchMap((sources) =>
          forkJoin(
            sources.map((source) =>
              this.httpClient.get<World>(source.src).pipe(
                switchMap((world) => {
                  return world.kind === 'digital'
                    ? of(world)
                    : this.httpClient
                        .get<{ results: Back4App.City[] }>(this.citiesUrl, {
                          headers: {
                            'X-Parse-Application-Id': this.citiesApplicationId,
                            'X-Parse-REST-API-Key': this.citiesApiKey,
                          },
                        })
                        .pipe(
                          map(({ results: countries }) => {
                            const burgs: Partial<Burg>[] = countries.map(
                              (country, i) => ({
                                name: country.name,
                                population: country.population,
                                i: country.cityId,
                                y: country.location.longitude,
                                x: country.location.latitude,
                              })
                            );
                            world.map = {
                              cells: {
                                burgs,
                              },
                            } as FantasyMapGeneratorMap;
                            return world;
                          })
                        );
                })
              )
            )
          )
        ),
        tap((worlds) => {
          this.worlds$.next(
            worlds.map((world) => ({
              ...world,
              displayName: world.meta.name || world.map?.info.mapName,
              year: world.year || new Date().getFullYear(),
              avatars: [],
            }))
          );

          if (worlds.length > 0) {
            this.selectWorld(this.worlds$.value[0]);
          }
        })
      )
      .subscribe();
  }

  public generateAvatars(world: World) {
    const worlds: World[] = this.worlds$.getValue(); // (global as any).structuredClone()
    const worldIndex = worlds.findIndex((w) => w.id === world.id);
    const isSelected = this.selectedWorld$.getValue()?.id === world.id;

    worlds[worldIndex] = {
      ...worlds[worldIndex],
      state: {
        [WORLD_STATES.GENESIS]: GENESIS_STATES.POPULATING,
      },
    };

    this.worlds$.next([...worlds]);
    if (isSelected) {
      this.selectedWorld$.next({
        ...worlds[worldIndex],
      });
    }

    this.zone.runOutsideAngular(() => {
      this._generateAvatars(world).then((avatars) => {
        worlds[worldIndex] = {
          ...worlds[worldIndex],
          avatars,
          state: {
            [WORLD_STATES.GENESIS]: GENESIS_STATES.DEMOGRAPHICAL,
          },
        };

        this.zone.run(() => {
          this.worlds$.next([...worlds]);

          if (isSelected) {
            this.selectedWorld$.next({
              ...worlds[worldIndex],
            });
          }
        });
      });
    });
    // const burgs = world.map.cells.burgs || [];
    // world.avatars = world.avatars || [];

    // burgs.reduce<Avatar[]>((acc, burg, i) => {
    //   const burgAvatars = this.avatarGenerator.generateBurg(world, burg);

    //   const avatars = this.avatarGenerator
    //     .generateDemigods(world)
    //     .concat(burgAvatars);

    //   world.avatars?.push(...avatars);
    //   console.debug('generated avatars', `${i}/${burgs.length}`);

    //   return acc.concat(avatars);
    // }, []);
  }

  public selectBurg(burg: Burg) {
    this.selectedBurg$.next(burg);
  }

  public selectWorld(world: World) {
    const clone = (global as any).structuredClone;
    this.selectedWorld$.next(
      clone({
        ...world,
        year: world.year || new Date().getFullYear(),
        professions,
        archetypes: [
          {
            id: 'noble',
            appearances: [],
            identity: {
              givenName: 'Noble',
              icon: 'assets/icons/mdi/chess-king.svg',
              mainProfession: 'noble',
              secondaryProfession: 'judge',
            },
            outfits: [
              {
                name: 'Noble',
                back: 'cape/normal/cape_gray',
                feet: 'shoes/black_shoes',
                hands: undefined,
                head: undefined,
                legs: 'skirt/legion_skirt',
                shoulders: 'plate/legion/legionbauldron_gold',
                torso: {
                  layer1: 'chain/mail',
                  layer2: 'plate/legion/legionplate_gold',
                },
              },
            ],
          },
          {
            id: 'soldier',
            appearances: [],
            identity: {
              givenName: 'Soldier',
              icon: 'assets/icons/mdi/chess-knight.svg',
              mainProfession: 'fighter',
              secondaryProfession: 'guardian',
            },
            outfits: [
              {
                name: 'Soldier',
                back: 'cape/normal/cape_gray',
                feet: 'shoes/black_shoes',
                hands: {
                  slot1: {
                    rightHand: 'spear',
                    leftHand: 'shield',
                  },
                },
                head: {
                  headgear: 'helms/barbarian_viking/bronze',
                },
                legs: 'skirt/legion_skirt',
                shoulders: 'plate/legion/legionbauldron_bronze',
                torso: {
                  layer1: 'chain/mail',
                  layer2: 'plate/legion/legionbauldron_bronze',
                },
              },
            ],
          },
          {
            id: 'farmer',
            appearances: [],
            identity: {
              givenName: 'Farmer',
              icon: 'assets/icons/mdi/silverware-fork.svg',
              mainProfession: 'farmer',
              secondaryProfession: 'trader',
            },
            outfits: [
              {
                name: 'Farmer',
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
          },
          {
            id: 'woodcutter',
            appearances: [],
            identity: {
              givenName: 'Woodcutter',
              icon: 'assets/icons/mdi/axe.svg',
              mainProfession: 'woodcutter',
              secondaryProfession: 'trader',
            },
            outfits: [
              {
                name: 'Woodcutter',
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
          },
          {
            id: 'miner',
            appearances: [],
            identity: {
              givenName: 'Miner',
              icon: 'assets/icons/mdi/pickaxe.svg',
              mainProfession: 'miner',
              secondaryProfession: 'trader',
            },
            outfits: [
              {
                name: 'Miner',
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
          },
          {
            id: 'priest',
            appearances: [],
            identity: {
              givenName: 'Priest',
              icon: 'assets/icons/mdi/cross.svg',
              mainProfession: 'priest',
              secondaryProfession: 'saint',
            },
            outfits: [
              {
                name: 'Priest',
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
          },
          {
            id: 'citizen',
            appearances: [],
            identity: {
              givenName: 'Citizen',
              icon: 'assets/icons/mdi/home-map-marker.svg',
              mainProfession: 'artist',
              secondaryProfession: 'scholar',
            },
            outfits: [
              {
                name: 'Citizen',
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
          },
          {
            id: 'merchant',
            appearances: [],
            identity: {
              givenName: 'Merchant',
              icon: 'assets/icons/mdi/hand-coin.svg',
              mainProfession: 'trader',
            },
            outfits: [
              {
                name: 'Merchant',
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
          },
          {
            id: 'nomad',
            appearances: [],
            identity: {
              givenName: 'Nomad',
              icon: 'assets/icons/mdi/wallet-travel.svg',
              secondaryProfession: 'technomancer',
            },
            outfits: [
              {
                name: 'Traveling Clothes',
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
          },
          {
            id: 'assistant',
            appearances: [],
            identity: {
              givenName: 'Assistant',
              icon: 'assets/icons/mdi/assistant.svg',
              mainProfession: 'assistant',
              secondaryProfession: 'technomancer',
            },
            outfits: [
              {
                name: 'Assistant',
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
          },
        ],
      })
    );
    const worldBurgs: Burg[] = world.map?.cells.burgs;
    if (worldBurgs.length) {
      const startBurg =
        worldBurgs.find((w) => w.i === 2988507) || worldBurgs[0];

      this.selectBurg(startBurg);
    }
  }

  private async _generateAvatars(world: World) {
    const burgs = world.map?.cells.burgs || [];
    let result: Avatar[] = [];
    const worlds = this.worlds$.getValue();
    const worldIndex = worlds.findIndex((w) => w.id === world.id);
    const isSelected = world.id === this.selectedWorld$.value?.id;

    result = result.concat(this.avatarGenerator.generateDemigods(world));

    for (let i = 0; i < burgs.length; i++) {
      const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
          result = result.concat(
            this.avatarGenerator.generateBurg(world, burgs[i])
          );
          // THIS doesn't work but at least the window doesn't freeze
          worlds[worldIndex].avatars = result;

          this.zone.run(() => {
            this.worlds$.next(worlds);
            if (isSelected) {
              this.selectedWorld$.next(worlds[worldIndex]);
            }
          });

          // console.debug(
          //   `generated avatars for burg ${burgs[i].name}: ${i}/${burgs.length}`
          // );
          resolve();
        }, 0);
      });
      await promise;
    }

    return result;
  }
}
