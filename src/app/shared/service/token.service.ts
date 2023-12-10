import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  getToken(): any {
    
    return JSON.parse(localStorage.getItem('token')!);
   
  }

  setToken(token: any): void {
    this.clearToken();
    localStorage.setItem('token', JSON.stringify(token));
  }

  clearToken(): void {
    localStorage.removeItem('token');
  } 

}