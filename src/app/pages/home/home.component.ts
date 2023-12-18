import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/service/home.service';
import { OrdemServico } from 'src/app/models/OrdemServico'
import { OrdemServicoService } from 'src/app/shared/service/ordem-servico.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ordemServico: OrdemServico[] = [];
  schema: string = '';
  data: Array<any> ;
  constructor(private home:HomeService, ordemServicoService: OrdemServicoService) {
    this.ordemServico = ordemServicoService.getOrdemServico();
    this.data = []  
   }

  ngOnInit(): void {
    this.home.get_pagina('home').pipe().subscribe(
      response => {
        console.log()
        var dados =  JSON.parse(response.dados.config)
        this.data = dados

        console.log(this.data)
      },
      error => {
        console.error(error);
      }
    );
 
  }
}
