import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  Package,
  PackageModelToken,
  PackagesService,
} from './packages.service';

@Controller({
  path: 'packages',
})
export class PackagesController {
  constructor(private readonly service: PackagesService) {}

  @Get('/')
  getPackages(): Observable<Record<string, Package>> {
    return this.service.getPackages();
  }

  @Post('/')
  createPackage(
    @Query('name') name: string,
    @Query('type') type: 'lib' | 'app' = 'lib'
  ) {
    return this.service.createPackage(name, type);
  }

  @Get('/:name')
  getPackage(@Param('name') name: string): Observable<Package> {
    return this.service.getPackage(name);
  }

  @Get('/:name/models')
  getModels(@Param('name') name: string): Observable<PackageModelToken[]> {
    return this.service.getModels(name);
  }

  @Post('/:name/retype')
  retypePackage(
    @Param('name') name: string,
    @Query('newType') newType: 'lib' | 'app' = 'lib'
  ) {
    return this.service.retypePackage(name, newType);
  }

  @Post('/:name/rename')
  renamePackage(
    @Param('name') name: string,
    @Query('newName') newName: string
  ) {
    return this.service.renamePackage(name, newName);
  }

  @Post('/:name/models')
  createModel(@Param('name') name: string, @Body('model') model: string) {
    return this.service.createModel(name, model);
  }

  @Get('/:name/models/:model')
  getModel(
    @Param('name') name: string,
    @Param('model') model: string
  ): Observable<PackageModelToken> {
    return this.service.getModel(name, model);
  }
}
