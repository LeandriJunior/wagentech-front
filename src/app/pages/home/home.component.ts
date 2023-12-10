import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  schema: string = ''
  constructor(private home:HomeService) { }

  ngOnInit(): void {
    this.home.get_home().pipe().subscribe(
      response => {
        this.schema = response.mensagem
      },
      error => {
        console.error(error);
      }
    );
      
  }

}
