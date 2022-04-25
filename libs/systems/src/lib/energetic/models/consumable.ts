import { Consumable as TConsumable } from '@central-factory/assets/models/value-objects/asset-kinds/consumable';

export type Units = 'ml' | 'kcal';

export type Consumable = TConsumable & {
  props: Record<Units, number>;
  consumedAt?: Date;
};
