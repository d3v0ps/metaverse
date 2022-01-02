import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { themes } from '../../data/base/customization/themes.data';
import { Theme } from '../../models/customization';

@Injectable({
  providedIn: 'root',
})
export class AvailableThemesState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  themes$ = new BehaviorSubject<Theme[]>(themes);
}
