import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '@central-factory/applications/models/application';
import { professions } from '@central-factory/avatars/data/demo/professions.data';
import { UserPreferencesState } from '@central-factory/preferences/states/user-preferences.state';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { FantasyMapGeneratorMap } from '../models/fmg-map';
import { World } from '../models/world';

export type ApplicationsByCategory = Record<string, Application[]>;
export type ApplicationsByAuthor = Record<string, Application[]>;

export type Category = { label: string; icon: string };

export type WorldRepository = {
  src: string;
};

export type WorldContent = {
  content: string;
};

@Injectable({
  providedIn: 'root',
})
export class WorldsState {
  selectedWorldContent$ = new BehaviorSubject<World | undefined>(undefined);
  worlds$ = new BehaviorSubject<WorldRepository[]>([]);

  constructor(
    private httpClient: HttpClient,
    private userPreferencesState: UserPreferencesState<WorldRepository[]>
  ) {
    this.userPreferencesState
      .byKey('worlds.settings.repositories')
      .pipe(
        map((preference) => preference?.value || []),
        tap((repositories) => {
          if (!repositories) {
            return;
          }

          this.worlds$.next(repositories);

          if (repositories.length > 0) {
            this.selectWorld(repositories[0]).subscribe();
          }
        })
      )
      .subscribe();
  }

  public selectWorld(
    world: WorldRepository
  ): Observable<FantasyMapGeneratorMap> {
    return this.httpClient.get<FantasyMapGeneratorMap>(world.src).pipe(
      tap((map) =>
        this.selectedWorldContent$.next({
          map,
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
      )
    );
  }
}
