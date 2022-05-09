import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PackagesGenerator } from './packages.generator';
import {
  Package,
  PackageModelToken,
  PackagesService,
} from './packages.service';

@Controller({
  path: 'packages',
})
export class PackagesController {
  constructor(
    private readonly service: PackagesService,
    private readonly generator: PackagesGenerator
  ) {}

  @Get('/')
  async getPackages(): Promise<Package[]> {
    return this.service.getPackages();
  }

  @Post('/')
  async createPackage(
    @Query('name') name: string,
    @Query('type') type: 'lib' | 'app' = 'lib'
  ) {
    return this.service.createPackage(name, type);
  }

  @Post('/generate')
  async generate(@Query('packages') packages: string[]) {
    return this.generator.generate(packages);
  }

  @Get('/:name')
  async getPackage(@Param('name') name: string): Promise<Package> {
    return this.service.getPackage(name);
  }

  @Get('/:name/models')
  async getModels(@Param('name') name: string): Promise<PackageModelToken[]> {
    return this.service.getModels(name);
  }

  @Post('/:name/generate')
  async generatePackage(@Param('name') name: string) {
    return this.generator.generate([name]);
  }

  @Post('/:name/retype')
  async retypePackage(
    @Param('name') name: string,
    @Query('newType') newType: 'lib' | 'app' = 'lib'
  ) {
    return this.service.retypePackage(name, newType);
  }

  @Post('/:name/rename')
  async renamePackage(
    @Param('name') name: string,
    @Query('newName') newName: string
  ) {
    return this.service.renamePackage(name, newName);
  }

  @Post('/:name/models')
  async createModel(@Param('name') name: string, @Body('model') model: string) {
    return this.service.createModel(name, model);
  }

  @Get('/:name/models/:model')
  async getModel(
    @Param('name') name: string,
    @Param('model') model: string
  ): Promise<PackageModelToken> {
    return this.service.getModel(name, model);
  }
}
