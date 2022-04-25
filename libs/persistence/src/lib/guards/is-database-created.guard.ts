import { Inject, Injectable, InjectionToken } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EntityManager } from '../services/entity-manager';

export const ON_DATABASE_CREATED_GUARD_FAILURE_REDIRECT_TOKEN =
  new InjectionToken<string>(
    'ON_DATABASE_CREATED_GUARD_FAILURE_REDIRECT_TOKEN',
    {
      providedIn: 'root',
      factory: () => '/login',
    }
  );

@Injectable({
  providedIn: 'root',
})
export class IsDatabaseCreatedGuard implements CanActivate {
  constructor(
    private entityManager: EntityManager,
    private router: Router,
    @Inject(ON_DATABASE_CREATED_GUARD_FAILURE_REDIRECT_TOKEN)
    private failureRedirectTo: string
  ) {}

  public canActivate(): boolean {
    const isDatabaseCreated = this.entityManager.isDatabaseCreated();

    if (!isDatabaseCreated) {
      this.router.navigate([this.failureRedirectTo]);
    }

    return isDatabaseCreated;
  }
}
