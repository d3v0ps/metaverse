import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@ng-stack/forms';
import { Skill } from '../../models/skill';

export class AvatarSkillsInput {
  //#endregion
  skills!: Skill[];
}

@Component({
  selector: 'cf-avatar-skills',
  template: `
    <form [formGroup]="form" block="avatar">
      <div class="form-array" formArrayName="skills">
        <h2>Skills</h2>
        <button type="button">+ Add another skills</button>

        <div
          *ngFor="let skill of skillsForm.controls; let i = index"
          class="skill-form"
        >
          I can {{ skill.value.skill }}

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
    </form>
  `,
})
export class AvatarSkillsComponent {
  @Input() set skills(value: AvatarSkillsInput) {
    if (value) {
      value.skills.forEach((skill) => {
        this.addScope(skill);
      });
    }
  }

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
