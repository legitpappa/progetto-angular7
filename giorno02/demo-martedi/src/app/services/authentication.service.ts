import { Injectable } from '@angular/core';
import { IUser, Role } from '../models/iUser';
import { ICredentials } from '../models/iCredentials';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  asyncLogin(credentials: ICredentials): Observable<IUser> {
    if (credentials.username === 'Pippo' &&
        credentials.password === 'password') {
      return of({name: 'Mario', surname: 'Rossi',
      birthDate: new Date('1980-11-23'),
      email: 'example@email.com',
      role: Role.User}).pipe(delay(1000));
    } else {
      return of(null);
    }
  }
  login(credentials: ICredentials): IUser {
    if (credentials.username === 'Pippo' &&
        credentials.password === 'password') {
      return {name: 'Mario', surname: 'Rossi',
      birthDate: new Date('1980-11-23'),
      email: 'example@email.com',
      role: Role.User};
    } else {
      return null;
    }
  }
  logOut(currentUser: IUser) {
    // registrazione nel database del logOut
  }
}
