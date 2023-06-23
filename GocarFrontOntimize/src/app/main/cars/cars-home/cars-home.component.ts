import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-home',
  templateUrl: './cars-home.component.html',
  styleUrls: ['./cars-home.component.css']
})
export class CarsHomeComponent implements OnInit {

  
  ngOnInit(): void {
    
  }
  constructor(){}
  
  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }
  
}
