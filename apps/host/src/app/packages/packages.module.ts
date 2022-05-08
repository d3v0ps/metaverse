import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PackagesController } from './packages.controller';
import { PackagesGenerator } from './packages.generator';
import { PackagesService } from './packages.service';

@Module({
  imports: [HttpModule],
  controllers: [PackagesController],
  providers: [PackagesService, PackagesGenerator],
})
export class PackagesModule {}
