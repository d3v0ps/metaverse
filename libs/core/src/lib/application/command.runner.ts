import { Observable } from 'rxjs';
import { Command } from './command';

export interface CommandRunner<TCommand extends Command, TResponse = void> {
  run(command: TCommand): Observable<TResponse>;
}

export type AnyCommandRunner = CommandRunner<Command>;
