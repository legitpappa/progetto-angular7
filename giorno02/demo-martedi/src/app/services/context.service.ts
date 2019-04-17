import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

import { ICredentials } from '../models/iCredentials';
import { IUser } from '../models/iUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private applicationName = 'Demo del mercoledì';
  private currentUser: IUser;
  productListTitle = 'Lista Prodotti';

  constructor(private authentication: AuthenticationService) { }
  login(credentials: ICredentials) {
    this.currentUser = this.authentication.login(credentials);
  }
  asyncLogin(credentials: ICredentials): Observable<IUser> {
   return this.authentication.asyncLogin(credentials);
  }
  logOut() {
    this.authentication.logOut(this.currentUser);
    this.currentUser = null;
  }
  getApplicationName(): string {
    return this.applicationName;
  }
  setApplicationName(applicationName: string) {
    this.applicationName = applicationName;
  }
  getTitleProductsListComponent(): string {
    return this.productListTitle;
  }
  getCurrentUser(): IUser {
    return this.currentUser;
  }

}
