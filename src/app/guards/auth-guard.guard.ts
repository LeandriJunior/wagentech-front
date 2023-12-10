import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/service/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      // Se o usuário não estiver autenticado, redireciona para a página de login
      this.router.navigate(['/login']);
    }

    return true;
  }
}
