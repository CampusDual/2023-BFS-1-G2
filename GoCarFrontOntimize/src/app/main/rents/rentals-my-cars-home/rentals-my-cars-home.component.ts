import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-rentals-my-cars-home',
  templateUrl: './rentals-my-cars-home.component.html',
  styleUrls: ['./rentals-my-cars-home.component.css']
})
export class RentalsMyCarsHomeComponent implements OnInit {
  ngOnInit(): void {

  }

  convertDate(date: Date) {
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }
}
