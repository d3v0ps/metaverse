import { Repository } from '@central-factory/persistence/repository';
import { Injectable } from '@nestjs/common';
import {
  GoogleSearchRepositoryAdapter,
  SearchResult,
} from '../adapters/google-search.adapter';

@Injectable()
export class GoogleSearchRepository extends Repository<SearchResult, string> {
  constructor(protected adapter: GoogleSearchRepositoryAdapter) {
    super(adapter);
  }
}
