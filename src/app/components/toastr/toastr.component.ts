import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  success(message:string){
    this.toastr.success(message ? message : 'Sucesso!')
  }
}
