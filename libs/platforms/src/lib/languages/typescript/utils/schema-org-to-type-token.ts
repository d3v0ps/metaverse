import { Typing } from '@central-factory/platforms/__generated__/models';
import { pascal as pascalCase } from 'case';
import { SchemaOrg, SchemaOrgNode } from '../models/schema-org';
import { primitiveTypes } from './augment-tokens-schema';

export const primitives: Record<string, string> = {
  Text: 'string',
  Number: 'number',
  Boolean: 'boolean',
  Date: 'string',
  Class: 'any',
  DataType: 'any',
};

const numberToText = (number: number) =>
  [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ][number];

export const getTypeNameFromId = (id: string) => {
  const name = id.replace(/^schema:/, '').replace(/^rdfs:/, '');
  const startsWithNumber = /^\d/.test(name);
  const value = startsWithNumber
    ? `${numberToText(+name[0])}${name.slice(1)}`
    : name;
  return pascalCase(value);
};

export const isEnumRecursive = (
  def: SchemaOrgNode,
  schema: SchemaOrg
): boolean => {
  if (def['@id'] === 'schema:Enumeration') {
    return true;
  }

  const subclass = def['rdfs:subClassOf'] && def['rdfs:subClassOf']['@id'];
  if (subclass === 'schema:Enumeration') {
    return true;
  }

  const parent = schema['@graph']?.find((d) => d['@id'] === subclass);

  if (parent) {
    return isEnumRecursive(parent, schema);
  }

  return false;
};

export const schemaOrgToEnumToken = (
  def: SchemaOrgNode,
  schema: SchemaOrg
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Typing => {
  const values = schema['@graph']
    .filter((prop) => prop['@type'] === def['@id'])
    .map((p) => ({
      name: getTypeNameFromId(p['@id']),
      type: p['rdfs:label'],
      $label: p['rdfs:label'],
      $description: p['rdfs:comment'],
    }));

  return values.reduce((acc, v) => ({ ...acc, [v.name]: v }), {
    $description: def['rdfs:comment'],
    $label: def['rdfs:label'],
  });
};

export const schemaOrgToProp = (node: SchemaOrgNode): Typing => ({
  name: node['@id'].replace(/^schema:/, ''),
  type: Array.isArray(node['schema:rangeIncludes'])
    ? node['schema:rangeIncludes']
        .map((r) => getTypeNameFromId(r['@id']))
        .join(' | ')
    : getTypeNameFromId(node['schema:rangeIncludes']?.['@id'] as string),
  $description: node['rdfs:comment'],
  $label: node['rdfs:label'],
});

export const isPrimitive = (p: string): boolean =>
  primitiveTypes.includes(getTypeNameFromId(p).toLowerCase());

export const getSubClassesRecursive = (
  schema: SchemaOrg,
  def: SchemaOrgNode,
  result: string[] = []
): string[] => {
  if (!def['rdfs:subClassOf']) {
    return [];
  }

  const subClassesIds = ([] as Pick<SchemaOrgNode, '@id'>[])
    .concat(def['rdfs:subClassOf'])
    .map((p) => p['@id'].replace(/^rdfs:/, 'schema:'));

  result.push(...subClassesIds);

  const subClasses = subClassesIds
    .map(
      (id) =>
        schema['@graph'].find(
          (d) =>
            d['@type'] !== 'rdf:Property' &&
            getTypeNameFromId(d['@id']) === getTypeNameFromId(id)
        ) as SchemaOrgNode
    )
    .filter((s) => s !== undefined);

  return subClasses.reduce(
    (acc, c) =>
      Array.from(new Set(acc.concat(getSubClassesRecursive(schema, c)))),
    result
  );
};

export const getPropsFromSchema = (
  schema: SchemaOrg,
  def: SchemaOrgNode
): SchemaOrgNode[] => {
  const ids = [def['@id']];
  const props: SchemaOrgNode[] = [];

  if (def['rdfs:subClassOf']) {
    const subClasses = getSubClassesRecursive(schema, def);

    const primitiveSubClasses = subClasses.filter(isPrimitive);
    const types = subClasses.filter((p) => !primitiveSubClasses.includes(p));

    ids.push(...types);
    props.push(
      ...primitiveSubClasses.map((p) => {
        const primitiveName = getTypeNameFromId(p);
        return {
          '@id': p,
          'schema:rangeIncludes': {
            '@id': primitiveName,
          },
        } as SchemaOrgNode;
      })
    );
  }

  props.push(
    ...schema['@graph']
      .filter((prop) => prop['@type'] === 'rdf:Property')
      .filter((prop) => {
        const domain = prop['schema:domainIncludes'];
        // const range = prop['schema:rangeIncludes'];
        let belongsToThing = false;
        if (domain) {
          belongsToThing =
            belongsToThing ||
            (Array.isArray(domain)
              ? domain?.some((range) => ids.includes(range['@id']))
              : ids.includes(domain['@id']));
        }

        return belongsToThing;
      })
  );

  return props;
};

export const schemaOrgToTypeToken = (
  def: SchemaOrgNode,
  schema: SchemaOrg
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Typing =>
  getPropsFromSchema(schema, def)
    .map(schemaOrgToProp)
    .reduce(
      (acc, curr) =>
        ({ ...acc, [curr.name as string]: curr } as unknown as Typing),
      {
        $description: def['rdfs:comment'],
        $label: def['rdfs:label'],
        $extends: def['rdfs:subClassOf']?.['@id']
          ? getTypeNameFromId(def['rdfs:subClassOf']['@id'])
          : undefined,
      } as Typing
    );
