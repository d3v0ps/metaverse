import { Observable } from 'rxjs';
import { Command } from './command';

export interface CommandHandler<TCommand extends Command, TResponse = void> {
  handle(command: TCommand): Observable<TResponse>;
}
