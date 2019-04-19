import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICustomer } from '../models/icustomer';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }
  private subject$: Subject<ICustomer>;
  subjectObservable$: Observable<ICustomer>;
  customers = [];

  startStream() {
    this.subject$ = new Subject();
    this.subjectObservable$ = this.subject$.asObservable();
    const intervallo  = setInterval(() => {
      const lunghezza = this.customers.length;
      this.customers.push({
        nome: lunghezza,
        city: 'Rome' + lunghezza
      });
      const clone = JSON.parse(JSON.stringify(this.customers));
      /* const clone2 = JSON.parse(JSON.stringify(this.customers)); */
      this.subject$.next(clone);
    }, 3000);
  }
}
