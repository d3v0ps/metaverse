import { Observable, of } from 'rxjs';
import { CreateAvatarCommand } from './create-avatar.command';
import {
  CreateAvatarRunner,
  CREATE_AVATAR_RUNNERS_TOKEN,
} from './create-avatar.runner';

export class LocalCreateAvatarRunner implements CreateAvatarRunner {
  run(command: CreateAvatarCommand): Observable<void> {
    return of();
  }
}

export const LOCAL_CREATE_AVATAR_RUNNER_PROVIDER = {
  provide: CREATE_AVATAR_RUNNERS_TOKEN,
  useClass: LocalCreateAvatarRunner,
  multi: true,
};

/**
 * Problemáticas
 * En unos casos, el "command repository" y el "read repository" son el mismo. En otros no
 * Si el "command repository" es el mismo que el "read repository", entonces no es necesario ejecutar la persistencia en el read repository
 * Si el "command repository" es distinto que el "read repository", entonces es necesario ejecutar la persistencia en el read repository
 */

/**
 * New packages:
 * - seeder: worlds seeds generation
 * - crawler
 */

/**
 * Assets catalog scrapper
 * url
 * itemsContainerSelector
 * itemSelector
 * itemTitleSelector
 * itemUrlSelector
 * itemImageSelector
 * itemDescriptionSelector
 * itemPriceSelector
 * itemCurrencySelector
 */
