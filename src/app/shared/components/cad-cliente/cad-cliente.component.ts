import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent implements OnInit {
  cliente!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cliente = this.formBuilder.group({
        nm_primeiro: '',
        nm_ultimo: '',
        celular:'',
        telefone:'',
        cpf:'',
        rg:'',
        dat_nasc: '',
        imagem: '',
        sexo: '',
        email:'',
        cep: '',
        rua:'',
        numero:'',
        bairro:'',
        cidade:'',
        estado:'',
    });
  }

  onSubmit(){
    console.log('deu boa')
  }
}
