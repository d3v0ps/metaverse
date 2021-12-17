export interface Generator<TGenerated> {
  generate(defaults: Partial<TGenerated>): TGenerated;
}
