import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {ApplicationApis} from '@env/environment'
import { Beneficiary } from '../models';
@Injectable({
  providedIn: 'root'
})



export class AuthService {
  

  constructor(private http: HttpClient) { }

  signUp(beneficiary :Beneficiary) : Observable<any>{
    return this.http.post<Beneficiary>(`${ApplicationApis.UserManagement}/Account/sign-up`, beneficiary)
  }

  login(loginDetails :any) : Observable<any>{
    return this.http.post<any>(`${ApplicationApis.UserManagement}/Account/login`, loginDetails)
  }

  verifyAccount(verificationDetails :any) : Observable<any>{
    return this.http.post<any>(`${ApplicationApis.UserManagement}/Account/confirm-account`, verificationDetails)
  }

  verifyResetCode(verificationDetails :any) : Observable<any>{
    return this.http.post<any>(`${ApplicationApis.UserManagement}/Account/reset-password`, verificationDetails)
  }
  resetPassword(email:string) : Observable<any>{
    return this.http.get<any>(`${ApplicationApis.UserManagement}/Account/reset-password/verification-code/${email}`)
  }

}


