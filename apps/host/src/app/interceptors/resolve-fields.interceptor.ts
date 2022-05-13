import { Response, Request } from 'express';

import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export class ResolveFieldsInterceptor<T, TContext = unknown>
  implements NestInterceptor<T, Response<T>>
{
  private context?: TContext;

  private children: ResolveFieldsInterceptor<T, TContext>[] = [];

  constructor(
    private readonly fieldResolvers: Record<
      string,
      (...args: unknown[]) => Promise<unknown>
    > = {}
  ) {}

  initialize(ctx: TContext) {
    this.context = ctx;
    this.children.forEach((b) => b.initialize(this.context));
  }

  withResolvers(
    fieldResolvers: Record<string, (...args: unknown[]) => Promise<unknown>>
  ) {
    const interceptor = new ResolveFieldsInterceptor<T, TContext>(
      Object.assign(this.fieldResolvers, fieldResolvers)
    );
    interceptor.initialize(this.context);
    this.children.push(interceptor);

    return interceptor;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    const httpContext = context.switchToHttp();
    const request: Request = httpContext.getRequest();
    const fields =
      (request.query['fields'] as string) ||
      Object.keys(this.fieldResolvers).join(',');
    return next
      .handle()
      .pipe(
        switchMap(
          (data) => this.resolveFields(fields, data) as Promise<Response<T>>
        )
      );
  }

  private async resolveFields(fields: string, data: unknown): Promise<unknown> {
    return (
      await Promise.all(
        fields
          .split(',')
          .map(async (f) => [
            f,
            this.fieldResolvers[f]
              ? await this.fieldResolvers[f](this.context, data)
              : null,
          ]) as Promise<[string, unknown]>[]
      )
    ).reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), data);
  }
}
