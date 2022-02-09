import { Injectable } from '@angular/core';
import { EntityManager } from '@central-factory/persistence/services/entity-manager';
import { Repository } from '@central-factory/persistence/services/repository';
import { BehaviorSubject, forkJoin, switchMap, tap } from 'rxjs';
import { UserTopicDocType } from '../collections/user-topics.collection';
import type { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root',
})
export class UserTopicsState {
  public readonly topics$ = new BehaviorSubject<Topic[]>([]);

  private userTopicsRepository?: Repository<UserTopicDocType>;

  constructor(private entityManager: EntityManager) {
    this.entityManager.initialize$
      .pipe(
        switchMap(() =>
          forkJoin([
            this.entityManager.getRepository<UserTopicDocType>(
              'usertopics',
              'com.central-factory.start'
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
