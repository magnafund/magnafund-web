import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem('cf_token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('cf_token');
  }

  public clearToken() {
    localStorage.clear();
  }
}
