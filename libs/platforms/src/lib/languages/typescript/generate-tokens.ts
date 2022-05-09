import { render } from '@central-factory/platforms/engines/handlebars/render';
import { Logger } from '@nestjs/common';
import { pascal } from 'case';
import { ensureDir, writeFile } from 'fs-extra';
import { dirname, resolve } from 'path';
import { ImportToken } from '../../__generated__/models';
import { augmentTokensSchema } from './utils/augment-tokens-schema';

const logger = new Logger('Generate Typescript Tokens');

type PropItem = {
  [key: string]: {
    type: string;
    required?: boolean;
  };
};

type Typing = {
  type?: string;
} & PropItem;

const templatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/typescript/templates/token.d.ts.hbs'
);

export const generateTypescriptTokens = async (
  schema: any,
  outputFolder: string
): Promise<void> => {
  const templateParams = augmentTokensSchema(schema);

  const content = await render(templatePath, templateParams, {
    importTokens: (imports: ImportToken[]) =>
      imports
        .reduce<
          {
            path: string;
            tokens: ImportToken[];
          }[]
        >((acc, curr) => {
          let group = acc.find((item) => item.path === curr.path);
          if (group) {
            group.tokens.push(curr);
          } else {
            group = { path: curr.path, tokens: [curr] };
            acc.push(group);
          }

          return acc;
        }, [])
        .map(
          (g) =>
            `import { ${g.tokens
              .map((t) => pascal(t.name))
              .join(', ')} } from '${g.path}';`
        )
        .join('\n'),
    exportTokens: (imports: ImportToken[]) =>
      imports
        .reduce<
          {
            path: string;
            tokens: ImportToken[];
          }[]
        >((acc, curr) => {
          let group = acc.find((item) => item.path === curr.path);
          if (group) {
            group.tokens.push(curr);
          } else {
            group = { path: curr.path, tokens: [curr] };
            acc.push(group);
          }

          return acc;
        }, [])
        .map(
          (g) =>
            `export { ${g.tokens
              .map((t) => pascal(t.name))
              .join(', ')} } from '${g.path}';`
        )
        .join('\n'),
    typeRecordToken: (type: string) => {
      const [key, value] = type
        .replace(/Record<([^>]+)>/, '$1')
        .split(',')
        .map((t) => t.trim());
      return `[key: ${key}]: ${value};`;
    },
  });

  await ensureDir(dirname(outputFolder));
  await writeFile(outputFolder, content);

  logger.log(
    `[${schema.name}]: Generated. Total: ${templateParams.types?.length}`
  );
};
