import { Injectable } from '@nestjs/common';
import { File, FSTreeDatabase, NodeJSON } from './fs-tree.database';

@Injectable()
export class FSTreeRepository {
  constructor(private database: FSTreeDatabase) {}

  async findById(root: string, id: string): Promise<File> {
    const [dbResult] = await this.database.read({ root, id });

    return dbResult;
  }

  async getContent(root: string, id: string): Promise<string> {
    const dbResult = await this.database.readContent({ root, id });

    return dbResult;
  }

  async find(root: string): Promise<File[]> {
    const dbResult = await this.database.read({ root });

    return dbResult;
  }

  async findNodes(root: string): Promise<NodeJSON[]> {
    const dbResult = await this.database.readNodes({ root });

    return dbResult;
  }

  async findTree(root: string, id?: string, depth = 0): Promise<NodeJSON[]> {
    const dbResult = await this.database.readTree(
      {
        root,
        id,
      },
      depth
    );

    return dbResult;
  }
}
