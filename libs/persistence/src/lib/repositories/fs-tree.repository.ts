import { Repository } from '@central-factory/persistence/repository';
import { Injectable } from '@nestjs/common';
import {
  File,
  FSQuery,
  FSTreeRepositoryAdapter,
  NodeJSON,
} from '../adapters/fs-tree.adapter';

@Injectable()
export class FSTreeRepository extends Repository<File, FSQuery> {
  constructor(protected adapter: FSTreeRepositoryAdapter) {
    super(adapter);
  }

  async getContent(query: FSQuery): Promise<string | null> {
    return this.adapter.readContent(query);
  }

  async findNodes(query: FSQuery): Promise<NodeJSON[]> {
    return this.adapter.readNodes(query);
  }

  async findTree(query: FSQuery): Promise<NodeJSON[]> {
    return this.adapter.readTree(query);
  }
}
