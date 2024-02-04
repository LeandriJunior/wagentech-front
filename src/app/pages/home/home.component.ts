import { Component, OnInit, TemplateRef } from '@angular/core';
import { HomeService } from 'src/app/shared/service/home.service';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { OrdemServicoService } from 'src/app/shared/service/ordem-servico.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ordemServico: OrdemServico[] = [];
  schema: string = '';
  data: Array<any>;
  closeResult = '';

  constructor(
    private home: HomeService,
    private ordemServicoService: OrdemServicoService,
    private toastr: ToastrService,
    private router:Router
  ) {
    this.ordemServico = ordemServicoService.getOrdemServico();
    this.data = [];
  }

  ngOnInit(): void {
    this.home.get_pagina('home').subscribe(
      response => {
        console.log();
        const dados = JSON.parse(response.dados.config);
        this.data = dados;

        console.log(this.data);
      },
      error => {
        console.error(error);
      }
    );
  }  

  novaOrdem(){
    this.router.navigate(['ordem-servico']);
  }
}
