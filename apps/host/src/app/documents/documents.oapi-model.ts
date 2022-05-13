import {
  ContentType,
  Document as TDocument,
  Meta as TMeta,
  Section as TSection,
} from '@central-factory/notes/models/meta';
import { ApiProperty } from '@nestjs/swagger';
import { File, NodeJSON as TNodeJSON } from '../databases/fs-tree.database';

export class Meta implements TMeta {
  @ApiProperty()
  contentType: ContentType;

  @ApiProperty()
  title: string;
}

export class Section implements TSection {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;
}

export class Document implements TDocument {
  @ApiProperty()
  id: string;
  @ApiProperty({
    type: () => Meta,
  })
  meta: TMeta;
  @ApiProperty({
    type: () => [Section],
  })
  sections?: TSection[];

  @ApiProperty({ nullable: true })
  content?: string;
}

export class NodeJSON implements TNodeJSON {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  icon: string;
  @ApiProperty()
  files: File[];
  @ApiProperty()
  fileName?: string;
  @ApiProperty()
  path?: string;
  @ApiProperty()
  children: TNodeJSON<File>[];
  parent: Omit<TNodeJSON<File>, 'parent' | 'children'>;
  depth?: number;
}

export class SearchResult {
  @ApiProperty()
  content?: string;
  @ApiProperty()
  url?: string;
  @ApiProperty()
  title?: string;
}
