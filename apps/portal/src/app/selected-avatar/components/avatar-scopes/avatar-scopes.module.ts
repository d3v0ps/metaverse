import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarScopesComponent } from './avatar-scopes.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AvatarScopesComponent],
  exports: [AvatarScopesComponent],
})
export class AvatarScopesModule {}
