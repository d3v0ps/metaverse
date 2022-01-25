import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cf-file-upload',
  template: `
    <div cfBlock="file-upload">
      <button
        cfBlock="button"
        [cfMod]="[theme, 'full-width']"
        (click)="fileInput.click()"
      >
        {{ file ? file.name : fileName || placeholder }}
      </button>
      <input
        #fileInput
        cfElem="input"
        type="file"
        [accept]="accept"
        [disabled]="isDisabled"
      />
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true,
    },
  ],
})
export class FileUploadComponent implements ControlValueAccessor {
  @Input() accept?: string;
  @Input() fileName?: string;
  @Input() placeholder = 'Click to upload file';
  @Input() theme?: string;

  public file?: File;

  isDisabled = false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  onChange = (value: File | undefined) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch = () => {};

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);

    if (!file) {
      return;
    }

    this.file = file;
    this.fileName = file.name;

    this.onTouch();
    this.onChange(this.file);
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}

  writeValue(value: File | undefined) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = value;
  }

  registerOnChange(fn: (value: File | undefined) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
