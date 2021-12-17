import { Observable, of } from 'rxjs';
import { AnyCommandRunner } from './command.runner';

export class CommandRunnerResolver<
  TActionRunner extends AnyCommandRunner,
  TAction = unknown
> {
  public resolve(
    runners: TActionRunner[],
    action?: TAction
  ): Observable<TActionRunner> {
    return of(runners[0]);
  }
}
