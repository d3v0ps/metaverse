import {
  Package,
  TokensSchema,
} from '@central-factory/platforms/__generated__/models';
import {
  Body,
  CacheInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { RenderInterceptor } from '../interceptors/render.interceptor';
import { PackagesGenerator } from './packages.generator';
import { PackagesService } from './packages.service';

@ApiTags('packages')
@Controller()
export class PackagesController {
  constructor(
    private readonly service: PackagesService,
    private readonly generator: PackagesGenerator
  ) {}

  @Get('')
  @ApiOkResponse({
    type: 'string', // Package,
    isArray: true,
  })
  @UseInterceptors(new RenderInterceptor('list'), CacheInterceptor)
  getPackages(): Observable<Package[]> {
    return this.service.getPackages();
  }

  @Post('')
  @ApiCreatedResponse()
  createPackage(
    @Query('name') name: string,
    @Query('type') type: 'lib' | 'app' = 'lib'
  ) {
    return this.service.createPackage(name, type);
  }

  @Post('generate')
  @ApiCreatedResponse()
  generate(@Query('packages') packages: string[]) {
    // NOTE: Don't wait for the promise to resolve
    this.service.generatePackages(packages).subscribe();
    return;
  }

  @Get(':name')
  @ApiOkResponse({
    type: 'string', // Package,
  })
  @UseInterceptors(new RenderInterceptor('item'), CacheInterceptor)
  getPackage(@Param('name') name: string): Observable<Package> {
    return this.service.getPackage(name);
  }

  @Get(':name/models')
  @ApiOkResponse({
    type: 'string', // TokensSchema,
    isArray: true,
  })
  @UseInterceptors(new RenderInterceptor('list'), CacheInterceptor)
  getModels(@Param('name') name: string): Promise<TokensSchema[]> {
    return this.service.getModels(name);
  }

  @Post(':name/generate')
  @ApiCreatedResponse()
  generatePackage(@Param('name') name: string) {
    // NOTE: Don't wait for the promise to resolve
    this.service.generatePackages(name).subscribe();
    return;
  }

  @Post(':name/retype')
  @ApiCreatedResponse()
  retypePackage(
    @Param('name') name: string,
    @Query('newType') newType: 'lib' | 'app' = 'lib'
  ) {
    return this.service.retypePackage(name, newType);
  }

  @Post(':name/rename')
  @ApiCreatedResponse()
  async renamePackage(
    @Param('name') name: string,
    @Query('newName') newName: string
  ) {
    return this.service.renamePackage(name, newName);
  }

  @Post(':name/models')
  @ApiCreatedResponse()
  async createModel(@Param('name') name: string, @Body('model') model: string) {
    return this.service.createModel(name, model);
  }

  @Get(':name/models/:model')
  @ApiOkResponse({
    type: 'string', // TokensSchema,
  })
  @UseInterceptors(new RenderInterceptor('list'), CacheInterceptor)
  async getModel(
    @Param('name') name: string,
    @Param('model') model: string
  ): Promise<TokensSchema> {
    return this.service.getModel(name, model);
  }
}
