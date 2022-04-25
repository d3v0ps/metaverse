import { parseTypes } from '@central-factory/platforms/languages/typescript/parse-types';
import { Logger } from '@nestjs/common';
import { ensureDir, readdir, writeFile } from 'fs-extra';
import { dirname, resolve } from 'path';
import { getNameFromRef } from '../json/utils/get-name-from-ref';
import { renderTypes } from './render-types';

const logger = new Logger('Generate GQL Types');

export const generateTypeScriptTypesFromFile = async (
  input: string,
  output: string
): Promise<void> => {
  const schema = await parseTypes(input);

  if (!schema) {
    throw new Error(`Unable to load schema from file ${input}`);
  }

  if (!schema.definitions) {
    throw new Error(`Schema does not contain definitions`);
  }

  logger.verbose(
    `[${input.replace(
      process.cwd(),
      ''
    )}]: Generating types for the following root interfaces: [${schema.definitions[
      'Root'
    ].anyOf
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ?.map((x) => getNameFromRef(x.$ref!))
      .join(', ')}]. Total definitions found: ${
      Object.keys(schema.definitions)?.length
    }`
  );

  const definitions = Object.assign({}, schema.definitions);
  delete definitions['Root'];

  const templateParams = {
    definitions: Object.entries(definitions).map(([name, schema]) => ({
      ...schema,
      name,
      templateProperties: schema.properties
        ? Object.entries(schema.properties).map(([name, propSchema]) => {
            const requiredInRoot = Array.isArray(schema.required)
              ? schema.required?.includes(name)
              : false;

            return {
              ...propSchema,
              name,
              required:
                requiredInRoot ||
                (Array.isArray(propSchema.required)
                  ? propSchema.required?.includes(name)
                  : propSchema.required === true),
              templateProperties: [],
            };
          })
        : [],
    })),
  };

  const content = await renderTypes(templateParams);

  await ensureDir(dirname(output));
  await writeFile(output, content);
};

export const generateTypescriptTypesFromFolder = async (
  inputFolder: string,
  outputFolder = resolve(inputFolder, '__generated__', 'types')
): Promise<void[]> => {
  const files = (await readdir(inputFolder)).filter((file) =>
    file.endsWith('index.d.ts')
  );

  return Promise.all(
    files.map((file) =>
      generateTypeScriptTypesFromFile(
        resolve(inputFolder, file),
        resolve(outputFolder, file.replace('.d.ts', '.ts'))
      )
    )
  );
};
