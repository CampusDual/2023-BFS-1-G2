import { Component, OnInit,  ViewChild} from '@angular/core';
import {  OFormComponent } from 'ontimize-web-ngx';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { CurrentDay } from '../../util/CurrentDay';
import { BBDD } from '../../util/BBDD';
import { MatCalendarCell } from '@angular/material';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

 @ViewChild('formCar', { static: false }) formCar: OFormComponent;

  @ViewChild('formRent', { static: false }) formRent: OFormComponent;
  dialogForm : FormGroup;
  constructor(private fb: FormBuilder) { }


  car_id: number
  daysNotAvailable: []
  methodBBDD = new BBDD()

  fechaprueba: string 

  async ngOnInit() {
    this.dialogForm = this.fb.group({}); 
    
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

  public async filter(date: Date){
  
    let methodBBDD = new BBDD()
    let infoRentsCars = await methodBBDD.getCarRentsById(182)
     console.log(date)
    // let mininDate= `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
    // let dateToCompareInString = new Date(date)
    if(infoRentsCars) {
    infoRentsCars.forEach(rent => {
      let dateStartToCheck = new Date(rent.rental_start_date)
      let dateEndToCheck = new Date(rent.rental_end_date)
      let daysNotAvailable = [dateStartToCheck, dateEndToCheck]
      
      // if(date._d >= daysNotAvailable[0] && date._d <= daysNotAvailable[1]) {
      //   let classCalendar = new MatCalendarCell(date)
        

        
      // }
       })
      }
    
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

    console.log(`${year}-${month}-${incrementDay}`)
     this.formRent.setFieldValue("rental_end_date", `${year}-${month}-${incrementDay}`)

     this.fechaprueba =`${year}-${month}-${incrementDay}`
     
    }else {
     
    return this.currentDay()
    }
  
 
}


}
