import { Component, OnInit,  ViewChild} from '@angular/core';
import {  OFormComponent } from 'ontimize-web-ngx';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';

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
    return (newDate.toLocaleDateString());
  }

  public calculatePrice(){
    let startDate = this.formRent.getFieldValue("rental_start_date");
    let endDate = this.formRent.getFieldValue("rental_end_date");
    let priceDay = this.formCar.getFieldValue("daily_rental_price");
    if(endDate == null){

      this.formRent.setFieldValue("rental_end_date", startDate + 1)
    }
    
    const milisegundos = endDate - startDate;
    const days = milisegundos / (24 * 60 * 60 * 1000);
    const totalPrice = priceDay * days;

    this.formRent.setFieldValue("total_price", totalPrice);
  }

}

