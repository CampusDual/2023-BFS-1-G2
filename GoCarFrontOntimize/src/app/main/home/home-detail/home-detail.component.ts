import { Component, OnInit,  ViewChild} from '@angular/core';
import {  OFormComponent } from 'ontimize-web-ngx';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { CurrentDay } from '../../util/CurrentDay';
import { BBDD } from '../../util/BBDD';
import { MatCalendarCell } from '@angular/material';
import { FilterDate } from '../../util/FilterDate';
import { RentService } from '../../services/rentService.service';
import { Rent } from '../../model/rent';

declare var patatas;
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})

export class HomeDetailComponent implements OnInit {

 @ViewChild('formCar', { static: false }) formCar: OFormComponent;

  @ViewChild('formRent', { static: false }) formRent: OFormComponent;
  dialogForm : FormGroup;
  constructor(private fb: FormBuilder,  private rentService: RentService) { }


  car_id: number
  
  daysNotAvailable: []
  methodBBDD = new BBDD() 
  public arraysCars = []

  // username: string = 'demo'
  //   password: string = 'demouser'
  
  //   auth: string = "Basic " + btoa(`${this.username}:${this.password}`)
  
  //   carsList: Array<Object>
  
  //   protected body = {
  //     filter: {},
  //     columns: ["car_id", "user_rent", "rental_start_date","rental_end_date", "total_price", "rent_id"]}


  async ngOnInit() {
    patatas = 'patatas'
    this.dialogForm = this.fb.group({}); 
    let method = new BBDD()
    this.arraysCars  = await method.getCarRentsById(182)
    // let cadena = `{` + this.arraysCars[0].toString() + `,` + this.arraysCars[1].toString() + `}`
    // localStorage.setItem("infoCars", cadena)
    this.rentService.clearShoppingCart()
    this.rentService.addShoppingItem(this.arraysCars)
    
    

  }

  public insertRent() {
    let getIdCar = this.formCar.getFieldValue("car_id");
    this.formRent.setFieldValue("car_id",getIdCar);
    this.formRent.setFieldValue("rental_start_date", new Date(this.formRent.getFieldValue("rental_start_date")))
    this.formRent.setFieldValue("rental_end_date", new Date(this.formRent.getFieldValue("rental_end_date")))      
    this.formRent.insert();
  }

  convertDate(date: Date){
    const newDate = new Date(date);
    const year = newDate.getFullYear();
        let month: string | number = newDate.getMonth() + 1;
        let day: string | number = newDate.getDate();
    
        // Add a leading zero if the month or day is less than 10
        if (month < 10) {
          month = '0' + month;
        }
        if (day < 10) {
          day = '0' + day;
        }
    
        return `${year}-${month}-${day}`;
   
  }

  public async filter(date: Date) {

    let methodFilters = new FilterDate()
    let method = new BBDD()
    let infoRentCars = this.rentService.getRents().subs
    console.log(methodFilters.filterDate(date, infoRentCars))
    return methodFilters.filterDate(date, infoRentCars)
    
    
  }

  public calculatePrice(){
    
    let priceDay = this.formCar.getFieldValue("daily_rental_price");
    const startDate = new Date(this.formRent.getFieldValue("rental_start_date"));
    const endDate = new Date(this.formRent.getFieldValue("rental_end_date"));
    
    const days = endDate.getDate() - startDate.getDate();
    const totalPrice = priceDay * (days);
    console.log(totalPrice);
    
    this.formRent.setFieldValue("total_price", totalPrice);
    this.calculateMinDate()
  }

  public currentDay(){  
    
    const today = new CurrentDay();
    return today.currentDay();;
    }


  public dateEndAvailable(){
    const endAvailabe = this.formCar.getFieldValue("end_date_available");
    return endAvailabe;
    
  }

  public calculateMinDate() {
    
    if(this.formRent.getFieldValue("rental_start_date")._d === undefined){
    let dateReturn = new Date(this.formRent.getFieldValue("rental_start_date"))
    const year = dateReturn.getFullYear();
    let month = dateReturn.getMonth() + 1;
    let incrementDay = dateReturn.getDate() + 1;

     this.formRent.setFieldValue("rental_end_date", `${year}-${month}-${incrementDay}`)
     
    }else {
     
    return this.currentDay()
    }
  
 
}


}
