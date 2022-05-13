import tokenDictionary, { registerTemplate } from './token-dictionary';

export class TokenDictionaryGenerator {
  private webFormats = [
    // Domain
    'json/schema',
    'ts/json-schema',
    'ts/model',
    'ts/service',
    'ts/mapper',
    'ts/generator',
    'ts/form', // (layout)
    'ts/list', // (filters & layout)
    'ts/detail', // (layout)

    // Impl
    'ts/repository/map',
    'ts/repository/rxdb',
    'ts/repository/fs-tree',
    'ts/repository/dictionary',
    'ts/repository/rxdb',
    'ts/generator/fake',
    'ts/generator/gpt3',
    'ts/validator/class-validator',
    'ts/mapper/class-transform',
    'ts/dto/oapi',
    'ts/dto/graphql',
    'ts/gateway/oapi',
    'ts/gateway/graphql',

    // Future
    'ts/machine/xstate',
    'ts/repository/in-memory',

    'ts/component/angular',
    'ts/component/react',
    'xml/scene/tiled',
    'xml/scene/unreal',
  ];

  constructor() {
    this.webFormats.forEach((format) => registerTemplate(format));
  }

  generate(source: string[], platforms?: string[]) {
    const generator = tokenDictionary.extend({
      source: source,
      platforms: {
        web: {
          transformGroup: 'web',
          files: this.webFormats.map((format) => ({
            format,
            destination: '__generated__',
          })),
        },
      },
    });

    return platforms?.length
      ? platforms.map((p) => generator.buildPlatform(p))
      : generator.buildAllPlatforms();
  }
}
