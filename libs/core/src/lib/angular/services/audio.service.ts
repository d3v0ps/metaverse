import { Injectable } from '@angular/core';
import { Howl, Howler, HowlOptions } from 'howler';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  howler = Howler;

  set volume(value: number) {
    this.howler.volume(value);
  }

  get volume(): number {
    return this.howler.volume();
  }

  mute(value = true) {
    this.howler.mute(value);
  }

  howl(options: HowlOptions) {
    return new Howl(options);
  }

  play(src: string) {
    const sound = new Howl({
      src: [src],
      autoplay: true,
    });

    return sound;
  }

  loop(src: string) {
    const sound = new Howl({
      src: [src],
      loop: true,
      autoplay: true,
    });

    return sound;
  }
}
