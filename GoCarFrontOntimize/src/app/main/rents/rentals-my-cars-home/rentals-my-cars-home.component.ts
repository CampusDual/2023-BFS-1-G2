import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rentals-my-cars-home',
  templateUrl: './rentals-my-cars-home.component.html',
  styleUrls: ['./rentals-my-cars-home.component.css']
})
export class RentalsMyCarsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }
}
