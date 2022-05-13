/* eslint-disable @typescript-eslint/no-unused-vars */
import { InteropObservable, Observable } from 'rxjs';

export type TemplateNode = {
  type: 'file' | 'folder';
  name: string;
  template?: string;
  templateRenderer?: unknown;
  children?: TemplateNode[];
  parent?: TemplateNode;
};

export abstract class Generator<T = unknown, TPayload = T> {
  generate(_payload: TPayload): Promise<T> {
    throw new Error('Method not implemented');
  }
}
