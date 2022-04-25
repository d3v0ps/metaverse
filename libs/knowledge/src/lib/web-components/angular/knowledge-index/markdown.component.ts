import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { gfm } from '@milkdown/preset-gfm';
import { nord } from '@milkdown/theme-nord';

@Component({
  selector: 'cf-markdown',
  template: `
    <div cfBlock="markdown">
      <div #editorRef></div>
    </div>
  `,
})
export class MarkdownComponent {
  @Input() set content(value: string | undefined) {
    if (!value) {
      return;
    }

    const hasFrontMatter = value.startsWith('---');

    if (!hasFrontMatter) {
      this._content = value;
      return;
    }

    const [_, frontMatter, ...fragments] = value.split('---');

    this._content = fragments.join('---');
    this.frontMatter = frontMatter;

    this.render();
  }
  get content(): string | undefined {
    return this._content;
  }

  @ViewChild('editorRef') editorRef?: ElementRef;

  frontMatter?: string;

  private _content?: string;

  ngAfterViewInit() {
    this.render();
  }

  render() {
    if (!this.editorRef || !this.content) {
      return;
    }

    const rootElem = this.editorRef.nativeElement as HTMLElement;

    if (rootElem.children) {
      Array.from(rootElem.children).forEach((child) =>
        rootElem.removeChild(child)
      );
    }

    Editor.make()
      .config((ctx) => {
        if (!this.editorRef || !this.content) {
          return;
        }
        ctx.set(rootCtx, this.editorRef.nativeElement);
        ctx.set(defaultValueCtx, this.content);
      })
      .use(nord)
      .use(gfm)
      .create();
  }
}
