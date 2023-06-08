import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
  }

  username: string = 'demo'
  password: string = 'demouser'

  auth: string = "Basic " + btoa(`${this.username}:${this.password}`)

  carsList: Array<Object>

  protected body = {
    filter: {},
    columns: ["brand","model","status","il","password"]}

  async ngOnInit() {

    try{

      const { data } = await fetch('http://localhost:33333/cars/car/search', {
        method: 'POST', 
        body: JSON.stringify(this.body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": this.auth
      }
      }).then(res => res.json())

      this.carsList = data
      console.log(this.carsList)

    }catch(e){

      console.log(e.message)
    } 
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

}
