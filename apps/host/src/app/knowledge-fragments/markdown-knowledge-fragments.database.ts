import { Injectable } from '@nestjs/common';
import { capital } from 'case';
import { lstat, mkdirp, pathExists, readdir, readFile } from 'fs-extra';
import slugify from 'slugify';

export type DatabaseQuery = {
  id?: string;
  root?: string;
};

export type TaxonomySymbol = {
  id: string;
  fileName?: string;
  title?: string;
  slug?: string;
  path?: string;
  icon?: string;
};

export type TaxonomyLeaf = {
  id: string;
  title: string;
  slug: string;
  icon: string;
  children: TaxonomyLeaf[];
  parent?: TaxonomyLeaf;
  symbols: TaxonomySymbol[];
};

export type TaxonomyLeafJSON = Omit<TaxonomyLeaf, 'parent' | 'children'> & {
  children: TaxonomyLeafJSON[];
  parent: Omit<TaxonomyLeafJSON, 'parent' | 'children'>;
  depth?: number;
};

@Injectable()
export class MarkdownKnowledgeFragmentsDatabase {
  static mountFolder = `${process.cwd()}/mnt/{knowledgeBase}/knowledge-base`;
  private rootFolders = ['00-09 Root'];

  private indexes = new Map<string, Map<string, TaxonomySymbol>>();
  private slugIndexes = new Map<string, Map<string, TaxonomySymbol>>();
  private taxonomyIndexes = new Map<string, Map<string, TaxonomyLeaf>>();
  private taxonomyTreeIndexes = new Map<string, Map<string, TaxonomyLeaf>>();

  iconMapping: Record<string, string> = {
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
  };

  constructor() {
    this.initialize();
  }

  async initialize() {
    await this.generateIndexes('001');
    await this.generateTree();
  }

  async read(query: DatabaseQuery) {
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

  async readTaxonomies(query: DatabaseQuery): Promise<TaxonomyLeafJSON[]> {
    const rootIndexes = this.taxonomyIndexes.get(query.root);
    if (query.id) {
      return [await this.taxonomyLeafToJSON(rootIndexes.get(query.id))];
    }

    return Array.from(rootIndexes.values()).map((taxonomy) =>
      this.taxonomyLeafToJSON(taxonomy)
    );
  }

  async readTaxonomiesTree(
    query: DatabaseQuery,
    depth = 0
  ): Promise<TaxonomyLeafJSON[]> {
    const rootIndexes =
      query.id && query.id.length > 0
        ? this.taxonomyIndexes.get(query.root)
        : this.taxonomyTreeIndexes.get(query.root);

    if (query.id) {
      return [await this.taxonomyTreeToJSON(rootIndexes.get(query.id), depth)];
    }

    return Array.from(rootIndexes.values()).map((taxonomy) =>
      this.taxonomyTreeToJSON(taxonomy, depth)
    );
  }

  private async generateIndexes(rootFolder: string) {
    const baseFolder = MarkdownKnowledgeFragmentsDatabase.mountFolder.replace(
      '{knowledgeBase}',
      rootFolder
    );

    const rootFolders = this.rootFolders.map((folder) =>
      [baseFolder, folder].join('/')
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
      const childPath = `${folder}/${child}`;
      const childStat = await lstat(childPath);

      if (childStat.isDirectory()) {
        await this.scanFolder(rootFolder, childPath, root);
      } else {
        const symbol = childPath
          .replace(root, '')
          .split('/')
          .filter((str) => str.length > 1)
          .map((str) => str.split(' '))
          .map<TaxonomySymbol>(([id, ...symbols]) => {
            const fileName = symbols.join(' ');
            const title = fileName.replace(/\.[^/.]+$/, '');
            const slug = slugify(title, { lower: true });
            return {
              id,
              fileName,
              title,
              slug,
              icon:
                this.iconMapping[slug] ||
                'assets/icons/mdi/newspaper-variant.svg',
            };
          })
          .reduce<TaxonomySymbol>(
            (acc, { id, fileName, title, slug, icon }) =>
              Object.assign(acc, {
                id,
                fileName,
                title,
                slug: `${acc.slug}/${slug}`,
                path: childPath,
                icon,
              }),
            {} as TaxonomySymbol
          );

        const indexes = this.indexes.get(rootFolder);
        const slugIndexes = this.slugIndexes.get(rootFolder);

        indexes.set(symbol.id, symbol);
        slugIndexes.set(symbol.slug, symbol);
      }
    }
  }

  private async generateTree() {
    this.slugIndexes.forEach((symbols, key) => {
      const taxonomies = Array.from(symbols.entries()).reduce(
        (acc, [slug, symbol]) => {
          const taxonomyLevels = slug.split('/').slice(0, -1);

          taxonomyLevels.reduce((previous, current, index) => {
            const slug = `${previous}/${current}`;

            if (!acc.has(slug)) {
              acc.set(slug, {
                id: slug,
                slug,
                title: capital(current),
                icon: this.iconMapping[current] || 'assets/icons/mdi/tag.svg',
                symbols: [],
                children: [],
              });
            }

            if (index === taxonomyLevels.length - 1) {
              acc.get(slug).symbols.push(symbol);
            }

            return slug;
          }, 'root');

          return acc;
        },
        new Map<string, TaxonomyLeaf>()
      );

      this.taxonomyIndexes.set(key, taxonomies);

      const taxonomiesArr = Array.from(taxonomies.values());

      taxonomiesArr.forEach((taxonomy) => {
        taxonomiesArr.forEach((candidate: TaxonomyLeaf) => {
          const isChild =
            candidate.id !== taxonomy.id &&
            candidate.id.replace(
              `/${slugify(candidate.title).toLowerCase()}`,
              ''
            ) === taxonomy.id;
          if (!isChild) {
            return;
          }
          candidate.parent = taxonomy;
          taxonomy.children.push(candidate);
        });
      });

      this.taxonomyTreeIndexes.set(
        key,
        new Map(
          taxonomiesArr
            .filter((taxonomy) => !taxonomy.parent)
            .map((taxonomy) => [taxonomy.id, taxonomy])
        )
      );
    });
  }

  private taxonomyLeafToJSON(taxonomy: TaxonomyLeaf): TaxonomyLeafJSON {
    return {
      id: taxonomy.id,
      title: taxonomy.title,
      slug: taxonomy.slug,
      children: taxonomy.children.map((child) =>
        this.taxonomyLeafToJSON(child)
      ),
      icon: taxonomy.icon,
      symbols: taxonomy.symbols,
      parent: {
        id: taxonomy.parent?.id,
        title: taxonomy.parent?.title,
        icon: taxonomy.icon,
        slug: taxonomy.parent?.slug,
        symbols: taxonomy.symbols,
      },
    };
  }

  private taxonomyTreeToJSON(
    taxonomy: TaxonomyLeaf,
    depth = 0
  ): TaxonomyLeafJSON {
    return {
      id: taxonomy.id,
      title: taxonomy.title,
      slug: taxonomy.slug,
      children: taxonomy.children.map((child) =>
        this.taxonomyTreeToJSON(child, depth + 1)
      ),
      icon: taxonomy.icon,
      symbols: taxonomy.symbols,
      parent: {
        id: taxonomy.parent?.id,
        title: taxonomy.parent?.title,
        icon: taxonomy.icon,
        slug: taxonomy.parent?.slug,
        symbols: taxonomy.symbols,
      },
      depth,
    };
  }
}
