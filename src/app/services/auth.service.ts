import { Injectable } from '@angular/core';
import { AuthObjprops, AuthObj } from '../models/auth.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dataObj = new BehaviorSubject<AuthObj>({name: "", email: "", message: ""} );
  constructor() { }

  processAuth(userInfo: AuthObj): AuthObj {
    this.dataObj.next(userInfo);
    return userInfo;
  }
}
