import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beneficiary } from '@crowdfunding/core';
import { Observable } from 'rxjs';

@Injectable()



export class AuthService {
  baseUrl = `https://cf-usermanagement-api.herokuapp.com/api/v1`

  constructor(private http: HttpClient) { }

  signUp(beneficiary :Beneficiary) : Observable<any>{
    return this.http.post<Beneficiary>(`${this.baseUrl}/Account/sign-up`, beneficiary)
  }

  login(loginDetails :any) : Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/Account/login`, loginDetails)
  }

}


