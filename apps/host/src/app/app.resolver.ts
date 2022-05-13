import { Application } from '@central-factory/platforms/__generated__/gql/index.gql';
import { Domain } from '@central-factory/platforms/__generated__/models';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { lastValueFrom } from 'rxjs';
import { AppService } from './app.service';

@Resolver((of) => Application)
export class ApplicationResolver {
  constructor(private applicationService: AppService) {}

  @Query((returns) => Application)
  async repository(
    @Args('domains', { type: () => [String] }) domains: string[] = []
  ): Promise<Application> {
    return {
      ...(await this.applicationService.getRoot()),
      domains: domains.map((name) => ({ name })),
    };
  }

  @ResolveField()
  package(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Parent() application: Application
  ): Promise<Application['package']> {
    return this.applicationService.getPackage();
  }

  @ResolveField()
  domains(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Parent() application: Application
  ): Promise<Domain[]> {
    return lastValueFrom(
      this.applicationService.getDomains(application.domains.map((d) => d.name))
    );
  }

  @ResolveField()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readme(@Parent() application: Application): Promise<Application['readme']> {
    return this.applicationService.getReadme();
  }

  @ResolveField()
  workspace(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Parent() application: Application
  ): Promise<Application['workspace']> {
    return this.applicationService.getWorkspace();
  }
}
