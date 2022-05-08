# The Central Factory's Metaverse

In memory of Aaron Swartz, Antonio Escohotado and so many others who fought for people's freedom.

Metaverse Operating System made for the People.

![Analogic Worlds](https://i.imgur.com/yyQP5vJ.png)
Analogic Worlds

![Digital Worlds II](https://i.imgur.com/79wKYrN.png)
Digital Worlds

![Dev Mode](https://i.imgur.com/uUomYKu.png)
Dev Mode

![Integrated DevTools](https://i.imgur.com/ATOIafx.png)
Integrated DevTools

## Early Access Preview 05/2022

### Context

This project has been in my head my whole life, and covers fields as diverse as video games or my personal financial management. Since I was a child I have been passionate about digital and automotive media and the utilities they provide us. As a programmer and lover of video games, I recognized in them the power to create new worlds, and even replicas of the real world. However, with the spectacular growth of the software industry, our data and the way we interact with it has become fragmented. Some believe that NFTs have brought about the Metaverse. I personally believe that standards and operating systems must evolve to provide a truly free and accessible experience of the metaverse.

PS: Currently this project does not include any functionality implemented with BlockChain or NFTs. We plan to add support in the future but it will be totally optional and unnecessary to enjoy the experience.

### What is this

It is difficult to understand what this project is, without understanding its objective. This project is born in multiple occasions as my little personal dashboard, with a couple of links and useful stuff. The essence is to centralize all my data in a private place, and integrate all the possible services that I use in my day to day, detecting possible synergies where they exist. I thought about gamifying some of the tasks that were difficult for me and thus improve my overall productivity. When people started talking about the Metaverse, this project changed again. Suddenly it seemed that everyone wanted something similar (for example, to buy a pair of sneakers in the real world and have their avatar wear them in the digital world). I wanted that too, in my own little private virtual space. And now, 7 months later this virtual space is no longer private, I consider it my duty for all that Open Source has given me. I also don't want a world where to access a virtual space I need glasses and a Facevil Corp. account. I have always believed in the web as the real Metaverse, it was always there, only nobody dared to explore it in new ways. All the code is made with JavaScript technologies and can be run in a web browser with no problems. This is more of an OS or a Web Browser than a blockchain with NFTs at 45% commission. Honestly, it's an overly ambitious project, and I wouldn't do it if it wasn't the project of my life. Sometimes it's hard to talk about the project in areas like the Metaverse or Operating Systems, so I personally like to call it, my Monoverse.

### Roadmap for Humans

The first stable version (v1.0.0) will be released later this year.

My priority right now is to improve the user experience, fixing bugs and enabling the data writing layer.

Once this is done, I will start including the features that I consider a priority from the point of view of usability as an application:
* P2P chat rooms with video calling and streaming system.
* 2D pixel art explorable maps of procedural cities
* Inventory and equipment. Shopping system.
* First Battle and Role Playing System
* SDK Generators (TypeScript, GraphQL, Unreal)
* First free Single Player Campaign storyline

### If you have read this far

I would appreciate any kind of help or support with the project, either through feedback, both bugs and new proposals. Please take the time to explore the web or the code even with all its gaps and feel free to contact me if you have any suggestions. You can find me on GitHub as [D3v0ps](https://github.com/d3v0ps) or contact me directly at my email address: [aitorllj93@gmail.com](mailto:aitorllj93@gmail.com)


---

## About this Repository

TypeScript Open Source packages for the Metaverse.

This code includes The Central Factory's Metaverse Core packages and Community Editions.

Property of [The Central Factory Foundation](https://github.com/central-factory/foundation). [MIT Licensed software](https://github.com/central-factory/metaverse/raw/main/LICENSE)


## Development

### Serve apps

```sh
# run the portal app
nx serve portal
# run the codex website
nx serve codex
```

### Building themes

```sh
nx run web-components:build-themes
```


## Running storybook

```sh
nx run <module>:storybook
# Example:
nx run assets:storybook
```
## Running linters & tests

```sh
nx run-many --target=lint --all
```

## Troubleshooting

### You need to make sure that /mnt/d/Workspace/metaverse/node_modules/electron/dist/chrome-sandbox is owned by root and has mode 4755.

This is probably because you're running the app from a Windows Subsystem for Linux (WSL) container. The easiest way to fix this is to install the Electron npm package for Windows:

```sh	
# Uninstall the Electron package for Linux
npm uninstall electron
# Change npm config platform
export npm_config_platform=win32
# Install the Electron package for Windows
npm install electron
# Unset the environment variable
unset npm_config_platform
# Remove the changes in the package and package-lock files
```

Streaming: JIT Packages
