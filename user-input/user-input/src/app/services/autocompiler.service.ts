import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { zip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutocompilerService {
  stringList = ['abc', 'abr', 'cane'];
  constructor() {}
  autocompleta(value: string): Observable<string[]> {
    const filtro = this.stringList.filter(x => x.startsWith(value));
    return of(filtro);
  }
}
