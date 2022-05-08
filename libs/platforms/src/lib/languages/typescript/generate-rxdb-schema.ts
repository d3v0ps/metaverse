import { render } from '@central-factory/platforms/engines/handlebars/render';
import { Logger } from '@nestjs/common';
import { kebab as kebabCase } from 'case';
import { ensureDir, writeFile } from 'fs-extra';
import { resolve } from 'path';
import { AugmentedJSONSchema, JSONSchema } from '../json/types/json-schema';
import { getRootTypeNamesFromSchema } from '../json/utils/get-root-type-names-from-schema';
import { getSchemasFromRoot } from '../json/utils/get-schemas-from-root';
import { removeRefs } from '../json/utils/remove-refs';

const logger = new Logger('Generate RxDB Schemas');

const schemaTemplatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/typescript/templates/rxdb-schema.ts.hbs'
);

const indexTemplatePath = resolve(
  process.cwd(),
  'libs/platforms/src/lib/languages/typescript/templates/rxdb-index.ts.hbs'
);

const jsonSchema =
  (schemas: AugmentedJSONSchema[]) => (current: AugmentedJSONSchema) => {
    const currentSchema = JSON.parse(
      JSON.stringify(schemas.find((def) => def.name === current.name))
    );

    if (!currentSchema) {
      return '';
    }
    removeRefs(currentSchema, schemas);
    delete currentSchema['templateProperties'];
    delete currentSchema['name'];
    // currentSchema.definitions = JSON.parse(
    //   JSON.stringify(params.schema.definitions)
    // );
    return JSON.stringify(currentSchema, undefined, 2);
  };

export const generateRxDBSchemasFromSchema = async (
  schema: JSONSchema,
  outputFolder: string
): Promise<void> => {
  const rootTypeNames = getRootTypeNamesFromSchema('Root', schema);
  const schemas = getSchemasFromRoot(schema);

  const rootSchemas = schemas.filter((schema) =>
    rootTypeNames.includes(schema.name)
  );

  await ensureDir(outputFolder);
  await Promise.all(
    rootSchemas.map(async (rootSchema) => {
      const name = rootSchema.name;
      const content = await render(
        schemaTemplatePath,
        {
          schema: rootSchema,
        },
        {
          jsonSchema: jsonSchema(schemas),
        }
      );

      await writeFile(
        resolve(outputFolder, `${kebabCase(rootSchema.name)}.ts`),
        content
      );
    })
  );

  const indexContent = await render(indexTemplatePath, {
    schemas: rootSchemas,
  });
  await writeFile(resolve(outputFolder, `index.ts`), indexContent);
};
