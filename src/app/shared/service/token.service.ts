import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  getToken(): any {
    
    return JSON.parse(localStorage.getItem('currentUser')!);
   
  }

  setToken(token: any): void {
    this.clearToken();
    localStorage.setItem('token', JSON.stringify(token));
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  getJwtDecoded(): any {
    try {
      return jwtDecode(this.getToken().token);
    }
    catch (error) {
    }
  }

 

}