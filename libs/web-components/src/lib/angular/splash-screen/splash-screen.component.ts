import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from '@central-factory/core/angular/services/audio.service';

export enum SplashScreenState {
  Visible = 'visible',
  Hidden = 'hidden',
}

export enum LogoState {
  Visible = 'visible',
  Hidden = 'hidden',
}

@Component({
  selector: 'cf-splash-screen',
  template: `
    <div cfBlock="splash-screen" [@splashState]="state">
      <div cfElem="content">
        <h1 cfElem="title">{{ title }}</h1>
        <div cfElem="spinner">
          <div cfElem="logo" [@logoState]="logoState">
            <img cfElem="logo-image" [src]="logo" alt="logo" />
          </div>
          <div cfElem="spinner-content" *ngIf="logoState !== 'visible'">
            <cf-spinner></cf-spinner>
          </div>
        </div>
        <p cfElem="loading-text" *ngIf="loadingText">
          {{ loadingText }}
        </p>
      </div>
    </div>
  `,
  animations: [
    trigger('splashState', [
      state(
        SplashScreenState.Visible,
        style({
          opacity: 1,
          display: 'block',
        })
      ),
      state(
        SplashScreenState.Hidden,
        style({
          opacity: 0,
          display: 'none',
        })
      ),
      transition(
        `${SplashScreenState.Hidden} => ${SplashScreenState.Visible}`,
        [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))]
      ),
      transition(
        `${SplashScreenState.Visible} => ${SplashScreenState.Hidden}`,
        [animate('1s', style({ opacity: 0 }))]
      ),
    ]),
    trigger('logoState', [
      state(
        LogoState.Visible,
        style({
          opacity: 1,
          display: 'flex',
        })
      ),
      state(
        LogoState.Hidden,
        style({
          opacity: 0,
          display: 'none',
        })
      ),
      transition(`${LogoState.Hidden} => ${LogoState.Visible}`, [
        style({ display: 'flex', opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(`${LogoState.Visible} => ${LogoState.Hidden}`, [
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SplashScreenComponent implements OnInit {
  @Input() title = 'Portal';
  @Input() logo = 'assets/logo.svg';
  @Input() spinnerType = 'cog';
  @Input() loadingTexts = [
    'Setting up the rockets...',
    'Calling the crew..',
    'Jumping to the cyber space...',
  ];
  @Input() welcomeMessage = 'Welcome to the Metaverse';
  @Input() musicSrc =
    'assets/sounds/sfx/twin-musicom__operating_system_sting.mp3';
  @Input() playMusic = true;

  loadingText?: string;
  state = SplashScreenState.Visible;
  logoState = LogoState.Hidden;

  private selectedLoadingTextIndex?: number = undefined;

  constructor(private audioService: AudioService) {}

  ngOnInit() {
    this.displaySplashScreen();

    if (this.playMusic) {
      this.audioService.play(this.musicSrc);
    }
  }

  private async displaySplashScreen() {
    this.displayLoadingText();

    await this.wait(5000);

    this.logoState = LogoState.Visible;
    this.selectedLoadingTextIndex = undefined;
    this.loadingText = this.welcomeMessage;

    await this.wait(3000);

    this.state = SplashScreenState.Hidden;
  }

  private async displayLoadingText() {
    if (this.logoState === LogoState.Visible) {
      this.selectedLoadingTextIndex = undefined;
      this.loadingText = this.welcomeMessage;
      return;
    }

    const previousLoadingTextIndex =
      this.selectedLoadingTextIndex === undefined
        ? -1
        : this.selectedLoadingTextIndex;
    const nextLoadingTextIndex = previousLoadingTextIndex + 1;

    if (nextLoadingTextIndex >= this.loadingTexts.length) {
      this.selectedLoadingTextIndex = undefined;
      await this.wait(1000);
      this.displayLoadingText();
      return;
    }

    this.selectedLoadingTextIndex = nextLoadingTextIndex;
    this.loadingText = this.loadingTexts[nextLoadingTextIndex];

    await this.wait(1000);

    this.displayLoadingText();
  }

  private wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
