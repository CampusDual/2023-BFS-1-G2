import { Component, OnInit,  ViewChild} from '@angular/core';
import {  OFormComponent } from 'ontimize-web-ngx';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { CurrentDay } from '../../util/CurrentDay';

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

  ngOnInit() {
    this.dialogForm = this.fb.group({}); 

    if(this.dialogForm.enabled) {
      // document.querySelector('.o-grid-toolbar').setAttribute('style', "opacity: 0.1")
      document.querySelectorAll('.grid-item').forEach( element => {
        element.setAttribute('style', "opacity: 0.1")
      })
    }

  }

  public insertRent() {
    let getIdCar = this.formCar.getFieldValue("car_id");
          this.formRent.setFieldValue("car_id",getIdCar);
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
    let dates = this.formRent.getFieldValue("daterange");
    console.log(dates);
   
    let priceDay = this.formCar.getFieldValue("daily_rental_price");
    console.log(priceDay);
    const startDate = dates.startDate;
    const endDate = dates.endDate;
    
    const milisegundos = endDate - startDate;
    const days = Math.ceil(milisegundos / (24 * 60 * 60 * 1000));
    const totalPrice = priceDay * (days);

    this.formRent.setFieldValue("total_price", totalPrice);
  }

  public currentDay(){
    const today = new CurrentDay();
    return today.currentDay();;
    }


  public dateEndAvailable(){
    const endAvailabe = this.formCar.getFieldValue("end_date_available");
    return "2023-06-30";
    
  }

}

