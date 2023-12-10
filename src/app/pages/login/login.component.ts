import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginService } from 'src/app/shared/service/login.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/shared/service/token.service';
import { SessionService } from 'src/app/shared/service/session.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
    private tokenService:TokenService,
    private sessionService:SessionService
  ) {}
  
  
  logo: string = '';
  background: string = '#ffffff';
  backimage: any = '';
  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.loginService
      .get_login()
      .pipe()
      .subscribe(
        (pagina) => {
          this.logo = pagina.logo;
          this.background = '#' + pagina.background_color;
        },
        (error) => {
          console.error(error);
          // Lógica de tratamento de erro
        }
      );
  }

  submitLogin() {
    var dadosLogin = this.LoginForm.getRawValue() as LoginModel;
    this.loginService
      .login(dadosLogin)
      .pipe()
      .subscribe(
        (response) => {
          console.log(response);
          
          if (response.status) {
            this.tokenService.setToken(response.dados.token)
            this.sessionService.setSession(response.dados.sessao)
            this.router.navigate([response.dados.sessao?.tela_principal ? response.dados.sessao?.tela_principal : 'home']);
          } else {
            this.toastr.error(response.descricao);
          }
        },
        (error) => {
          console.error(error);
          // Lógica de tratamento de erro
        }
      );
  }
}