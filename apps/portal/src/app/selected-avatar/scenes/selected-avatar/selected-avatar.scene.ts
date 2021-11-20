import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@ng-stack/forms';

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

export interface Appearance {
  protocol: string;
  largePreviewUrl: string;
  smallPreviewUrl: string;
}

export interface Scope {
  integration: string;
  domain: string;
  scope: string;
}

export interface Skill {
  domain: string;
  scope: string;
  skill: string;
}

@Component({
  selector: 'cf-selected-avatar',
  template: `
    <form
      [formGroup]="selectedAvatarForm"
      style="height: 80vh; overflow: auto;"
    >
      <img [src]="selectedAvatarForm?.value?.appearances[0]?.smallPreviewUrl" />

      <div class="form-control">
        <label for="welcomeMessage">Welcome message:</label>
        <textarea
          id="welcomeMessage"
          formControlName="welcomeMessage"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="name">Name:</label>
        <input id="name" type="text" formControlName="name" />
      </div>

      <div class="form-array" formArrayName="appearances">
        <h2>Appearances</h2>
        <button type="button">+ Add another appearance</button>

        <div
          *ngFor="let appearance of appearances.controls; let i = index"
          class="appearance-form"
        >
          I have an appearance registered at {{ appearance.value.protocol }}

          <img style="width: 200px;" [src]="appearance.value.largePreviewUrl" />

          <div [formGroupName]="i" *ngIf="false">
            <div class="form-control">
              <label for="protocol-{{ i }}">Protocol:</label>
              <input
                id="protocol-{{ i }}"
                type="text"
                formControlName="protocol"
              />
            </div>

            <div class="form-control">
              <label for="preview-url-{{ i }}">Preview Url:</label>
              <input
                id="preview-url-{{ i }}"
                type="text"
                formControlName="largePreviewUrl"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="form-array" formArrayName="scopes">
        <h2>Scopes</h2>
        <button type="button">+ Add another scope</button>

        <div
          *ngFor="let scope of scopes.controls; let i = index"
          class="scope-form"
        >
          I have access to {{ scope.value.scope }} {{ scope.value.integration }}
          {{ scope.value.domain }}

          <div [formGroupName]="i" *ngIf="false">
            <div class="form-control">
              <label for="integration-{{ i }}">Integration:</label>
              <input
                id="integration-{{ i }}"
                type="text"
                formControlName="integration"
              />
            </div>

            <div class="form-control">
              <label for="domain-{{ i }}">Domain:</label>
              <input id="domain-{{ i }}" type="text" formControlName="domain" />
            </div>

            <div class="form-control">
              <label for="scope-{{ i }}">Scope:</label>
              <input id="scope-{{ i }}" type="text" formControlName="scope" />
            </div>
          </div>
        </div>
      </div>

      <div class="form-array" formArrayName="skills">
        <h2>Skills</h2>
        <button type="button">+ Add another skills</button>

        <div
          *ngFor="let skill of skills.controls; let i = index"
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
export class SelectedAvatarScene implements OnInit {
  selectedAvatarForm = new FormGroup<any>({
    welcomeMessage: new FormControl(``),
    name: new FormControl(''),
    title: new FormControl(''),
    appearances: new FormArray<Appearance>([]),
    // physics: new FormArray<any>([]),
    // roles: new FormArray<any>([]),
    // routines: new FormArray<any>([]),
    scopes: new FormArray<Scope>([]),
    skills: new FormArray<Skill>([]),
  });

  ngOnInit() {
    setTimeout(() => {
      this.selectedAvatarForm.reset({
        welcomeMessage: `Hi! I'm a developing avatar!`,
        name: 'John',
        title: 'Software Engineer',
      });

      this.addAppearance({
        protocol: 'readyplayer.me',
        largePreviewUrl: 'assets/avatar-large.png',
        smallPreviewUrl: 'assets/avatar-small.png',
      });

      this.addScope({
        integration: 'CF',
        domain: 'Calendar',
        scope: 'manage',
      });

      this.addScope({
        integration: 'Google',
        domain: 'Calendar',
        scope: 'manage',
      });

      this.addSkill({
        domain: 'Calendar',
        scope: 'manage',
        skill: 'create-calendar',
      });

      console.log(this.selectedAvatarForm);
    }, 1000);
  }

  get appearances() {
    return this.selectedAvatarForm.controls
      .appearances as FormArray<Appearance>;
  }

  get physics() {
    return this.selectedAvatarForm.controls.physics as FormArray<any>;
  }

  get roles() {
    return this.selectedAvatarForm.controls.roles as FormArray<any>;
  }

  get routines() {
    return this.selectedAvatarForm.controls.routines as FormArray<any>;
  }

  get scopes() {
    return this.selectedAvatarForm.controls.scopes as FormArray<Scope>;
  }

  get skills() {
    return this.selectedAvatarForm.controls.skills as FormArray<Skill>;
  }

  addAppearance(appearance: Appearance) {
    this.appearances.push(
      new FormGroup({
        protocol: new FormControl(appearance.protocol),
        smallPreviewUrl: new FormControl(appearance.smallPreviewUrl),
        largePreviewUrl: new FormControl(appearance.largePreviewUrl),
      })
    );
  }

  addScope(scope: Scope) {
    this.scopes.push(
      new FormGroup<Scope>({
        domain: new FormControl(scope.domain),
        integration: new FormControl(scope.integration),
        scope: new FormControl(scope.scope),
      })
    );
  }

  addSkill(skill: Skill) {
    this.skills.push(
      new FormGroup<Skill>({
        domain: new FormControl(skill.domain),
        scope: new FormControl(skill.scope),
        skill: new FormControl(skill.skill),
      })
    );
  }
}
