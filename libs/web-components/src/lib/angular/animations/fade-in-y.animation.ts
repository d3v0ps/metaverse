import { animate, animation, keyframes, style } from '@angular/animations';
import { DEFAULT_TIMING } from './constants';

export function fadeInY(a: any, b: any) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1,
        }),
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, a, b } }
  );
}
