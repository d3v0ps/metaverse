/* eslint-disable @typescript-eslint/no-unused-vars */
import { Application } from '@central-factory/platforms/__generated__/models';
import {
  CacheInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { lastValueFrom } from 'rxjs';
import { AppService } from './app.service';
import { RenderInterceptor } from './interceptors/render.interceptor';
import { ResolveFieldsInterceptor } from './interceptors/resolve-fields.interceptor';

const AppResolveFieldsInterceptor = new ResolveFieldsInterceptor<
  Application,
  AppService
>();

@Controller('')
export class AppController {
  constructor(private readonly applicationService: AppService) {
    AppResolveFieldsInterceptor.initialize(applicationService);
  }

  @ApiTags('workspace')
  @Get('')
  @UseInterceptors(
    new RenderInterceptor('index'),
    AppResolveFieldsInterceptor.withResolvers({
      domains(ctx: AppService, application: Application) {
        return lastValueFrom(
          ctx.getDomains(application.domains.map((d) => d.name))
        );
      },
      package(ctx: AppService, _application: Application) {
        return ctx.getPackage();
      },
      readme(ctx: AppService, _application: Application) {
        return ctx.getReadme();
      },
      workspace(ctx: AppService, _application: Application) {
        return ctx.getWorkspace();
      },
    }),
    CacheInterceptor
  )
  async getIndex(
    @Query('fields') _fields?: string,
    @Query('domains') domains = ''
  ) {
    return {
      ...(await this.applicationService.getRoot()),
      domains: domains
        .split(',')
        .filter((d) => d.length > 0)
        .map((name) => ({ name })),
    };
  }
}
