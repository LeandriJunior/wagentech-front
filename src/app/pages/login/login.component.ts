import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginService } from 'src/app/service/login.service';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr:ToastrService ) { }
  logo: string = ''
  background:string = '#ffffff'

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });

    this.loginService.get_login().pipe().subscribe(
      pagina => {
        console.log(pagina.background_color)
        this.logo = pagina.logo
        this.background = pagina.background_color
      },
      error => {
        console.error(error);
        // Lógica de tratamento de erro
      }
    );
  }
 
  submitLogin(){
    var dadosLogin = this.LoginForm.getRawValue() as LoginModel;
    this.loginService.login(dadosLogin).pipe().subscribe(
      response => {
        console.log(response)
        // Aqui você lida com o novo valor emitido pelo switchMap
        if (response.status){
            this.toastr.success(response.descricao);
        }else{
           this.toastr.error(response.descricao);
        }
      },
      error => {
        console.error(error);
        // Lógica de tratamento de erro
      }
    );
      
  }

}