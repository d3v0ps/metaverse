import { Module } from '@nestjs/common';
import {
  FSTreeDatabase,
  ICONS_PROVIDER,
  MOUNT_PROVIDER,
  ROOTS_PROVIDER,
} from './fs-tree.database';
import { FSTreeRepository } from './fs-tree.repository';
import { GoogleSearchRepository } from './google-search.repository';

@Module({
  imports: [],
  providers: [
    FSTreeDatabase,
    FSTreeRepository,
    GoogleSearchRepository,
    ICONS_PROVIDER,
    MOUNT_PROVIDER,
    ROOTS_PROVIDER,
  ],
  exports: [FSTreeDatabase, FSTreeRepository, GoogleSearchRepository],
})
export class DatabaseModule {}
