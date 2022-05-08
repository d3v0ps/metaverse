import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';

export type Model = {
  name: string;
  description?: string;
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

export type Package = {
  name: string;
};

@Injectable({ providedIn: 'root' })
export class PackagesState {
  packages$ = new BehaviorSubject<Package[]>([]);
  selectedPackage$ = new BehaviorSubject<Package | undefined>(undefined);
  selectedModel$ = new BehaviorSubject<Model | undefined>(undefined);

  constructor(private http: HttpClient) {
    this.http
      .get(`http://localhost:3333/api/packages/`)
      .pipe(catchError((error) => of([])))
      .subscribe((data: any) => this.packages$.next(data));
  }

  selectModel(packageName: string, name: string) {
    const foundPackage = this.packages$.value.find(
      (pkg) => pkg.name === packageName
    );

    if (!foundPackage) {
      return;
    }

    this.http
      .get(`http://localhost:3333/api/packages/${packageName}/models/${name}`)
      .pipe(catchError((error) => of([])))
      .subscribe((data: any) => {
        this.selectedPackage$.next(foundPackage);
        this.selectedModel$.next(data);
      });
  }
}
