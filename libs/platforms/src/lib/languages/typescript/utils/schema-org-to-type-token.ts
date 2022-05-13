import { SchemaOrg, SchemaOrgNode } from '../models/schema-org';

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
  return startsWithNumber ? `${numberToText(+name[0])}${name.slice(1)}` : name;
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
): Record<string, any> | string => {
  return schema['@graph']
    .filter((prop) => prop['@type'] === def['@id'])
    .map((p) => p['@id'].replace(/^schema:/, ''));
};

export const schemaOrgToTypeToken = (
  def: SchemaOrgNode,
  schema: SchemaOrg
): Record<string, any> | string => {
  const props = schema['@graph']
    .filter((prop) => prop['@type'] === 'rdf:Property')
    .filter((prop) => {
      const domain = prop['schema:domainIncludes'];
      // const range = prop['schema:rangeIncludes'];
      let belongsToThing = false;
      if (domain) {
        belongsToThing =
          belongsToThing ||
          (Array.isArray(domain)
            ? domain?.some((range) => range['@id'] === def['@id'])
            : domain['@id'] === def['@id']);
      }

      return belongsToThing;
    });

  const isAlias =
    !props.length && def['rdfs:subClassOf'] && def['rdfs:subClassOf']['@id'];

  if (isAlias) {
    return getTypeNameFromId(def['rdfs:subClassOf']?.['@id'] as string);
  }

  const typeProps: Record<string, unknown> = props
    .map((t) => {
      return {
        name: t['@id'].replace(/^schema:/, ''),
        type: Array.isArray(t['schema:rangeIncludes'])
          ? t['schema:rangeIncludes']
              .map((r) => getTypeNameFromId(r['@id']))
              .join(' | ')
          : getTypeNameFromId(t['schema:rangeIncludes']?.['@id'] as string),
      };
    })
    .reduce((acc, curr) => ({ ...acc, [curr.name]: curr }), {});

  return {
    ...typeProps,
    $extends: def['rdfs:subClassOf']?.['@id']
      ? getTypeNameFromId(def['rdfs:subClassOf']['@id'])
      : undefined,
  };
};
