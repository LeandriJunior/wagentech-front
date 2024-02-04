import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { OrdemServicoComponent } from './pages/ordem-servico/ordem-servico.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"login"
  },
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent, canActivate: [AuthGuard]},
  {path:"usuario", component: UsuarioComponent, canActivate: [AuthGuard]},
  {path:"ordem-servico", component: OrdemServicoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
