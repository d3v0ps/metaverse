import type { Appearance } from './appearance';
import type { Scope } from './scope';
import type { Skill } from './skill';

/** An Avatar */
export interface Avatar {
  /** The avatar's id */
  id: string;
  /** The avatar's selected appearance */
  selectedAppearance: Appearance;
  /** The avatar's welcome message */
  welcomeMessage: string;
  /** The avatar's name */
  name: string;
  /** The avatar's title */
  title: string;
  /** The avatar's appearances */
  appearances: Appearance[];
  /** The avatar's physics */
  // physics: any[];
  /** The avatar's roles */
  // roles: any[];
  /** The avatar's routines */
  // routines: any[];
  /** The avatar's scopes */
  scopes: Scope[];
  /** The avatar's skills */
  skills: Skill[];
  /** The avatar's created at */
  createdAt?: Date;
  /** The avatar's updated at */
  updatedAt?: Date;

  _attachments?: any;
}
