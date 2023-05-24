import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //comprobar si esta logueado para diferentes funcionalidaes
  logueado: boolean = localStorage.getItem('logueado')? true : false;
  rutaHome: string = localStorage.getItem('logueado') ? "/home" : "";

  constructor() { }

  ngOnInit() {

  }

}
