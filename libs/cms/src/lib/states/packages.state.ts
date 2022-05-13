import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Application,
  Package,
  TokensSchema,
  TypeToken,
} from '@central-factory/platforms/__generated__/models';
import { BehaviorSubject, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PackagesState {
  application$ = new BehaviorSubject<Application | undefined>(undefined);
  packages$ = new BehaviorSubject<Package[]>([]);
  selectedPackage$ = new BehaviorSubject<Package | undefined>(undefined);
  selectedModel$ = new BehaviorSubject<TokensSchema | undefined>(undefined);
  selectedType$ = new BehaviorSubject<TypeToken | undefined>(undefined);

  private baseUrl = `http://localhost:3333/api`;
  private packagesUrl = `${this.baseUrl}/packages`;

  constructor(private http: HttpClient) {
    this.http
      .get<Application>(this.baseUrl)
      .pipe(catchError((error) => of(undefined)))
      .subscribe((data) => this.application$.next(data));
    this.http
      .get<Package[]>(this.packagesUrl)
      .pipe(catchError((error) => of([])))
      .subscribe((data) => this.packages$.next(data));
  }

  selectModel(packageName: string, name: string) {
    const foundPackage = this.packages$.value.find(
      (pkg) => pkg.name === packageName
    );

    if (!foundPackage) {
      return;
    }

    this.http
      .get(`${this.packagesUrl}/${packageName}/models/${name}`)
      .pipe(catchError((error) => of([])))
      .subscribe((data: any) => {
        this.selectPackage(packageName);
        this.selectedModel$.next(data);
      });
  }

  selectApplication(application: Application) {
    this.selectedPackage$.next(undefined);
    this.selectedModel$.next(undefined);
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
      (pkg as any).models.some(
        (model: TokensSchema) =>
          model.types && model.types.some((t) => t.name === typeName)
      )
    );

    if (!pkg) {
      throw new Error(`No pkg found for type ${typeName}`);
    }

    const model = (pkg as any).models.find(
      (model: TokensSchema) =>
        model.types && model.types.some((t) => t.name === typeName)
    );

    if (!model || !model.types) {
      throw new Error(`No model found for type ${typeName}`);
    }

    const type = (model.types as TypeToken[]).find((t) => typeName === t.name);

    this.selectModel(pkg.name, model.name);
    this.selectedType$.next(type);
  }
}
