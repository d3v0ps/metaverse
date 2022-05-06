import { AppearanceInfo } from './appearance-info';
import {
  Avatar,
  AvatarAppearance,
  AvatarAttributes,
  AvatarIdentity,
  AvatarOutfit,
  AvatarProfession,
} from './avatar';

export type Root =
  | AvatarIdentity
  | AvatarAppearance
  | AvatarOutfit
  | AvatarAttributes
  | Avatar
  | AppearanceInfo
  | AvatarProfession;
