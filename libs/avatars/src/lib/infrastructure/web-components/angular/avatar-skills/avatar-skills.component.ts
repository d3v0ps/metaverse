import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@ng-stack/forms';
import { Skill } from '../../../../domain/models/skill';

export class AvatarSkillsInput {
  //#endregion
  skills!: Skill[];
}

@Component({
  selector: 'cf-avatar-skills',
  template: `
    <form [formGroup]="form" block="avatar">
      <div
        class="form-array"
        formArrayName="skills"
        style="margin-bottom: 15px;"
      >
        <h2>Skills</h2>

        <div fxLayout="row wrap" fxLayoutGap="15px">
          <div
            *ngFor="let skill of skillsForm.controls; let i = index"
            class="skill-form"
          >
            <button type="button" block="button" mod="primary uppercase big">
              <svg-icon
                src="assets/icons/mdi/{{
                  skillsIcons[skill.value.skill + '-' + skill.value.domain]
                }}.svg"
                elem="icon"
                [svgClass]="'icon__svg'"
              ></svg-icon>
              {{ skill.value.skill }} {{ skill.value.domain }}
            </button>

            <div [formGroupName]="i" *ngIf="false">
              <div class="form-control">
                <label for="skill-domain-{{ i }}">Domain:</label>
                <input
                  id="skill-domain-{{ i }}"
                  type="text"
                  formControlName="domain"
                />
              </div>

              <div class="form-control">
                <label for="skill-scope-{{ i }}">Scope:</label>
                <input
                  id="skill-scope-{{ i }}"
                  type="text"
                  formControlName="scope"
                />
              </div>

              <div class="form-control">
                <label for="skill-skill-{{ i }}">Skill:</label>
                <input
                  id="skill-skill-{{ i }}"
                  type="text"
                  formControlName="skill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" block="button" mod="primary uppercase big">
        <svg-icon
          src="assets/icons/mdi/plus.svg"
          elem="icon"
          [svgClass]="'icon__svg'"
        ></svg-icon>
        Add more skills
      </button>
    </form>
  `,
})
export class AvatarSkillsComponent {
  @Input() set skills(value: AvatarSkillsInput) {
    if (value) {
      this.skillsForm.clear();
      value.skills.forEach((skill) => {
        this.addScope(skill);
      });
    }
  }

  skillsIcons: {
    [key: string]: string;
  } = {
    'create-calendar': 'calendar-edit',
    'create-event': 'calendar',
    'trade-assets': 'store',
  };

  form = new FormGroup<AvatarSkillsInput>({
    skills: new FormArray<Skill>([]),
  });

  get skillsForm() {
    return this.form.controls.skills as FormArray<Skill>;
  }

  addScope(skill: Skill) {
    this.skillsForm.push(
      new FormGroup({
        domain: new FormControl(skill.domain),
        scope: new FormControl(skill.scope),
        skill: new FormControl(skill.skill),
      })
    );
  }
}
