/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Biomes {
  @Field((type) => [Number])
  area?: number[];

  @Field()
  biomesMartix?: any;

  @Field((type) => [Number])
  cells?: number[];

  @Field((type) => [String])
  color?: string[];

  @Field((type) => [Number])
  cost?: number[];

  @Field((type) => [Number])
  habitability?: number[];

  @Field((type) => [Number])
  i?: number[];

  @Field((type) => [])
  icons?: string[][];

  @Field((type) => [Number])
  iconsDensity?: number[];

  @Field((type) => [String])
  name?: string[];

  @Field((type) => [Number])
  rural?: number[];

  @Field((type) => [Number])
  urban?: number[];
}

@ObjectType()
export class Burg {
  @Field()
  MFCG?: number;

  @Field()
  capital?: number;

  @Field()
  cell?: number;

  @Field()
  citadel?: number;

  @Field((type) => CoatOfArms)
  coa?: CoatOfArms;

  @Field()
  coaSize?: number;

  @Field()
  culture?: number;

  @Field()
  feature?: number;

  @Field()
  i?: number;

  @Field()
  name?: string;

  @Field()
  plaza?: number;

  @Field()
  population?: number;

  @Field()
  port?: number;

  @Field()
  shanty?: number;

  @Field()
  state?: number;

  @Field()
  temple?: number;

  @Field()
  type?: string;

  @Field()
  walls?: number;

  @Field()
  x?: number;

  @Field()
  y?: number;
}

@ObjectType()
export class CoatOfArms {
  @Field((type) => [CoatOfArmsCharge])
  charges?: CoatOfArmsCharge[];

  @Field((type) => CoatOfArmsDivision)
  division?: CoatOfArmsDivision;

  @Field((type) => [CoatOfArmsOrdinary])
  ordinaries?: CoatOfArmsOrdinary[];

  @Field()
  shield?: string;

  @Field()
  t1?: string;
}

@ObjectType()
export class CoatOfArmsCharge {
  @Field()
  charge?: string;

  @Field()
  p?: string;

  @Field()
  size?: number;

  @Field()
  t?: string;
}

@ObjectType()
export class CoatOfArmsDivision {
  @Field()
  division?: string;

  @Field()
  line?: string;

  @Field()
  t?: string;
}

@ObjectType()
export class CoatOfArmsOrdinary {
  @Field()
  line?: string;

  @Field()
  ordinary?: string;

  @Field()
  t?: string;
}

@ObjectType()
export class Culture {
  @Field()
  base?: number;

  @Field()
  center?: number;

  @Field()
  code?: string;

  @Field()
  color?: string;

  @Field()
  expansionism?: number;

  @Field()
  i?: number;

  @Field()
  name?: string;

  @Field()
  origin?: number;

  @Field()
  shield?: string;

  @Field()
  type?: string;
}

@ObjectType()
export class CultureNameBase {
  @Field()
  b?: string;

  @Field()
  d?: string;

  @Field()
  i?: number;

  @Field()
  m?: number;

  @Field()
  max?: number;

  @Field()
  min?: number;

  @Field()
  name?: string;
}

@ObjectType()
export class Era {
  @Field()
  color?: string;

  @Field()
  description?: string;

  @Field()
  endYear?: number;

  @Field((type) => [WorldEvent])
  events?: WorldEvent[];

  @Field()
  icon?: string;

  @Field()
  id?: string;

  @Field((type) => EraMapStyle)
  mapStyle?: EraMapStyle;

  @Field((type) => [MilitarySettings])
  military?: MilitarySettings[];

  @Field()
  name?: string;

  @Field()
  shortName?: string;

  @Field()
  startYear?: number;
}

export enum EraMapStyle {
  Default = 'default',
  Ancient = 'ancient',
  Gloom = 'gloom',
  Light = 'light',
  Watercolor = 'watercolor',
  Clean = 'clean',
  Atlas = 'atlas',
  Cyberpunk = 'cyberpunk',
  Monochrome = 'monochrome',
}

registerEnumType(EraMapStyle, {
  name: 'EraMapStyle',
  description: '',
});


@ObjectType()
export class FantasyMapGeneratorMap {
  @Field((type) => Biomes)
  biomes?: Biomes;

  @Field((type) => MapCells)
  cells?: MapCells;

  @Field((type) => MapCoords)
  coords?: MapCoords;

  @Field()
  id?: string;

  @Field((type) => MapInfo)
  info?: MapInfo;

  @Field((type) => [CultureNameBase])
  nameBases?: CultureNameBase[];

  @Field((type) => [MapNote])
  notes?: MapNote[];

  @Field((type) => MapSettings)
  settings?: MapSettings;
}

@ObjectType()
export class MapCell {
  @Field()
  area?: number;

  @Field()
  biome?: number;

  @Field()
  burg?: number;

  @Field((type) => [Number])
  c?: number[];

  @Field()
  conf?: number;

  @Field()
  crossroad?: number;

  @Field()
  culture?: number;

  @Field()
  f?: number;

  @Field()
  fl?: number;

  @Field()
  g?: number;

  @Field()
  h?: number;

  @Field()
  harbor?: number;

  @Field()
  haven?: number;

  @Field()
  i?: number;

  @Field((type) => [Number])
  p?: number[];

  @Field()
  pop?: number;

  @Field()
  province?: number;

  @Field()
  r?: number;

  @Field()
  religion?: number;

  @Field()
  road?: number;

  @Field()
  s?: number;

  @Field()
  state?: number;

  @Field()
  t?: number;

  @Field((type) => [Number])
  v?: number[];
}

@ObjectType()
export class MapCells {
  @Field((type) => [Burg])
  burgs?: Burg[];

  @Field((type) => [MapCell])
  cells?: MapCell[];

  @Field((type) => [Culture])
  cultures?: Culture[];

  @Field((type) => [])
  features?: any[];

  @Field((type) => [MapMarker])
  markers?: MapMarker[];

  @Field((type) => [])
  provinces?: any[];

  @Field((type) => [Religion])
  religions?: Religion[];

  @Field((type) => [River])
  rivers?: River[];

  @Field((type) => [State])
  states?: State[];
}

@ObjectType()
export class MapCoords {
  @Field()
  latN?: number;

  @Field()
  latS?: number;

  @Field()
  latT?: number;

  @Field()
  lonE?: number;

  @Field()
  lonT?: number;

  @Field()
  lonW?: number;
}

@ObjectType()
export class MapInfo {
  @Field()
  description?: string;

  @Field()
  exportedAt?: string;

  @Field()
  mapId?: number;

  @Field()
  mapName?: string;

  @Field()
  seed?: string;

  @Field()
  version?: string;
}

@ObjectType()
export class MapMarker {
  @Field()
  cell?: number;

  @Field()
  dx?: number;

  @Field()
  dy?: number;

  @Field()
  i?: number;

  @Field()
  icon?: string;

  @Field()
  px?: number;

  @Field()
  type?: string;

  @Field()
  x?: number;

  @Field()
  y?: number;
}

@ObjectType()
export class MapNote {
  @Field()
  id?: string;

  @Field()
  legend?: string;

  @Field()
  name?: string;
}

@ObjectType()
export class MapOptions {
  @Field()
  era?: string;

  @Field()
  eraShort?: string;

  @Field((type) => [MilitarySettings])
  military?: MilitarySettings[];

  @Field()
  pinNotes?: boolean;

  @Field()
  showMFCGMap?: boolean;

  @Field()
  stateLabelsMode?: string;

  @Field((type) => [Number])
  winds?: number[];

  @Field()
  year?: number;
}

@ObjectType()
export class MapSettings {
  @Field()
  areaUnit?: string;

  @Field()
  barBackColor?: string;

  @Field()
  barBackOpacity?: string;

  @Field()
  barLabel?: string;

  @Field()
  barPosX?: string;

  @Field()
  barPosY?: string;

  @Field()
  barSize?: string;

  @Field()
  distanceScale?: string;

  @Field()
  distanceUnit?: string;

  @Field()
  heightExponent?: string;

  @Field()
  heightUnit?: string;

  @Field()
  hideLabels?: boolean;

  @Field()
  latitudeO?: string;

  @Field()
  mapName?: string;

  @Field()
  mapSize?: string;

  @Field((type) => MapOptions)
  options?: MapOptions;

  @Field()
  populationRate?: number;

  @Field()
  prec?: string;

  @Field()
  rescaleLabels?: boolean;

  @Field()
  stylePreset?: string;

  @Field()
  temperatureEquator?: string;

  @Field()
  temperaturePole?: string;

  @Field()
  temperatureScale?: string;

  @Field()
  urbanDensity?: number;

  @Field()
  urbanization?: number;
}

@ObjectType()
export class Meta {
  @Field()
  name?: string;

  @Field()
  previewUrl?: string;
}

@ObjectType()
export class MilitarySettings {
  @Field()
  crew?: number;

  @Field()
  icon?: string;

  @Field()
  name?: string;

  @Field()
  power?: number;

  @Field()
  rural?: number;

  @Field()
  separate?: number;

  @Field()
  type?: string;

  @Field()
  urban?: number;
}

@ObjectType()
export class Religion {
  @Field()
  center?: number;

  @Field()
  code?: string;

  @Field()
  color?: string;

  @Field()
  culture?: number;

  @Field()
  deity?: string;

  @Field()
  expansion?: string;

  @Field()
  expansionism?: number;

  @Field()
  form?: string;

  @Field()
  i?: number;

  @Field()
  name?: string;

  @Field()
  origin?: number;

  @Field()
  type?: string;
}

@ObjectType()
export class River {
  @Field()
  basin?: number;

  @Field((type) => [Number])
  cells?: number[];

  @Field()
  discharge?: number;

  @Field()
  i?: number;

  @Field()
  length?: number;

  @Field()
  mouth?: number;

  @Field()
  name?: string;

  @Field()
  parent?: number;

  @Field()
  source?: number;

  @Field()
  sourceWidth?: number;

  @Field()
  type?: string;

  @Field()
  width?: number;

  @Field()
  widthFactor?: number;
}

@ObjectType()
export class State {
  @Field()
  alert?: number;

  @Field()
  area?: number;

  @Field()
  burgs?: number;

  @Field((type) => [StateCampaign])
  campaigns?: StateCampaign[];

  @Field()
  capital?: number;

  @Field()
  cells?: number;

  @Field()
  center?: number;

  @Field((type) => CoatOfArms)
  coa?: CoatOfArms;

  @Field()
  color?: string;

  @Field()
  culture?: number;

  @Field((type) => [])
  diplomacy?: any[];

  @Field()
  expansionism?: number;

  @Field()
  form?: string;

  @Field()
  formName?: string;

  @Field()
  fullName?: string;

  @Field()
  i?: number;

  @Field((type) => [StateMilitary])
  military?: StateMilitary[];

  @Field()
  name?: string;

  @Field((type) => [Number])
  neighbors?: number[];

  @Field((type) => [Number])
  pole?: number[];

  @Field((type) => [Number])
  provinces?: number[];

  @Field()
  rural?: number;

  @Field()
  type?: string;

  @Field()
  urban?: number;
}

@ObjectType()
export class StateCampaign {
  @Field()
  end?: number;

  @Field()
  name?: string;

  @Field()
  start?: number;
}

@ObjectType()
export class StateMilitary {
  @Field()
  a?: number;

  @Field()
  bx?: number;

  @Field()
  by?: number;

  @Field()
  cell?: number;

  @Field()
  i?: number;

  @Field()
  icon?: string;

  @Field()
  n?: number;

  @Field()
  name?: string;

  @Field()
  state?: number;

  @Field((type) => StateMilitaryUnits)
  u?: StateMilitaryUnits;

  @Field()
  x?: number;

  @Field()
  y?: number;
}

@ObjectType()
export class StateMilitaryUnits {
  @Field()
  archers?: number;

  @Field()
  artillery?: number;

  @Field()
  cavalry?: number;

  @Field()
  fleet?: number;

  @Field()
  infantry?: number;
}

@ObjectType()
export class World {
  @Field((type) => [])
  archetypes?: any[];

  @Field((type) => [])
  avatars?: any[];

  @Field()
  displayName?: string;

  @Field((type) => [])
  eras?: any[];

  @Field()
  id?: string;

  @Field((type) => WorldKind)
  kind?: WorldKind;

  @Field()
  map?: any;

  @Field((type) => Meta)
  meta?: Meta;

  @Field((type) => [])
  professions?: any[];

  @Field()
  state?: any;

  @Field((type) => WorldStats)
  stats?: WorldStats;

  @Field()
  year?: number;
}

@ObjectType()
export class WorldEvent {
  @Field()
  description?: string;

  @Field()
  end?: number;

  @Field()
  icon?: string;

  @Field()
  start?: number;

  @Field()
  title?: string;

  @Field((type) => WorldEventType)
  type?: WorldEventType;
}

export enum WorldEventType {
  WarDeclaration = 'WAR_DECLARATION',
  MilitaryBattle = 'MILITARY_BATTLE',
  PeaceAgreement = 'PEACE_AGREEMENT',
  NaturalDisaster = 'NATURAL_DISASTER',
  Disease = 'DISEASE',
  CivilWar = 'CIVIL_WAR',
}

registerEnumType(WorldEventType, {
  name: 'WorldEventType',
  description: '',
});


export enum WorldKind {
  Analog = 'analog',
  Digital = 'digital',
  Unknown = 'unknown',
}

registerEnumType(WorldKind, {
  name: 'WorldKind',
  description: '',
});


@ObjectType()
export class WorldStats {
  @Field()
  avatars?: number;

  @Field()
  burgs?: number;

  @Field()
  cultures?: number;

  @Field()
  states?: number;
}

