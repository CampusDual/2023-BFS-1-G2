import { Component, OnInit,  ViewChild} from '@angular/core';
import {  OFormComponent } from 'ontimize-web-ngx';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { CurrentDay } from '../../util/CurrentDay';
import { BBDD } from '../../util/BBDD';
import { RentService } from '../../services/rentService.service';
import { Moment } from 'moment';

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
  intermediateDates = [];
  minDateEnd:string;

  async ngOnInit() {
    
    this.dialogForm = this.fb.group({}); 
   
   
   
  }

  async formInit(){
    this.car_id = this.formCar.getFieldValue("car_id");
    let method = new BBDD();
    this.daysNotAvailable  = await method.getCarRentsById(this.car_id);

    for(let resultBBDD of this.daysNotAvailable){
      let startDate = new Date(resultBBDD.rental_start_date);
      let endDate = new Date(resultBBDD.rental_end_date);
      this.getIntermediateDates(startDate,endDate);
    }
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


  public calculateMinDate() {
    
    if(this.formRent.getFieldValue("rental_start_date")._d === undefined){
      if(this.minDateEnd === undefined){
        let dateReturn = new Date(this.formRent.getFieldValue("rental_start_date"))
        const year = dateReturn.getFullYear();
        let month = dateReturn.getMonth() + 1;
        let incrementDay = dateReturn.getDate() + 1;
  
        this.formRent.setFieldValue("rental_end_date", `${year}-${month}-${incrementDay}`)
  
         this.minDateEnd = `${year}-${month}-${incrementDay}`;

      }
     
    }
  
 
}

filterAvailability(date: Moment):boolean{

  let compDate: Date = date.toDate();
 
  for(let availableDate of this.intermediateDates){
    if(compDate.toDateString() === availableDate.toDateString()){
    return false;
     }
  }
  return true;
}


 getIntermediateDates(startDate, endDate) {
 
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  
  
  let currentDate = startDate;
  while (currentDate <= endDate) {
    this.intermediateDates.push(new Date(currentDate)); 
    currentDate.setDate(currentDate.getDate() + 1);
  }

  
  
}
}
