import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem('cf_token', token);
  }

  public getToken(): any {
    return localStorage.getItem('cf_token');
  }

  public clearToken() {
    localStorage.clear();
  }
}
