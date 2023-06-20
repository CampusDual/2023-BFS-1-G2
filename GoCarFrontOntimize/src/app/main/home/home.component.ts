import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user:string;
  
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    const localStorageData = JSON.parse(localStorage.getItem('com.ontimize.web.ngx.jee.seed'));
    this.user = localStorageData.session.user;

    
  }


  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }
  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }

}
