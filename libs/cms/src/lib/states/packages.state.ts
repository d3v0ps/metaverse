import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  TokensSchema,
  TypeToken,
} from '@central-factory/platforms/__generated__/models';
import { BehaviorSubject, catchError, of } from 'rxjs';

export type Package = {
  name: string;
  readme?: string;
  models: TokensSchema[];
};

@Injectable({ providedIn: 'root' })
export class PackagesState {
  packages$ = new BehaviorSubject<Package[]>([]);
  selectedPackage$ = new BehaviorSubject<Package | undefined>(undefined);
  selectedModel$ = new BehaviorSubject<TokensSchema | undefined>(undefined);
  selectedType$ = new BehaviorSubject<TypeToken | undefined>(undefined);

  private baseUrl = `http://localhost:3333/api/packages`;

  constructor(private http: HttpClient) {
    this.http
      .get(this.baseUrl)
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
      .get(`${this.baseUrl}/${packageName}/models/${name}`)
      .pipe(catchError((error) => of([])))
      .subscribe((data: any) => {
        this.selectPackage(packageName);
        this.selectedModel$.next(data);
      });
  }

  selectPackage(packageName: string) {
    const foundPackage = this.packages$.value.find(
      (pkg) => pkg.name === packageName
    );

    if (!foundPackage) {
      return;
    }

    this.selectedPackage$.next(foundPackage);
    this.selectedModel$.next(undefined);
  }

  selectType(typeName: string) {
    const pkg = this.packages$.value.find((pkg) =>
      pkg.models.some(
        (model) => model.types && model.types.some((t) => t.name === typeName)
      )
    );

    if (!pkg) {
      throw new Error(`No pkg found for type ${typeName}`);
    }

    const model = pkg.models.find(
      (model) => model.types && model.types.some((t) => t.name === typeName)
    );

    if (!model || !model.types) {
      throw new Error(`No model found for type ${typeName}`);
    }

    const type = (model.types as TypeToken[]).find((t) => typeName === t.name);

    this.selectModel(pkg.name, model.name);
    this.selectedType$.next(type);
  }
}
