import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastrComponent } from 'src/app/shared/components/toastr/toastr.component';

@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrls: ['./ordem-servico.component.css']
})

export class OrdemServicoComponent implements OnInit {

  constructor( private toastr:ToastrService) { }
  clienteAccordion = true;
  automovelAccordion = false;
  ordemAccordion = false;
  ngOnInit(): void {
  }

  salvarOrdemServico(){
    this.toastr.success('Salvo com sucesso')
  };

}
