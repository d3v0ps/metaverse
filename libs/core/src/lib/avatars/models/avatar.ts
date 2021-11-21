import { Appearance } from './appearance';
import { Scope } from './scope';
import { Skill } from './skill';

export interface Avatar {
  selectedAppearance: Appearance;
  welcomeMessage: string;
  name: string;
  title: string;
  appearances: Appearance[];
  physics: any[];
  roles: any[];
  routines: any[];
  scopes: Scope[];
  skills: Skill[];
}
