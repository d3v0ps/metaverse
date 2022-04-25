/* eslint-disable @typescript-eslint/no-explicit-any */
// Generated from https://azgaar.github.io/Fantasy-Map-Generator with https://transform.tools/json-to-typescript
// JSON export at assets/worlds/001.json

export type FantasyMapGeneratorMap = {
  info: MapInfo;
  settings: MapSettings;
  coords: MapCoords;
  cells: MapCells;
  biomes: Biomes;
  notes: MapNote[];
  nameBases: CultureNameBase[];
};

export type MapInfo = {
  version: string;
  description: string;
  exportedAt: string;
  mapName: string;
  seed: string;
  mapId: number;
};

export type MapSettings = {
  distanceUnit: string;
  distanceScale: string;
  areaUnit: string;
  heightUnit: string;
  heightExponent: string;
  temperatureScale: string;
  barSize: string;
  barLabel: string;
  barBackOpacity: string;
  barBackColor: string;
  barPosX: string;
  barPosY: string;
  populationRate: number;
  urbanization: number;
  mapSize: string;
  latitudeO: string;
  temperatureEquator: string;
  temperaturePole: string;
  prec: string;
  options: MapOptions;
  mapName: string;
  hideLabels: boolean;
  stylePreset: string;
  rescaleLabels: boolean;
  urbanDensity: number;
};

export type MapOptions = {
  pinNotes: boolean;
  showMFCGMap: boolean;
  winds: number[];
  stateLabelsMode: string;
  year: number;
  era: string;
  eraShort: string;
  military: MilitarySettings[];
};

export type MilitarySettings = {
  icon: string;
  name: string;
  rural: number;
  urban: number;
  crew: number;
  power: number;
  type: string;
  separate: number;
};

export type MapCoords = {
  latT: number;
  latN: number;
  latS: number;
  lonT: number;
  lonW: number;
  lonE: number;
};

export type MapCells = {
  cells: MapCell[];
  features: any[];
  cultures: Culture[];
  burgs: Burg[];
  states: State[];
  provinces: any[];
  religions: Religion[];
  rivers: River[];
  markers: MapMarker[];
};

export type MapCell = {
  i: number;
  v: number[];
  c: number[];
  p: number[];
  g: number;
  h: number;
  area: number;
  f: number;
  t: number;
  haven: number;
  harbor: number;
  fl: number;
  r: number;
  conf: number;
  biome: number;
  s: number;
  pop: number;
  culture: number;
  burg: number;
  road: number;
  crossroad: number;
  state: number;
  religion: number;
  province: number;
};

export type Culture = {
  name: string;
  i: number;
  base: number;
  origin?: number;
  shield: string;
  center?: number;
  color?: string;
  type?: string;
  expansionism?: number;
  code?: string;
};

export type Burg = {
  cell?: number;
  x?: number;
  y?: number;
  state?: number;
  i?: number;
  culture?: number;
  name?: string;
  feature?: number;
  capital?: number;
  port?: number;
  population?: number;
  type?: string;
  coa: CoatOfArms;
  citadel?: number;
  plaza?: number;
  walls?: number;
  shanty?: number;
  temple?: number;
  MFCG?: number;
  coaSize?: number;
};

export type State = {
  i: number;
  name: string;
  urban: number;
  rural: number;
  burgs: number;
  area: number;
  cells: number;
  neighbors: number[];
  diplomacy: any[];
  provinces: number[];
  color?: string;
  expansionism?: number;
  capital?: number;
  type?: string;
  center?: number;
  culture?: number;
  coa?: CoatOfArms;
  campaigns?: StateCampaign[];
  form?: string;
  formName?: string;
  fullName?: string;
  pole?: number[];
  alert?: number;
  military?: StateMilitary[];
};

export type CoatOfArms = {
  t1: string;
  charges?: CoatOfArmsCharge[];
  shield: string;
  ordinaries?: CoatOfArmsOrdinary[];
  division?: CoatOfArmsDivision;
};

export type CoatOfArmsCharge = {
  charge: string;
  t: string;
  p: string;
  size: number;
};

export type CoatOfArmsOrdinary = {
  ordinary: string;
  t: string;
  line?: string;
};

export type CoatOfArmsDivision = {
  division: string;
  t: string;
  line: string;
};

export type StateCampaign = {
  name: string;
  start: number;
  end: number;
};

export type StateMilitary = {
  i: number;
  a: number;
  cell: number;
  x: number;
  y: number;
  bx: number;
  by: number;
  u: StateMilitaryUnits;
  n: number;
  name: string;
  state: number;
  icon: string;
};

export type StateMilitaryUnits = {
  archers?: number;
  cavalry?: number;
  artillery?: number;
  infantry?: number;
  fleet?: number;
};

export type Religion = {
  i: number;
  name: string;
  color?: string;
  culture?: number;
  type?: string;
  form?: string;
  deity?: string;
  center?: number;
  origin?: number;
  code?: string;
  expansion?: string;
  expansionism?: number;
};

export type River = {
  i: number;
  source: number;
  mouth: number;
  discharge: number;
  length: number;
  width: number;
  widthFactor: number;
  sourceWidth: number;
  parent: number;
  cells: number[];
  basin: number;
  name: string;
  type: string;
};

export type MapMarker = {
  icon: string;
  type: string;
  dx?: number;
  px?: number;
  x: number;
  y: number;
  cell: number;
  i: number;
  dy?: number;
};

export type Biomes = {
  i: number[];
  name: string[];
  color: string[];
  biomesMartix: BiomesMatrix[];
  habitability: number[];
  iconsDensity: number[];
  icons: string[][];
  cost: number[];
  cells: number[];
  area: number[];
  rural: number[];
  urban: number[];
};

export type BiomesMatrix = {
  '0': number;
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  '10': number;
  '11': number;
  '12': number;
  '13': number;
  '14': number;
  '15': number;
  '16': number;
  '17': number;
  '18': number;
  '19': number;
  '20': number;
  '21': number;
  '22': number;
  '23': number;
  '24': number;
  '25': number;
};

export type MapNote = {
  id: string;
  name: string;
  legend: string;
};

export type CultureNameBase = {
  name: string;
  i: number;
  min: number;
  max: number;
  d: string;
  m: number;
  b: string;
};
