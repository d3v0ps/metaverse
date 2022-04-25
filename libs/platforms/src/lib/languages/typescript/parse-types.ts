/* eslint-disable no-case-declarations */
import { spawn } from 'child_process';
import { JSONSchema4 as JSONSchema } from 'json-schema';

export const parseTypes = (
  path: string,
  rootType = 'Root'
): Promise<JSONSchema> => {
  return new Promise((resolve, reject) => {
    const child = spawn('node_modules/.bin/typescript-to-json-schema', [
      '--path',
      path,
      '--type',
      rootType,
    ]);

    let result: JSONSchema;

    child.stdout.on('data', (data) => {
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        reject(error);
      }
    });

    child.on('close', () => resolve(result));
  });
};
