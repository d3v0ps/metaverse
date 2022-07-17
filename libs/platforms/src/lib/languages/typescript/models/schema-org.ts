export type SchemaOrgNode = {
  '@id': string;
  '@type': string;
  'schema:domainIncludes'?:
    | Pick<SchemaOrgNode, '@id'>
    | Pick<SchemaOrgNode, '@id'>[];
  'schema:rangeIncludes'?:
    | Pick<SchemaOrgNode, '@id'>
    | Pick<SchemaOrgNode, '@id'>[];
  'rdfs:subClassOf'?: Pick<SchemaOrgNode, '@id'>;
  'rdfs:comment'?: string;
  'rdfs:label'?: string;
};

export type SchemaOrg = {
  '@graph': SchemaOrgNode[];
};
