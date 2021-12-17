import { Command } from '@central-factory/core';
import { CreateAvatarPayload } from './create-avatar.payload';

export class CreateAvatarCommand implements Command<CreateAvatarPayload> {
  public readonly type = 'create-task';

  constructor(public readonly payload: CreateAvatarPayload) {}
}
