import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  setSession(token: any): void {
    this.clearSession();
    localStorage.setItem('session', JSON.stringify(token));
  }

  clearSession(): void {
    localStorage.removeItem('session');
  }

  getSession(): any {
    
    return JSON.parse(localStorage.getItem('session')!);
   
  }
}
