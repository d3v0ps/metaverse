# The Central Factory's Metaverse

TypeScript Open Source packages for the Metaverse.

This code includes The Central Factory's Metaverse Core packages and Community Editions.

Property of [The Central Factory Foundation](https://github.com/central-factory/foundation). [MIT Licensed software](https://github.com/central-factory/metaverse/raw/main/LICENSE)


## Development

### Serve apps

```sh
# run the portal app
nx run portal
# run the codex website
nx run codex
```

### Serve documentation

```bash
# generate compodoc documentation from all projects into codex
nx run-many --target=compodoc --all --configuration build-codex
nx run-many --target=build-storybook --all --configuration build-codex

# serve codex
nx serve codex
```
