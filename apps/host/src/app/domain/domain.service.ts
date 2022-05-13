import {
  File,
  FSQuery,
  FSTreeRepositoryAdapter,
  Node,
} from '@central-factory/persistence/adapters/fs-tree.adapter';
import { Repository } from '@central-factory/persistence/repository';
import {
  Domain,
  TokensSchema,
} from '@central-factory/platforms/__generated__/models';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';

export type DomainQuery = {
  packages?: string[];
};

export class DomainService {
  constructor(private tokensRepository: Repository<File, FSQuery>) {}

  find({ packages = [] }: DomainQuery): Observable<Domain[]> {
    const adapter =
      this.tokensRepository.getAdapter<
        FSTreeRepositoryAdapter<File, Node<File>, TokensSchema>
      >();

    if (packages.length === 0) {
      return of([]);
    }

    return forkJoin(
      packages.map((pkg) =>
        this.tokensRepository.find({ root: pkg, type: 'file' }).pipe(
          switchMap((files) =>
            files.length
              ? forkJoin(
                  files.map(({ root, id }) =>
                    adapter
                      .readContent({ root, id })
                      .then((c) => Object.assign(c, { domain: root }))
                  )
                ).pipe(
                  map((tokens) => ({
                    name: pkg,
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    tokens: tokens.sort((a, b) =>
                      a.name.toLowerCase() === 'index' ? -1 : 1
                    ),
                  }))
                )
              : of({
                  name: pkg,
                  tokens: [],
                })
          )
        )
      )
    ).pipe(
      map((domains: Domain[]) => domains.filter((d) => d.tokens.length > 0))
    );
  }
}
