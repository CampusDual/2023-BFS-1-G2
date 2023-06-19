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
  }

  public insertRent() {

    
    let getIdCar = this.formCar.getFieldValue("car_id");
          this.formRent.setFieldValue("car_id",getIdCar);
          this.formRent.insert();

  }

  public calculatePrice(){
    let startDate = this.formRent.getFieldValue("rental_start_date");
    let endtDate = this.formRent.getFieldValue("rental_end_date");
    let priceDay = this.formCar.getFieldValue("daily_rental_price");
    
    const milisegundos = endtDate - startDate;
    const days = milisegundos / (24 * 60 * 60 * 1000);
    const totalPrice = priceDay * days;

    this.formRent.setFieldValue("total_price", totalPrice);
  }

}

