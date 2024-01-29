import { Component, OnInit, TemplateRef } from '@angular/core';
import { HomeService } from 'src/app/shared/service/home.service';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { OrdemServicoService } from 'src/app/shared/service/ordem-servico.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

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
    private modalService: NgbModal,
    private toastr: ToastrService
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

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'xl' }).result.then(
      (result) => {
        this.closeResult = `Fechado com: ${result}`;
      },
      (reason) => {
        this.closeResult = `Descartado ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'pressionando ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'clicando no fundo';
      default:
        return `com: ${reason}`;
    }
  }

  salvarOrdemServico(){
    this.toastr.success('Salvo com sucesso')
    this.modalService.dismissAll()
  }
}
