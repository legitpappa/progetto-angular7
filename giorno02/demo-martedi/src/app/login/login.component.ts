import { Component } from '@angular/core';
import { ICredentials } from '../models/iCredentials';
import { ContextService } from '../services/context.service';
import { IUser } from '../models/iUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  credentials: ICredentials;
  currentUser: IUser;
  passwordError = 'Credenziali sbagliate';
  constructor(private contextService: ContextService) {
    this.credentials = {
      username: '',
      password: ''
    };
   }
   eseguiLogin() {
    this.contextService.login(this.credentials);
    this.contextService.asyncLogin(this.credentials).subscribe(
      (user: IUser) => {
        this.currentUser = user;
      }
    );
    // this.currentUser = this.contextService.getCurrentUser();
   }

}
