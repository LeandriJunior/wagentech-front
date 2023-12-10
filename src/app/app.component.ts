import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cartech-front';
  whatrote(){
    if (window.location.pathname == '/login'){
      return false;
    }
    else{
      return true
    }
  }
}
