import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const mockData = [
  {
    name: 'Default',
    path: 'assets/themes/default/variables.css',
  },
  {
    name: 'Matrix',
    path: 'assets/themes/matrix/variables.css',
  },
  {
    name: 'Bubbles',
    path: 'assets/themes/bubbles/variables.css',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AvailableThemesState {
  themes$ = new BehaviorSubject<any[]>(mockData);
}
