
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Location } from '@angular/common';

@Injectable({

  providedIn: "root"

})

export class HomeService {

  constructor(private httpClient: HttpClient, private location: Location) {
    
  }

  host = window.location.hostname;
  dominio = this.host.split('.')[0];
  private readonly baseURL = "http://"+ this.dominio + '.' + environment["endPoint"]

  get_pagina(pagina:string){
    return this.httpClient.get<any>(`${this.baseURL}/pagina/buscar_pagina?pagina=${pagina}`);
  }

}
