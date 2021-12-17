import { Inject } from '@angular/core';
import { AvatarCreatedEvent } from '@central-factory/avatars/domain/events/avatar-created.event';
import {
  CommandHandler,
  CommandRunnerResolver,
  EventBus,
} from '@central-factory/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { CreateAvatarCommand } from './create-avatar.command';
import {
  CreateAvatarRunner,
  CREATE_AVATAR_RUNNERS_TOKEN,
} from './create-avatar.runner';

export class CreateAvatarCommandHandler
  implements CommandHandler<CreateAvatarCommand>
{
  constructor(
    @Inject(CREATE_AVATAR_RUNNERS_TOKEN) private runners: CreateAvatarRunner[],
    private resolver: CommandRunnerResolver<CreateAvatarRunner>,
    private eventBus: EventBus<AvatarCreatedEvent>
  ) {}

  handle(command: CreateAvatarCommand): Observable<void> {
    return this.resolver.resolve(this.runners, command).pipe(
      switchMap((runner) => runner.run(command)),
      tap(() => this.eventBus.dispatch({}))
    );
  }
}
