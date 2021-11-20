import { FormArray } from '@ng-stack/forms';
import { Appearance } from './appearance';
import { Scope } from './scope';
import { Skill } from './skill';

export interface SelectedAvatarInput {
  welcomeMessage: string;
  name: string;
  title: string;
  appearances: FormArray<Appearance>;
  physics: FormArray<any>;
  roles: FormArray<any>;
  routines: FormArray<any>;
  scopes: FormArray<Scope>;
  skills: FormArray<Skill>;
}
