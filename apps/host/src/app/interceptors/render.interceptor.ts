import { Response } from 'express';
import { resolve } from 'path';

import { render } from '@central-factory/platforms/engines/handlebars/render';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export class RenderInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor(private readonly template: string) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest();
    const templatePath = resolve(
      process.cwd(),
      'dist',
      'apps',
      'host',
      'assets',
      'views',
      `${this.template}.hbs`
    );

    const shouldReturnHTML = request.headers.accept.includes('text/html');
    return next
      .handle()
      .pipe(
        switchMap((data) =>
          shouldReturnHTML ? render(templatePath, data) : Promise.resolve(data)
        )
      );
  }
}
