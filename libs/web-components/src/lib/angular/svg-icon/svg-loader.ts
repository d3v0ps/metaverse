import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class SvgLoader {
  abstract getSvg(url: string): Observable<string>;
}

@Injectable()
export class SvgHttpLoader extends SvgLoader {
  constructor(private http: HttpClient) {
    super();
  }

  getSvg(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}
