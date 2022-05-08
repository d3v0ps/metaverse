import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';

type Model = {
  name: string;
  file: string;
  enums?: Record<string, Record<string, string>>;
  types?: Record<
    string,
    {
      [key: string]: {
        type: string;
      };
    }
  >;
  roots?: string[];
  imports?: Record<string, string>;
};

@Injectable({ providedIn: 'root' })
export class PackagesState {
  packages$ = new BehaviorSubject([]);
  selectedModel$ = new BehaviorSubject<Model | undefined>(undefined);

  constructor(private http: HttpClient) {
    this.http
      .get(`http://localhost:3333/api/packages/`)
      .pipe(catchError((error) => of([])))
      .subscribe((data: any) => this.packages$.next(data));
  }

  selectModel(packageName: string, name: string) {
    this.http
      .get(`http://localhost:3333/api/packages/${packageName}/models/${name}`)
      .pipe(catchError((error) => of([])))
      .subscribe((data: any) => {
        console.debug('selectedModel', data);
        this.selectedModel$.next(data);
      });
  }
}
