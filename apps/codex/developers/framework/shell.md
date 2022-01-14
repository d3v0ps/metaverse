---
id: shell
title: Shell Framework
sidebar_label: Offline-first Micro-frontends Management Shell based on [Angular](https://angular.io/)
slug: /framework/shell
---

* Modules managed with [Nx](https://nrwl.io/nx) and documented with [Storybook](https://storybook.js.org/) and [Compodoc](https://compodoc.app/).
* Web Components based on [SCSS](https://sass-lang.com/) and CSS variables themed through [Style Dictionaries](https://amzn.github.io/style-dictionary/#/).  is used for documentation.
* Dependencies injected through [Angular](https://angular.io/guide/dependency-injection) in the FrontEnd side and [NestJs](https://nestjs.com/docs/5.x/getting-started) in the BackEnd side.
* Offline-first Entity Manager and Repositories built on top of [RxDB](https://rxdb.info/) with query observables and ACL.
* Desktop native with [Electron](https://electronjs.org/) and [Electron Build](https://www.electron.build/cli).
* Tabs, Iframes and[ Webpack Module Federation](https://webpack.js.org/concepts/module-federation/) apps support.
* 6495 Icons from [Material Design Icons](https://materialdesignicons.com/) and 2135 [Simple Icons](https://simpleicons.org/).
* Keyboard shortcuts with [Hotkeys](https://www.npmjs.com/package/hotkeys) and [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API).

## Main Dependencies

### Frameworks

| Package | Platforms | Usage |
| ------- | --------- | ----- |
| [Angular](https://angular.io/docs) | Client | IoC Container, Platform, Renderer, Lazy Loader |
| [NestJS](https://nestjs.com/)      | Server | IoC Container, Platform, Renderer              |

### Platforms

| Package | Platforms | Usage |
| ------- | --------- | ----- |
| [Electron](https://electronjs.org/) | Desktop | Desktop native Platform |
| [Capacitor](https://capacitorjs.com/) | Mobile | Mobile native Platform |

### Programming Patterns

| Package | Platforms | Usage |
| ------- | --------- | ----- |
| [FxTS](https://fxts.dev/) | Any | Functional Programming, Iterables |
| [RxJS](https://rxjs.dev/) | Any | Reactive Programming, Observables |

### State Management

| Package | Platforms | Usage |
| ------- | --------- | ----- |
| [RxDB](https://rxdb.info/)           | Any | Entity Manager, Repositories, Offline-first |
| [Elf](https://ngneat.github.io/elf/) | Any | Reactive Store                              |

