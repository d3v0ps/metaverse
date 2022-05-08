import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PackagesController } from './packages.controller';
import { PackagesService } from './packages.service';

@Module({
  imports: [HttpModule],
  controllers: [PackagesController],
  providers: [PackagesService],
})
export class PackagesModule {}
