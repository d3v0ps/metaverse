import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { BehaviorSubject, filter, Subject, takeUntil } from 'rxjs';
import { CommandService } from './command.service';

@Component({
  selector: 'cf-command-bar',
  template: `
    <div
      cfBlock="command-bar"
      [cfMod]="[size, fullLength ? 'full-length' : '']"
    >
      <form
        [formGroup]="form"
        (ngSubmit)="onSubmit()"
        cfBlock="form"
        [cfMod]="['inline', 'horizontal']"
      >
        <div cfBlock="input-group">
          <div cfBlock="form-control">
            <ng-select
              #select
              [items]="searchResults$ | async"
              formControlName="search"
              cfBlock="select"
              bindLabel="name"
              bindValue="id"
              [editableSearchTerm]="true"
              [typeahead]="searchInput$"
              [cfMod]="size"
              (search)="onSearch($event)"
              (keydown.enter)="onEnterKeydown()"
            >
            </ng-select>
          </div>
          <div cfBlock="input-group-append" *ngIf="showSubmitButton">
            <cf-svg-icon
              cfBlock="icon"
              [cfMod]="size"
              src="assets/icons/mdi/magnify.svg"
            ></cf-svg-icon>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .command-bar {
        &--xs {
          .form,
          .input-group {
            margin-bottom: 0;
          }
          .select {
            width: 300px;
          }
        }

        &--full-length {
          .input-group,
          .select {
            width: 100%;
          }
        }
      }
    `,
  ],
})
export class CommandBarComponent implements OnInit, OnDestroy {
  @Input() size: 'm' | 'xs' = 'm';
  @Input() fullLength = false;
  @Input() showSubmitButton = false;

  @ViewChild('select', { static: true }) select?: NgSelectComponent;

  searchInput$ = new Subject<string>();
  slashInput$ = this.searchInput$.pipe(
    filter((search) => search.startsWith('/'))
  );
  searchResults$ = new BehaviorSubject([]);

  form = new FormGroup({
    search: new FormControl<string>(''),
  });
  slashCommands: Record<string, string> = {
    search: 'search ',
    s: 'search ',
    open: 'open ',
    o: 'open ',
  };

  private destroy$ = new Subject<void>();

  constructor(private commandService: CommandService) {}

  ngOnInit() {
    this.commandService.register('search', (query: string) => {
      window.open(`https://www.google.com/search?q=${query}`, '_blank');
    });

    this.slashInput$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      const withoutSlash = value.slice(1);
      const found = this.slashCommands[withoutSlash];
      if (found && this.select) {
        this.select.searchTerm = found;
        this.form.controls.search.setValue(found);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackByFn(item: any) {
    return item.id;
  }

  onSearch($event: { term: string; items: any[] }) {
    this.form.controls.search.setValue($event.term);
  }

  onEnterKeydown() {
    this.onSubmit();
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.commandService.execute(this.form.value.search);
  }
}
