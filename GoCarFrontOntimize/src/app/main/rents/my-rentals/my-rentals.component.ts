import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { OButtonComponent, OSliderComponent, OntimizeService } from 'ontimize-web-ngx';


@Component({
  selector: 'app-my-rentals',
  templateUrl: './my-rentals.component.html',
  styleUrls: ['./my-rentals.component.css']
})
export class MyRentalsComponent implements OnInit {


  @ViewChild('button', { static: false }) buttonShowOldRents: OButtonComponent;

  tableData: any[];

  showOldRentals: boolean;
  filteredData: any[];

  protected rentService: OntimizeService;

  constructor(protected injector: Injector) {
  this.rentService = this.injector.get(OntimizeService);
  }

ngOnInit() {
  this.configureService();
  this.createTableData();
}

showHideOldRentals() {
  this.showOldRentals = !this.showOldRentals;
  this.filterData();
}

filterData() {
  if (this.showOldRentals) {
    this.filteredData = this.tableData;
  } else {
    const currentDate = new Date().getTime();
    this.filteredData = this.tableData.filter(item => item.rental_end_date >= currentDate);
  }
}




protected configureService() {
  
  const conf = this.rentService.getDefaultServiceConfiguration('rents');
  this.rentService.configureService(conf);
}

  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }
  isEndDateValid(endDate: string): boolean {
    const today = new Date();
    const rentalEndDate = new Date(endDate);
    return rentalEndDate > today;
  }
  
  getTableData(){
    this.createTableData();
    return this.tableData;
  }
  createTableData() {
    const columns = ["rent_id", "car_id", "brand", "model", "car_photo", "user_rent", "rental_start_date", "rental_end_date", "total_price", "observations"];
    const entity = "myRents";
  
    this.rentService.query(null, columns, entity).subscribe(
      response => {
        this.tableData = response.data;
        this.filterData();
        console.log(this.filteredData);
      },
      error => {
        console.error(error);
      }
    );
  }

}
