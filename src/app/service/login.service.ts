import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Location } from '@angular/common';

@Injectable({

  providedIn: "root"

})

export class LoginService {

  constructor(private httpClient: HttpClient, private location: Location) {
    
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

}
