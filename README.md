# The Central Factory's Metaverse

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
