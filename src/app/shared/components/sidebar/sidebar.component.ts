import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/service/login.service';
import { SessionService } from '../../service/session.service';
import { getHoraAtual, getTurnoString } from 'src/utils/util';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  nm_usuario:string = ''
  logo:string = ''
  session:any

  data: Array<any> ;
  horaAtual: any = getHoraAtual();
  turnoAtual: string = getTurnoString(this.horaAtual);
  constructor(private router: Router, 
              private authService:LoginService,
              private sessionService:SessionService){  
    this.data = [
          {
            id:1,
            show:true,
            rota: '/home',
            nome: 'Inicio',
            imagem: 'assets/img/icons/inicio.png',
            filhos:[]
          },
      
      ]  
  }
  ngOnInit(): void {
      this.session = this.sessionService.getSession()
      console.log(this.session)
      this.logo = this.session.logo_empresa
      this.nm_usuario = this.session.nm_primeiro
  };
  tirarShow(data: any): void {
    for (const dado of data) {
      if (dado.show) {
        dado.show = false;
      }
      if (dado.filhos.length > 0) {
        this.tirarShow(dado.filhos);
      }
    }
  }
  openModal( show:any, event:any):void{
    const isShow = show;

    event.stopPropagation();
    this.tirarShow(show);

    show = !isShow;
   
  }
  linkbutton(rota:any, show:any, event:any){
      if (rota){
        return this.router.navigate([rota]);
      }else{
       
        this.openModal(show, event)
        return true
      }
  }
  navigateRoute(rota:string){
    this.router.navigate([rota]);
  }

  logout(){
    this.authService.logout();
  }

}
          