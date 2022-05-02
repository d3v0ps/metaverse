import { Inject, Injectable, Provider } from '@nestjs/common';
import { capital } from 'case';
import { lstat, mkdirp, pathExists, readdir, readFile } from 'fs-extra';
import { resolve } from 'path';
import slugify from 'slugify';

export type DatabaseQuery = {
  id?: string;
  root?: string;
};

export type File = {
  id: string;
  fileName?: string;
  title?: string;
  slug?: string;
  path?: string;
  icon?: string;
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

export type NodeJSON<TFile extends File = File> = Omit<
  Node<TFile>,
  'parent' | 'children'
> & {
  children: NodeJSON[];
  parent: Omit<NodeJSON, 'parent' | 'children'>;
  depth?: number;
};

export const MOUNT_PROVIDER_INJECTION_TOKEN = 'FILE_TREE_MOUNT';
export type FileTreeMount = string;

export const ROOTS_PROVIDER_INJECTION_TOKEN = 'FILE_TREE_ROOTS';
export type FileTreeRoots = string[];

export const ICONS_PROVIDER_INJECTION_TOKEN = 'FILE_TREE_ICONS';
export type FileTreeIcons = Record<string, string>;

export const MOUNT_PROVIDER: Provider<FileTreeMount> = {
  provide: MOUNT_PROVIDER_INJECTION_TOKEN,
  useValue: `${process.cwd()}/mnt/{rootFolder}/knowledge-base`,
};

export const ROOTS_PROVIDER: Provider<FileTreeRoots> = {
  provide: ROOTS_PROVIDER_INJECTION_TOKEN,
  useValue: ['.'],
};

export const ICONS_PROVIDER: Provider<FileTreeIcons> = {
  provide: ICONS_PROVIDER_INJECTION_TOKEN,
  useValue: {
    society: 'assets/icons/mdi/account-group.svg',
    psychology: 'assets/icons/mdi/head-cog.svg',
    personalities: 'assets/icons/mdi/drama-masks.svg',
    disorders: 'assets/icons/mdi/emoticon-angry.svg',
    philosophy: 'assets/icons/mdi/head-dots-horizontal.svg',
    sociology: 'assets/icons/mdi/human-queue.svg',
    marketing: 'assets/icons/mdi/shopping.svg',
    anthropology: 'assets/icons/mdi/nature-people.svg',
    economics: 'assets/icons/mdi/currency-usd.svg',
    systems: 'assets/icons/mdi/state-machine.svg',
    fitness: 'assets/icons/mdi/heart-pulse.svg',
    productivity: 'assets/icons/mdi/reload.svg',
    'desktop-setup': 'assets/icons/mdi/desktop-tower-monitor.svg',
    diets: 'assets/icons/mdi/food-fork-drink.svg',
  },
};

@Injectable()
export class FSTreeDatabase<
  TFile extends File = File,
  TNode extends Node<TFile> = Node<TFile>
> {
  static folderName = 'knowledge-base';

  private indexes = new Map<string, Map<string, TFile>>();
  private slugIndexes = new Map<string, Map<string, TFile>>();
  private nodeIndexes = new Map<string, Map<string, TNode>>();
  private treeIndexes = new Map<string, Map<string, TNode>>();

  constructor(
    @Inject(MOUNT_PROVIDER_INJECTION_TOKEN)
    private readonly mountFolder: FileTreeMount,
    @Inject(ROOTS_PROVIDER_INJECTION_TOKEN)
    private readonly roots: FileTreeRoots,
    @Inject(ICONS_PROVIDER_INJECTION_TOKEN)
    private readonly icons: FileTreeIcons
  ) {
    this.initialize();
  }

  async initialize() {
    const knowledgeBases = await readdir(
      this.mountFolder.replace(`{rootFolder}/${FSTreeDatabase.folderName}`, '')
    );
    await Promise.all(
      knowledgeBases.map((rootFolder) => this.generateIndexes(rootFolder))
    );

    await this.generateTree();
  }

  async read(query: DatabaseQuery): Promise<TFile[]> {
    const rootIndexes = this.indexes.get(query.root);
    if (query.id) {
      return [rootIndexes.get(query.id)];
    }

    return Array.from(rootIndexes.values());
  }

  async readContent({ root, id }: DatabaseQuery): Promise<string> {
    const [meta] = await this.read({ root, id });
    const content = await (await readFile(meta.path)).toString();

    return content;
  }

  async readNodes(query: DatabaseQuery): Promise<NodeJSON[]> {
    const rootIndexes = this.nodeIndexes.get(query.root);
    if (query.id) {
      return [await this.nodeToJSON(rootIndexes.get(query.id))];
    }

    return Array.from(rootIndexes.values()).map((taxonomy) =>
      this.nodeToJSON(taxonomy)
    );
  }

  async readTree(query: DatabaseQuery, depth = 0): Promise<NodeJSON[]> {
    const rootIndexes =
      query.id && query.id.length > 0
        ? this.nodeIndexes.get(query.root)
        : this.treeIndexes.get(query.root);

    if (query.id) {
      const node = rootIndexes.get(query.id);

      if (!node) {
        throw new Error(`Node ${query.id} not found`);
      }

      return [await this.treeToJSON(node, depth)];
    }

    return Array.from(rootIndexes.values()).map((node) =>
      this.treeToJSON(node, depth)
    );
  }

  private async generateIndexes(rootFolder: string) {
    const baseFolder = this.mountFolder.replace('{rootFolder}', rootFolder);

    const rootFolders = this.roots.map((folder) =>
      folder === '.' ? baseFolder : [baseFolder, folder].join('/')
    );

    await Promise.all(
      rootFolders.map(async (folder) => {
        if (!(await pathExists(folder))) {
          await mkdirp(folder);
        }

        const folderHasIndex = this.indexes.has(rootFolder);

        if (!folderHasIndex) {
          this.indexes.set(rootFolder, new Map());
          this.slugIndexes.set(rootFolder, new Map());
        }

        await this.scanFolder(rootFolder, folder);
      })
    );
  }

  private async scanFolder(rootFolder: string, folder: string, root = folder) {
    const children = await readdir(folder);

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const childPath = resolve(folder, child);
      const childStat = await lstat(childPath);

      if (childStat.isDirectory()) {
        await this.scanFolder(rootFolder, childPath, root);
      } else {
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
              id,
              fileName,
              title,
              slug,
              icon:
                this.icons[slug] || 'assets/icons/mdi/newspaper-variant.svg',
            };
          })
          .reduce<TFile>(
            (acc, { id, fileName, title, slug, icon }) =>
              Object.assign(acc, {
                id,
                fileName,
                title,
                slug: acc.slug?.length > 0 ? `${acc.slug}/${slug}` : slug,
                path: childPath,
                icon,
              }),
            {
              slug: '',
            } as TFile
          );

        const indexes = this.indexes.get(rootFolder);
        const slugIndexes = this.slugIndexes.get(rootFolder);

        indexes.set(file.id, file);
        slugIndexes.set(file.slug, file);
      }
    }
  }

  private async generateTree() {
    this.slugIndexes.forEach((files, key) => {
      const nodes = Array.from(files.entries()).reduce((acc, [slug, file]) => {
        const taxonomyLevels = slug.split('/').slice(0, -1);

        taxonomyLevels.reduce((previous, current, index) => {
          const slug = `${previous}/${current}`;

          if (!acc.has(slug)) {
            acc.set(slug, {
              id: slug,
              slug,
              title: capital(current),
              icon: this.icons[current] || 'assets/icons/mdi/tag.svg',
              files: [],
              children: [],
            } as TNode);
          }

          if (index === taxonomyLevels.length - 1) {
            acc.get(slug).files.push(file);
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
    title,
    slug,
    children,
    icon,
    files,
    parent,
  }: TNode): NodeJSON {
    return {
      id,
      title,
      slug,
      children: children.map((child) => this.nodeToJSON(child as TNode)),
      icon,
      files,
      parent: {
        id: parent?.id,
        title: parent?.title,
        icon: parent?.icon,
        slug: parent?.slug,
        files: parent?.files,
      },
    };
  }

  private treeToJSON(
    { id, title, slug, children, icon, files, parent }: TNode,
    depth = 0
  ): NodeJSON {
    return {
      id,
      title,
      slug,
      children: children.map((child) =>
        this.treeToJSON(child as TNode, depth + 1)
      ),
      icon,
      files,
      parent: {
        id: parent?.id,
        title: parent?.title,
        icon: parent?.icon,
        slug: parent?.slug,
        files: parent?.files,
      },
      depth,
    };
  }
}
