import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export class AppThrottlerGuard extends ThrottlerGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    switch (context.getType() as string) {
      case 'graphql':
        // skip throttling on graphql requests, this doesn't work
        return true;
      default:
        return super.canActivate(context);
    }
  }
  getRequestResponse(context: ExecutionContext) {
    switch (context.getType() as string) {
      case 'graphql':
        return this.getGqlRequestResponse(context);
      default:
        return super.getRequestResponse(context);
    }
  }

  private getGqlRequestResponse(context: ExecutionContext) {
    const gqlCtx = GqlExecutionContext.create(context);
    const { req, res } = gqlCtx.getContext();
    return { req, res };
  }
}
