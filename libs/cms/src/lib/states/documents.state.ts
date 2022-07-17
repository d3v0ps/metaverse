import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Package as Document } from '@central-factory/platforms/__generated__/models';
import { BehaviorSubject, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentsState {
  documents$ = new BehaviorSubject<Document[]>([]);
  selectedDocument$ = new BehaviorSubject<Document | undefined>(undefined);

  private baseUrl = `http://localhost:3333/api`;
  private documentsUrl = `${this.baseUrl}/documents`;

  constructor(private http: HttpClient) {
    this.http
      .get<Document[]>(this.documentsUrl)
      .pipe(catchError((error) => of([])))
      .subscribe((data) => this.documents$.next(data));
  }

  selectDocument(documentId: string) {
    const foundDocument = this.documents$.value.find(
      (doc) => doc.name === documentId
    );

    if (!foundDocument) {
      return;
    }

    this.selectedDocument$.next(foundDocument);
  }
}
