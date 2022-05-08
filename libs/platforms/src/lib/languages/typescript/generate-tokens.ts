import { render } from '@central-factory/platforms/engines/handlebars/render';
import { Logger } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { dirname, resolve } from 'path';

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
  const types = Object.entries(
    (schema.types as Record<string, Typing>) || {}
  ).map(([name, properties]) => ({
    name,
    isUnion:
      properties['type'] &&
      typeof properties['type'] === 'string' &&
      (properties['type'].includes('|') || properties['type'].includes('&')),
    raw: properties,
    properties: Object.entries(properties).map(([name, value]) =>
      Object.assign(
        {
          name,
        },
        typeof value === 'string' ? {} : value
      )
    ),
  }));

  const templateParams = {
    types,
    roots: schema.roots || types.map((type) => type.name),
    imports: schema.imports
      ? Object.entries(schema.imports).map(([name, path]) => ({ name, path }))
      : [],
    enums: schema.enums
      ? Object.entries(schema.enums).map(([name, properties]) => ({
          name,
          properties: Object.entries(properties as any).map(([name, type]) => ({
            name,
            type,
          })),
        }))
      : [],
  };

  const content = await render(templatePath, templateParams);

  await ensureDir(dirname(outputFolder));
  await writeFile(outputFolder, content);

  logger.log(`[${schema.name}]: Generated. Total: ${types?.length}`);
};
