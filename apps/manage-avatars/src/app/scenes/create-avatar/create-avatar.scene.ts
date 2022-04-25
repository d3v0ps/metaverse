import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OnApplicationLoad } from '@central-factory/applications/models/application-interfaces';

/** Create Avatar view */
@Component({
  selector: 'cf-create-avatar',
  template: `
    <cf-manage-avatar-appearances-scene></cf-manage-avatar-appearances-scene>
    <!-- div cfBlock="scene-content">
      <div cfBlock="create-avatar-scene">
        <ul class="stepper">
          <li class="step active">
            <div class="step-title"></div>
          </li>
          <li class="step">
            <div class="step-title">Step 2</div>
          </li>
          <li class="step">
            <div class="step-title">Step 3</div>
          </li>
        </ul>

        <div cfBlock="create-avatar-info-form"></div>
        <div cfBlock="create-avatar-appearance"></div>
      </div>
      <h2 cfElem="title">Create Avatar</h2>
    </div -->
  `,
})
export class CreateAvatarScene implements OnInit, OnApplicationLoad {
  @Output() applicationLoad = new EventEmitter<void>();

  ngOnInit(): void {
    this.applicationLoad.emit();
  }
}
