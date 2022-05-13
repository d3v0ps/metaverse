import {
  File,
  FSTreeRepositoryAdapter,
} from '@central-factory/persistence/adapters/fs-tree.adapter';
import { TAGS_PROVIDER } from '@central-factory/persistence/data/tags';
import { FSTreeRepository } from '@central-factory/persistence/repositories/fs-tree.repository';
import { generateExternalTypes } from '@central-factory/platforms/languages/typescript/generate-external-types';
import { augmentTokensSchema } from '@central-factory/platforms/languages/typescript/utils/augment-tokens-schema';
import { TokensSchema } from '@central-factory/platforms/__generated__/models';
import { Provider } from '@nestjs/common';
import { extname } from 'path';
import { parse } from 'yaml';
import { DomainService } from './domain.service';

export const TOKENS_REPOSITORY = 'tokensRepository';
export const TOKENS_REPOSITORY_ADAPTER = 'tokensRepositoryAdapter';
export const TOKENS_REPOSITORY_ADAPTER_OPTIONS =
  'tokensRepositoryAdapterOptions';

export const TOKENS_REPOSITORY_CONTENT_PARSER = 'tokensRepositoryContentParser';

export const domainProviders: Provider[] = [
  {
    provide: TOKENS_REPOSITORY_ADAPTER_OPTIONS,
    useValue: {
      tags: TAGS_PROVIDER.useValue,
      mountFolder: `${process.cwd()}/libs/{rootFolder}`,
      roots: ['src/lib/models'],
      scan: {
        extensions: ['yaml'],
      },
    },
  },
  {
    provide: TOKENS_REPOSITORY_CONTENT_PARSER,
    useValue: async (content: string, { fileName, path }: File) => {
      if (extname(path) !== '.yaml') {
        return;
      }

      const data = parse(content);
      const extension = extname(fileName);

      data.name = fileName.replace(extension, '');
      data.file = path;

      const externalSchemas = await generateExternalTypes(data);
      const schema = augmentTokensSchema(data);

      return [...externalSchemas, schema].reduce<TokensSchema>(
        (result, { imports, enums, types, roots }) =>
          Object.assign(result, {
            imports: result.imports.concat(imports),
            enums: result.enums.concat(enums),
            types: result.types.concat(types),
            roots: result.roots.concat(roots),
          }),
        {
          name: schema.name,
          state: schema.state,
          domain: schema.domain,
          description: schema.description,
          file: schema.file,
          enums: [],
          imports: [],
          roots: [],
          types: [],
        }
      );
    },
  },
  {
    provide: TOKENS_REPOSITORY_ADAPTER,
    useFactory: (opt, parser) => new FSTreeRepositoryAdapter(opt, parser),
    inject: [
      TOKENS_REPOSITORY_ADAPTER_OPTIONS,
      TOKENS_REPOSITORY_CONTENT_PARSER,
    ],
  },
  {
    provide: TOKENS_REPOSITORY,
    useFactory: (adapter) => new FSTreeRepository(adapter),
    inject: [TOKENS_REPOSITORY_ADAPTER],
  },
  {
    provide: DomainService,
    useFactory: (tokens) => new DomainService(tokens),
    inject: [TOKENS_REPOSITORY],
  },
];
