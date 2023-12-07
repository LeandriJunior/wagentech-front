import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginService } from 'src/app/service/login.service';

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
    private loginService: LoginService ) { }
  logo: string = ''
  background = ''

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });

    this.loginService.get_login().pipe().subscribe(
      pagina => {
        this.logo = pagina.logo
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
      novoValor => {
        // Aqui você lida com o novo valor emitido pelo switchMap
        console.log(novoValor);
      },
      error => {
        console.error(error);
        // Lógica de tratamento de erro
      }
    );
      
  }

}