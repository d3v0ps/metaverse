/* eslint-disable @typescript-eslint/no-explicit-any */

export type Biomes = {
  area: number[];

  biomesMartix: BiomesMatrix[];

  cells: number[];

  color: string[];

  cost: number[];

  habitability: number[];

  i: number[];

  icons: string[][];

  iconsDensity: number[];

  name: string[];

  rural: number[];

  urban: number[];
}

export type BiomesMatrix = {
  0: number;

  1: number;

  2: number;

  3: number;

  4: number;

  5: number;

  6: number;

  7: number;

  8: number;

  9: number;

  10: number;

  11: number;

  12: number;

  13: number;

  14: number;

  15: number;

  16: number;

  17: number;

  18: number;

  19: number;

  20: number;

  21: number;

  22: number;

  23: number;

  24: number;

  25: number;
}

export type Burg = {
  MFCG?: number;

  capital?: number;

  cell?: number;

  citadel?: number;

  coa: CoatOfArms;

  coaSize?: number;

  culture?: number;

  feature?: number;

  i?: number;

  name?: string;

  plaza?: number;

  population?: number;

  port?: number;

  shanty?: number;

  state?: number;

  temple?: number;

  type?: string;

  walls?: number;

  x?: number;

  y?: number;
}

export type CoatOfArms = {
  charges?: CoatOfArmsCharge[];

  division?: CoatOfArmsDivision;

  ordinaries?: CoatOfArmsOrdinary[];

  shield: string;

  t1: string;
}

export type CoatOfArmsCharge = {
  charge: string;

  p: string;

  size: number;

  t: string;
}

export type CoatOfArmsDivision = {
  division: string;

  line: string;

  t: string;
}

export type CoatOfArmsOrdinary = {
  line?: string;

  ordinary: string;

  t: string;
}

export type Culture = {
  base: number;

  center?: number;

  code?: string;

  color?: string;

  expansionism?: number;

  i: number;

  name: string;

  origin?: number;

  shield: string;

  type?: string;
}

export type CultureNameBase = {
  b: string;

  d: string;

  i: number;

  m: number;

  max: number;

  min: number;

  name: string;
}

export type Era = {
  color?: string;

  description?: string;

  endYear?: number;

  events: WorldEvent[];

  icon?: string;

  mapStyle?: EraMapStyle;

  military: MilitarySettings[];

  name: string;

  shortName: string;

  startYear: number;
}

export enum EraMapStyle {
  default = 'default',
  ancient = 'ancient',
  gloom = 'gloom',
  light = 'light',
  watercolor = 'watercolor',
  clean = 'clean',
  atlas = 'atlas',
  cyberpunk = 'cyberpunk',
  monochrome = 'monochrome',
}


export type FantasyMapGeneratorMap = {
  biomes: Biomes;

  cells: MapCells;

  coords: MapCoords;

  info: MapInfo;

  nameBases: CultureNameBase[];

  notes: MapNote[];

  settings: MapSettings;
}

export type MapCell = {
  area: number;

  biome: number;

  burg: number;

  c: number[];

  conf: number;

  crossroad: number;

  culture: number;

  f: number;

  fl: number;

  g: number;

  h: number;

  harbor: number;

  haven: number;

  i: number;

  p: number[];

  pop: number;

  province: number;

  r: number;

  religion: number;

  road: number;

  s: number;

  state: number;

  t: number;

  v: number[];
}

export type MapCells = {
  burgs: Burg[];

  cells: MapCell[];

  cultures: Culture[];

  features: any[];

  markers: MapMarker[];

  provinces: any[];

  religions: Religion[];

  rivers: River[];

  states: State[];
}

export type MapCoords = {
  latN: number;

  latS: number;

  latT: number;

  lonE: number;

  lonT: number;

  lonW: number;
}

export type MapInfo = {
  description: string;

  exportedAt: string;

  mapId: number;

  mapName: string;

  seed: string;

  version: string;
}

export type MapMarker = {
  cell: number;

  dx?: number;

  dy?: number;

  i: number;

  icon: string;

  px?: number;

  type: string;

  x: number;

  y: number;
}

export type MapNote = {
  id: string;

  legend: string;

  name: string;
}

export type MapOptions = {
  era: string;

  eraShort: string;

  military: MilitarySettings[];

  pinNotes: boolean;

  showMFCGMap: boolean;

  stateLabelsMode: string;

  winds: number[];

  year: number;
}

export type MapSettings = {
  areaUnit: string;

  barBackColor: string;

  barBackOpacity: string;

  barLabel: string;

  barPosX: string;

  barPosY: string;

  barSize: string;

  distanceScale: string;

  distanceUnit: string;

  heightExponent: string;

  heightUnit: string;

  hideLabels: boolean;

  latitudeO: string;

  mapName: string;

  mapSize: string;

  options: MapOptions;

  populationRate: number;

  prec: string;

  rescaleLabels: boolean;

  stylePreset: string;

  temperatureEquator: string;

  temperaturePole: string;

  temperatureScale: string;

  urbanDensity: number;

  urbanization: number;
}

export type Meta = {
  name?: string;

  previewUrl?: string;
}

export type MilitarySettings = {
  crew: number;

  icon: string;

  name: string;

  power: number;

  rural: number;

  separate: number;

  type: string;

  urban: number;
}

export type Religion = {
  center?: number;

  code?: string;

  color?: string;

  culture?: number;

  deity?: string;

  expansion?: string;

  expansionism?: number;

  form?: string;

  i: number;

  name: string;

  origin?: number;

  type?: string;
}

export type River = {
  basin: number;

  cells: number[];

  discharge: number;

  i: number;

  length: number;

  mouth: number;

  name: string;

  parent: number;

  source: number;

  sourceWidth: number;

  type: string;

  width: number;

  widthFactor: number;
}

export type State = {
  alert?: number;

  area: number;

  burgs: number;

  campaigns?: StateCampaign[];

  capital?: number;

  cells: number;

  center?: number;

  coa?: CoatOfArms;

  color?: string;

  culture?: number;

  diplomacy: any[];

  expansionism?: number;

  form?: string;

  formName?: string;

  fullName?: string;

  i: number;

  military?: StateMilitary[];

  name: string;

  neighbors: number[];

  pole?: number[];

  provinces: number[];

  rural: number;

  type?: string;

  urban: number;
}

export type StateCampaign = {
  end: number;

  name: string;

  start: number;
}

export type StateMilitary = {
  a: number;

  bx: number;

  by: number;

  cell: number;

  i: number;

  icon: string;

  n: number;

  name: string;

  state: number;

  u: StateMilitaryUnits;

  x: number;

  y: number;
}

export type StateMilitaryUnits = {
  archers?: number;

  artillery?: number;

  cavalry?: number;

  fleet?: number;

  infantry?: number;
}

export type World = {
  archetypes?: any[];

  avatars?: any[];

  displayName?: string;

  eras?: any[];

  id: string;

  kind: WorldKind;

  map?: any;

  meta: Meta;

  professions?: any[];

  state?: any;

  stats?: WorldStats;

  year: number;
}

export type WorldEvent = {
  description?: string;

  end: number;

  icon: string;

  start: number;

  title: string;

  type: WorldEventType;
}

export enum WorldEventType {
  WAR_DECLARATION = 'WAR_DECLARATION',
  MILITARY_BATTLE = 'MILITARY_BATTLE',
  PEACE_AGREEMENT = 'PEACE_AGREEMENT',
  NATURAL_DISASTER = 'NATURAL_DISASTER',
  DISEASE = 'DISEASE',
  CIVIL_WAR = 'CIVIL_WAR',
}


export enum WorldKind {
  analog = 'analog',
  digital = 'digital',
  unknown = 'unknown',
}


export type WorldStats = {
  avatars?: number;

  burgs?: number;

  cultures?: number;

  states?: number;
}

