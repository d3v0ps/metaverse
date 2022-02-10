import { Injectable } from '@angular/core';
import { filter, interval, map, share, startWith } from 'rxjs';

export type TimeUnit = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  clock$ = interval(1000).pipe(
    map(() => new Date()),
    startWith(new Date()),
    share()
  );

  units = {
    ms: 1,
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
    w: 604800000,
    M: 2592000000,
    y: 31536000000,
  };

  everyMinute$ = interval(60000).pipe(
    map(() => new Date()),
    startWith(new Date())
  );
  everyHour$ = interval(3600000).pipe(
    map(() => new Date()),
    startWith(new Date())
  );
  everyDay$ = interval(86400000).pipe(
    map(() => new Date()),
    startWith(new Date())
  );
  everyWeek$ = interval(604800000).pipe(
    map(() => new Date()),
    startWith(new Date())
  );
  everyMonth$ = interval(2592000000).pipe(
    map(() => new Date()),
    startWith(new Date())
  );
  everyYear$ = interval(31536000000).pipe(
    map(() => new Date()),
    startWith(new Date())
  );

  every(amount: number, unit: TimeUnit) {
    return interval(amount * this.units[unit]).pipe(map(() => new Date()));
  }

  at(time: Date) {
    return interval(1000).pipe(
      map(() => {
        const now = new Date();
        if (now.getTime() >= time.getTime()) {
          return time;
        }
        return null;
      }),
      filter((date) => date !== null)
    );
  }
}
