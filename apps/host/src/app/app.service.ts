import {
  Application,
  Domain,
  Package,
  Workspace,
} from '@central-factory/platforms/__generated__/models';
import { Injectable } from '@nestjs/common';
import { readFile, readJSON } from 'fs-extra';
import { resolve } from 'path';
import { map, Observable, of, switchMap } from 'rxjs';
import { DomainService } from './domain/domain.service';
import { PackagesService } from './packages/packages.service';

@Injectable()
export class AppService {
  constructor(
    private packagesService: PackagesService,
    private domainService: DomainService
  ) {}

  async getRoot(): Promise<Application> {
    return {} as Application;
  }

  async getPackage(): Promise<Package> {
    const packagePath = resolve(process.cwd(), 'package.json');
    const pkg: Package = await readJSON(packagePath);

    return pkg;
  }

  async getWorkspace(): Promise<Workspace> {
    const configPath = resolve(process.cwd(), 'angular.json');
    const config: Workspace = await readJSON(configPath);

    return config;
  }

  getDomains(domains: string[] = []): Observable<Domain[]> {
    return (domains.length > 0 ? of(domains) : this.getAllDomainNames()).pipe(
      switchMap((packages) => this.domainService.find({ packages }))
    );
  }

  async getReadme(): Promise<string> {
    const configPath = resolve(process.cwd(), 'README.md');
    const readme = await readFile(configPath, 'utf8');

    return readme;
  }

  private getAllDomainNames(): Observable<string[]> {
    return this.packagesService
      .getPackages()
      .pipe(
        map((packages) =>
          packages
            .map((pkg) => pkg.name)
            .filter((pkg) => pkg !== '@central-factory/metaverse')
        )
      );
  }
}
