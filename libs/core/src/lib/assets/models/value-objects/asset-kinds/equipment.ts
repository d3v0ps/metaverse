import { Physics } from '@central-factory/core';

/** The slots an equipment can be equiped to */
export type EquipmentSlot =
  /** Real body slots */
  | 'body'
  | 'head'
  | 'ears'
  | 'face'
  | 'eyes'
  | 'nose'
  | 'mouth'
  | 'neck'
  | 'waist'
  | 'wrist'
  | 'back'
  | 'arms'
  | 'right-arm'
  | 'left-arm'
  | 'hands'
  | 'right-hand'
  | 'left-hand'
  | 'legs'
  | 'right-leg'
  | 'left-leg'
  | 'feet'
  | 'right-foot'
  | 'left-foot'
  | 'finger'
  /** Videogame-kind slots */
  | 'shield'
  | 'weapon';

/** An equipment, such as clothes, weapons or tools */
export interface Equipment extends Physics {
  /** The allowed slots for this equipment */
  allowedSlots: EquipmentSlot[];
  /** Wheter this equipment is equipped or not */
  isEquipped?: boolean;
  /** The avatar who has equipped this equipment */
  equippedTo?: string;
  /** The slot where the avatar has equipped this equipment */
  equippedToSlot?: EquipmentSlot;
  colors?: string[];
}
