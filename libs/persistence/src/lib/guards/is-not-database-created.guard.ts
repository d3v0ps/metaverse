import { Inject, Injectable, InjectionToken } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EntityManager } from '../entity-manager';

export const ON_NOT_DATABASE_CREATED_GUARD_FAILURE_REDIRECT_TOKEN =
  new InjectionToken<string>(
    'ON_NOT_DATABASE_CREATED_GUARD_FAILURE_REDIRECT_TOKEN',
    {
      providedIn: 'root',
      factory: () => '/',
    }
  );

@Injectable({
  providedIn: 'root',
})
export class IsNotDatabaseCreatedGuard implements CanActivate {
  constructor(
    private entityManager: EntityManager,
    private router: Router,
    @Inject(ON_NOT_DATABASE_CREATED_GUARD_FAILURE_REDIRECT_TOKEN)
    private failureRedirectTo: string
  ) {}

  public canActivate(): boolean {
    const isDatabaseCreated = this.entityManager.isDatabaseCreated();

    if (isDatabaseCreated) {
      this.router.navigate([this.failureRedirectTo]);
    }

    return !isDatabaseCreated;
  }
}
