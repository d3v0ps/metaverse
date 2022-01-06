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
## Example:
nx run assets:storybook
```
## Running linters & tests

```sh
nx run-many --target=lint --all
```
