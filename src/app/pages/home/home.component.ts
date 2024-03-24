import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/service/home.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  schema: string = '';
  data: Array<any>;
  closeResult = '';

  constructor(
    private home: HomeService,
    private toastr: ToastrService,
    private router:Router
  ) {
    this.data = [];
  }

  ngOnInit(): void {
    
  }  

 
}
