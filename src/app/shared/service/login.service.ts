import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Injectable({

  providedIn: "root"

})

export class LoginService {
  router: Router;
  constructor(private httpClient: HttpClient, private location: Location, router:Router ) {
    this.router = router;
  }

  host = window.location.hostname;
  dominio = this.host.split('.')[0];
  private readonly baseURL = "http://"+ this.dominio + '.' +environment["endPoint"]

  login(dados: any) {
    return this.httpClient.post<any>(`${this.baseURL}/login`, dados);
  }
  get_login(){
    return this.httpClient.get<any>(`${this.baseURL}/login`);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login'])
  }


  isLoggedIn(): boolean {
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser && currentUser.token;
  }
}
