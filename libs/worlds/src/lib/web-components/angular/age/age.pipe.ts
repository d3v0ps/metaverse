import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cfAge' })
export class AgePipe implements PipeTransform {
  // constructor(private worldsState: WorldsState) {}

  transform(
    birthDate: number | string | Date,
    worldDate?: number | string | Date
  ): string {
    let worldYear =
      /* world?.map?.settings?.options?.year ||  */ new Date().getFullYear();

    if (worldDate) {
      worldYear = new Date(worldDate).getFullYear();
    }

    const years = worldYear - new Date(birthDate).getFullYear();

    return `${years} year${years === 1 ? '' : 's'} old`;
    // return this.worldsState.selectedWorld$.pipe(
    //   map((world) => {
    //   })
    // );
  }
}
