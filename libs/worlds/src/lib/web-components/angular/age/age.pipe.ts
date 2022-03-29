import { Pipe, PipeTransform } from '@angular/core';
import { WorldsState } from '@central-factory/worlds/states/worlds.state';
import { map, Observable } from 'rxjs';

@Pipe({ name: 'cfAge' })
export class AgePipe implements PipeTransform {
  constructor(private worldsState: WorldsState) {}

  transform(
    birthDate: number | string | Date,
    worldDate?: number | string | Date
  ): Observable<number> {
    return this.worldsState.selectedWorld$.pipe(
      map((world) => {
        let worldYear =
          world?.map?.settings?.options?.year || new Date().getFullYear();

        if (worldDate) {
          worldYear = new Date(worldDate).getFullYear();
        }

        return worldYear - new Date(birthDate).getFullYear();
      })
    );
  }
}
