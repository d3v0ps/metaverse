import { CommandRunner } from '@central-factory/core';
import { CreateAvatarCommand } from './create-avatar.command';

export type CreateAvatarRunner = CommandRunner<CreateAvatarCommand>;

export const CREATE_AVATAR_RUNNER_TOKEN = 'CreateAvatarRunner';
export const CREATE_AVATAR_RUNNERS_TOKEN = 'CreateAvatarRunners';
