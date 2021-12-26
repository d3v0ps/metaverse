import { Physics } from '@central-factory/physics';

/** The slots an equipment can be equiped to */
export enum EquipmentSlot {
  /** Real body slots */
  Body = 'body',
  Head = 'head',
  Ears = 'ears',
  Face = 'face',
  Eyes = 'eyes',
  Nose = 'nose',
  Mouth = 'mouth',
  Neck = 'neck',
  Chest = 'chest',
  Waist = 'waist',
  Back = 'back',
  Arms = 'arms',
  RightArm = 'right-arm',
  LeftArm = 'left-arm',
  Wrist = 'wrist',
  Hands = 'hands',
  RightHand = 'right-hand',
  LeftHand = 'left-hand',
  Legs = 'legs',
  RightLeg = 'right-leg',
  LeftLeg = 'left-leg',
  Feet = 'feet',
  RightFoot = 'right-foot',
  LeftFoot = 'left-foot',
  Finger = 'finger',
}

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
