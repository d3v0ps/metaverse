import { Logger } from '@nestjs/common';
import { capital, title as titlecase } from 'case';
import { Dree, scanAsync as scanFSTree, ScanOptions } from 'dree';
import {
  lstat,
  mkdirp,
  pathExists,
  readdir,
  readFile,
  writeFile,
} from 'fs-extra';
import { join, resolve } from 'path';
import { from, lastValueFrom, map, Observable, of, switchMap, tap } from 'rxjs';
import slugify from 'slugify';
import { RepositoryAdapter } from '../adapter';
import { Tag } from '../repository';

export type FSQuery = {
  id?: string;
  root?: string;
  depth?: number;
  content?: string;
  type?: string;
};

export type File<TContent = string> = {
  id: string;
  type: string;
  fileName?: string;
  root?: string;
  title?: string;
  slug?: string;
  path?: string;
  icon?: string;
  content?: string;
  isSymbolicLink?: boolean;
  children?: File[];
};

export type Node<TFile extends File = File> = TFile & {
  id: string;
  title: string;
  slug: string;
  icon: string;
  children: Node<TFile>[];
  parent?: Node<TFile>;
  files: File[];
};

export const FS_TREE_REPOSITORY_ADAPTER_MOUNT_FOLDER_TOKEN =
  'FS_TREE_REPOSITORY_ADAPTER_MOUNT_FOLDER';
export const FS_TREE_REPOSITORY_ADAPTER_ROOTS_FOLDERS_TOKEN =
  'FS_TREE_REPOSITORY_ADAPTER_ROOTS_FOLDERS';

export type NodeJSON<TFile extends File = File> = Omit<
  Node<TFile>,
  'parent' | 'children'
> & {
  children: NodeJSON[];
  parent?: Omit<NodeJSON, 'parent' | 'children'>;
  depth?: number;
};

export type FileTreeMount = string;
export type FileTreeRoots = string[];
export type FileTreeIcons = Record<string, string>;

export type FSTreeRepositoryAdapterOptions = {
  tags: Tag[];
  mountFolder: FileTreeMount;
  roots: FileTreeRoots;
  scan?: ScanOptions;
};

export class FSTreeRepositoryAdapter<
  TFile extends File = File,
  TNode extends Node<TFile> = Node<TFile>,
  TContent = string
> implements RepositoryAdapter<TFile, FSQuery>
{
  private indexes = new Map<string, Map<string, TFile>>();
  private slugIndexes = new Map<
    string,
    Map<string, TFile | Map<string, TFile>>
  >();
  private nodeIndexes = new Map<string, Map<string, TNode>>();
  private treeIndexes = new Map<string, Map<string, TNode>>();
  private contentIndexes = new Map<string, Map<string, TContent>>();

  private readonly tags: Tag[] = [];
  private readonly mountFolder: FileTreeMount = `${process.cwd()}/mnt/{rootFolder}`;
  private readonly roots: FileTreeRoots = ['.'];
  private readonly scanOptions?: ScanOptions & { exposeFolders?: boolean };

  constructor(
    { tags, mountFolder, roots, scan }: FSTreeRepositoryAdapterOptions,
    private readonly contentParser: (
      content: string,
      file: File
    ) => TContent = (content: string) => content as unknown as TContent,

    private readonly logger = new Logger(FSTreeRepositoryAdapter.name)
  ) {
    this.tags = tags;
    this.mountFolder = mountFolder;
    this.roots = roots;
    this.scanOptions = scan;
    try {
      this.initialize();
    } catch (error) {
      this.logger.error('Error initializing repository');
      this.logger.error(error);
    }
  }

  async initialize() {
    const rootFolderReplaceSymbol = '{rootFolder}';
    const rootFolderReplacePos = this.mountFolder.indexOf(
      rootFolderReplaceSymbol
    );
    const folders = await readdir(
      this.mountFolder.substring(0, rootFolderReplacePos)
    );

    const rootDirs = folders.reduce<
      { folder: string; root: string; path: string }[]
    >(
      (acc, folder) =>
        acc.concat(
          this.roots.map((root) => ({
            folder,
            root,
            path: resolve(
              this.mountFolder.replace(rootFolderReplaceSymbol, folder),
              root
            ),
          }))
        ),
      []
    );

    await Promise.all(
      rootDirs.map(async ({ folder, root, path }) => {
        const dree = await scanFSTree(path, {
          ...this.scanOptions,
          normalize: true,
          depth: 20,
        });
        const flattened = this.flattenDree(dree, root);

        this.indexes.set(
          folder,
          new Map(flattened.map((f) => [f.id, { ...f, root: folder }]))
        );
        this.slugIndexes.set(
          folder,
          new Map(flattened.map((f) => [f.slug as string, f]))
        );
        this.contentIndexes.set(folder, new Map());
      })
    );

    // await Promise.all(
    //   folders.map((rootFolder) => this.generateIndexes(rootFolder))
    // );

    // await this.generateTree();
  }

  find(query: FSQuery): Observable<TFile[]> {
    if (!query.root) {
      throw new Error(`Invalid query: ${JSON.stringify(query)}`);
    }

    const rootIndexes = this.indexes.get(query.root);
    const slugIndexes = this.slugIndexes.get(query.root);

    if (!rootIndexes || !slugIndexes) {
      this.logger.warn(`Root ${query.root} not found. Resolved as empty array`);
      return of([]);
    }

    if (!query.id) {
      return of(
        Array.from(rootIndexes.values()).filter((f) =>
          query.type ? f.type === query.type : true
        )
      );
    }

    const element = rootIndexes.get(query.id) || slugIndexes.get(query.id);

    if (!element) {
      return of([]);
    }

    if (element instanceof Map) {
      return of(Array.from(element.values()));
    }

    return of([element]);
  }

  findOne(query: FSQuery): Observable<TFile | null> {
    return this.find(query).pipe(
      switchMap(async ([file]) => {
        if (!file) {
          return null;
        }

        if (file.path && (await lstat(file.path)).isFile()) {
          file.content = (await readFile(file.path)).toString();
        }

        return file;
      })
    );
  }

  upsert(query: TFile): Observable<TFile> {
    if (!query.root) {
      throw new Error('Invalid query');
    }

    const rootIndexes = this.indexes.get(query.root);

    if (!rootIndexes) {
      throw new Error(`Root ${query.root} not found`);
    }

    if (!query.id) {
      throw new Error('Invalid query');
    }

    const file = rootIndexes.get(query.id);

    const merged = { slug: query.id, ...file, content: query.content } as TFile;

    const rootFolder = this.mountFolder.replace('{rootFolder}', query.root);

    const path = resolve(rootFolder, query.id);

    return from(writeFile(path, merged.content)).pipe(
      tap(() => this.logger.log(`Upsert ${path} sucess`)),
      map(() => merged)
    );
  }

  async readContent({ root, id }: FSQuery): Promise<TContent | null> {
    if (!root || !id) {
      throw new Error('Invalid query');
    }

    const indexes = this.contentIndexes.get(root);

    if (!indexes) {
      throw new Error(`Root ${root} not found`);
    }

    let parsed = indexes.get(id);

    if (parsed) {
      return parsed;
    }

    const meta = await lastValueFrom(this.findOne({ root, id }));

    if (!meta?.path) {
      return null;
    }

    const isDirectory = await lstat(meta.path).then((stat) =>
      stat.isDirectory()
    );

    if (isDirectory) {
      return null;
    }

    const content = await readFile(meta.path, 'utf8');
    //  const content = (await readFile(meta.path)).toString();

    parsed = this.contentParser(content, meta);

    indexes.set(id, parsed);

    return parsed;
  }

  async readNodes(query: FSQuery): Promise<NodeJSON[]> {
    if (!query.root) {
      throw new Error('Invalid query');
    }

    const rootIndexes = this.nodeIndexes.get(query.root);

    if (!rootIndexes) {
      throw new Error(`Root ${query.root} not found`);
    }

    if (!query.id) {
      return Array.from(rootIndexes.values()).map((taxonomy) =>
        this.nodeToJSON(taxonomy)
      );
    }

    const node = rootIndexes.get(query.id);

    if (!node) {
      throw new Error(`Node ${query.id} not found`);
    }
    return [await this.nodeToJSON(node)];
  }

  async readTree(query: FSQuery): Promise<NodeJSON[]> {
    if (!query.root) {
      throw new Error('Invalid query');
    }

    const rootIndexes =
      query.id && query.id.length > 0
        ? this.nodeIndexes.get(query.root)
        : this.treeIndexes.get(query.root);

    if (!rootIndexes) {
      throw new Error(`Root ${query.root} not found`);
    }

    if (query.id) {
      const node = rootIndexes.get(query.id);

      if (!node) {
        throw new Error(`Node ${query.id} not found`);
      }

      return [await this.treeToJSON(node, query.depth || 0)];
    }

    return Array.from(rootIndexes.values()).map((node) =>
      this.treeToJSON(node, query.depth || 0)
    );
  }

  private async generateIndexes(rootFolder: string) {
    const rootFolderHasIndex = this.indexes.has(rootFolder);

    if (!rootFolderHasIndex) {
      this.indexes.set(rootFolder, new Map());
      this.slugIndexes.set(rootFolder, new Map());
      this.contentIndexes.set(rootFolder, new Map());
    }

    const baseFolder = this.mountFolder.replace('{rootFolder}', rootFolder);

    await Promise.all(
      this.roots.map(async (folder) => {
        const path =
          folder === '.' ? baseFolder : [baseFolder, folder].join('/');
        if (!(await pathExists(path))) {
          await mkdirp(path);
        }

        await this.scanFolder(rootFolder, folder);
      })
    );
  }

  private async scanFolder(root: string, folder: string) {
    const rootFolder = this.mountFolder.replace('{rootFolder}', root);

    const path = resolve(rootFolder, folder);
    const children = await readdir(path);
    const indexes = this.indexes.get(root);
    const slugIndexes = this.slugIndexes.get(root);

    if (!indexes || !slugIndexes) {
      throw new Error(`Invalid root ${rootFolder}`);
    }

    const folderData =
      indexes.get(folder) ||
      ({
        id: folder,
        name: folder,
        path: path,
        children: [],
        fileName: folder,
        slug: encodeURIComponent(folder),
        title: folder,
      } as unknown as TFile);

    if (!indexes.has(folder) || !slugIndexes.has(folder)) {
      indexes.set(folder, folderData);
      slugIndexes.set(folderData.slug || folder, folderData);
    }

    const generateChild = async (child: string) => {
      const childIndex = join(folder, child);
      const childPath = resolve(rootFolder, childIndex);
      const childStat = await lstat(childPath);

      if (child === '..') {
        return;
      }

      if (childStat.isDirectory() || childStat.isSymbolicLink()) {
        const folder = await this.scanFolder(root, childIndex);
        const ref = JSON.parse(JSON.stringify(folder));
        delete ref.children;
        (folderData.children as any[]).push(ref);
        return;
      }

      const file = childPath
        .replace(root, '')
        .split('/')
        .filter((str) => str.length > 1)
        .map((str) => str.split(' '))
        .map(([id, ...nameParts]) => {
          const fileName = nameParts.join(' ');
          const title = fileName.replace(/\.[^/.]+$/, '');
          const slug = slugify(title, { lower: true });
          // const slug = slugify(childPath.replace(root, ''), { lower: true });
          return {
            id: childIndex,
            fileName,
            title,
            slug: encodeURIComponent(childIndex),
            icon:
              this.tags.find((t) => t.name === slug)?.icon ||
              'assets/icons/mdi/newspaper-variant.svg',
          };
        })
        .reduce<TFile>(
          (acc, { id, fileName, title, slug, icon }) =>
            Object.assign(acc, {
              id,
              fileName,
              title,
              slug,
              path: childPath,
              icon,
            }),
          {
            slug: '',
          } as TFile
        );

      indexes.set(childIndex, file);
      slugIndexes.set(childIndex, file);
      (folderData.children as any[]).push(file);
    };

    return children
      .reduce(
        (prev, cur) => prev.then(() => generateChild(cur)),
        Promise.resolve()
      )
      .then(() => folderData);
  }

  private async generateTree() {
    this.slugIndexes.forEach((files, key) => {
      const nodes = Array.from(files.entries()).reduce((acc, [slug, file]) => {
        const taxonomyLevels = slug.split('/').slice(0, -1);

        taxonomyLevels.reduce((previous, current, index) => {
          const slug = `${previous}/${current}`;

          if (!acc.has(slug)) {
            acc.set(slug, {
              id: decodeURIComponent(slug),
              slug,
              title: capital(current),
              icon:
                this.tags.find((t) => t.name === current)?.icon ||
                'assets/icons/mdi/tag.svg',
              files: [],
              children: [],
            } as unknown as TNode);
          }

          if (index === taxonomyLevels.length - 1) {
            acc.get(slug)?.files.push(file as TFile);
          }

          return slug;
        }, 'root');

        return acc;
      }, new Map<string, TNode>());

      this.nodeIndexes.set(key, nodes);

      const nodesArr = Array.from(nodes.values());

      nodesArr.forEach((node) => {
        nodesArr.forEach((candidate: TNode) => {
          const isChild =
            candidate.id !== node.id &&
            candidate.id.replace(
              `/${slugify(candidate.title, { lower: true })}`,
              ''
            ) === node.id;
          if (!isChild) {
            return;
          }
          candidate.parent = node;
          node.children.push(candidate);
        });
      });

      this.treeIndexes.set(
        key,
        new Map(
          nodesArr.filter((node) => !node.parent).map((node) => [node.id, node])
        )
      );
    });
  }

  private nodeToJSON({
    id,
    type,
    title,
    slug,
    children,
    icon,
    files,
    parent,
    isSymbolicLink,
  }: TNode): NodeJSON {
    const node: NodeJSON = {
      id,
      type,
      title,
      slug,
      children: children.map((child) => this.nodeToJSON(child as TNode)),
      icon,
      files,
      isSymbolicLink,
    };

    if (parent) {
      node.parent = {
        id: parent.id,
        type: parent.type,
        title: parent.title,
        icon: parent.icon,
        slug: parent.slug,
        files: parent.files,
        isSymbolicLink: parent.isSymbolicLink,
      };
    }

    return node;
  }

  private treeToJSON(
    {
      id,
      type,
      title,
      slug,
      children,
      icon,
      files,
      parent,
      isSymbolicLink,
    }: TNode,
    depth = 0
  ): NodeJSON {
    const node: NodeJSON = {
      id,
      type,
      title,
      slug,
      children: children.map((child) =>
        this.treeToJSON(child as TNode, depth + 1)
      ),
      icon,
      files,
      depth,
      isSymbolicLink,
    };

    if (parent) {
      node.parent = {
        id: parent.id,
        type: parent.type,
        title: parent.title,
        icon: parent.icon,
        slug: parent.slug,
        files: parent.files,
        isSymbolicLink: parent.isSymbolicLink,
      };
    }

    return node;
  }

  private flattenDree(dree: Dree, root: string): TFile[] {
    const file = this.dreeToFile(dree, root);

    if (dree.type === 'directory') {
      return [
        ...(dree.children || []).reduce(
          (prev, cur) => prev.concat(this.flattenDree(cur, root)),
          [] as TFile[]
        ),
        file,
      ];
    }

    return [file];
  }

  private dreeToFile(
    { isSymbolicLink, name: fileName, path, type }: Dree,
    root: string
  ): TFile {
    const slug = slugify(fileName, { lower: true });
    return {
      id: encodeURIComponent(path.replace(root, '')),
      type,
      slug,
      path,
      fileName,
      title: titlecase(fileName),
      isSymbolicLink,
      icon:
        this.tags.find((t) => t.name === slug)?.icon ||
        'assets/icons/mdi/newspaper-variant.svg',
    } as TFile;
  }
}
