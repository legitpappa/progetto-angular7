import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://translation.googleapis.com/language/translate/v2?key=';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  constructor(private http: HttpClient) {}

  translate(obj: GoogleObj, key: string) {
    return this.http.post(url + key, obj);
  }
  language(obj: GoogleObj, key: string, lan: string) {
    obj.target = lan;
    return this.http.post(url + key, obj);
  }
}

export class GoogleObj {
  q: string;
   readonly source: string = 'it';
   target: string = 'en';
   readonly format: string = 'text';

  constructor() {}
}
