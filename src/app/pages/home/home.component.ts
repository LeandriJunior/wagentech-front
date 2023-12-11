import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  schema: string = '';
  data: Array<any> ;
  constructor(private home:HomeService) {
    this.data = []  
   }

  ngOnInit(): void {
    this.home.get_pagina('home').pipe().subscribe(
      response => {
        console.log()
        var dados =  JSON.parse(response.dados.config)
        this.data = dados

        console.log(this.data)
      },
      error => {
        console.error(error);
      }
    );
      
  }

}
