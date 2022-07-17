import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/entity-manager';
import { Repository } from '@central-factory/persistence/repository';
import { BehaviorSubject, forkJoin, switchMap, tap } from 'rxjs';
import {
  TopicDocType,
  USER_TOPIC_COLLECTION_NAME,
} from '../__generated__/collections/topic';
import type { Topic } from '../__generated__/models';

@Injectable({
  providedIn: 'root',
})
export class UserTopicsState {
  public readonly topics$ = new BehaviorSubject<Topic[]>([]);

  private userTopicsRepository?: Repository<TopicDocType>;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<TopicDocType>(
              USER_TOPIC_COLLECTION_NAME,
              'com.central-factory.portals'
            ),
          ])
        ),
        tap(([userTopicsRepository]) => {
          this.userTopicsRepository = userTopicsRepository;

          this.subscribeToDataChanges();
        })
      )
      .subscribe();
  }

  addTopic(topic: Topic) {
    if (!this.userTopicsRepository) {
      throw new Error('Repositories not initialized');
    }

    return this.userTopicsRepository.upsert(topic);
  }

  private subscribeToDataChanges() {
    if (!this.userTopicsRepository) {
      throw new Error('Repositories not initialized');
    }

    this.userTopicsRepository
      .observe()
      .pipe(tap((topics) => this.topics$.next(topics as Topic[])))
      .subscribe();
  }
}
