import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {  OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CurrentDay } from '../../util/CurrentDay';

@Component({
  selector: 'app-cars-new',
  templateUrl: './cars-new.component.html',
  styleUrls: ['./cars-new.component.css']
})
export class CarsNewComponent implements OnInit {

  fecha:string;

  validatorsConfirmPlateArray: ValidatorFn[] = [];

   protected carService : OntimizeService;

   idUser: string = sessionStorage.getItem('user_id')

   @ViewChild('form', { static: false }) form: OFormComponent;

   dialogForm : FormGroup;
  
   constructor(public injector : Injector, private dialogRef: MatDialogRef<CarsNewComponent>, private fb: FormBuilder,) {  

    this.carService = this.injector.get(OntimizeService);
    this.validatorsConfirmPlateArray.push(this.plateFormatValidator);

   }

   plateFormatValidator(control: AbstractControl): ValidationErrors | null {
  
    try {
    
      const platePattern = /^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/i;
        
      return platePattern.test(control.value) ? null : { plateNotFormat: true };
    
    }catch(e){
      }
  }
     ngOnInit() {

    
     }
     
     public starEndDate(){
      let startDate = this.form.getFieldValue("start_date_available");
      const fecha = new Date(startDate);
      this.fecha = fecha.toISOString().slice(0, 10).toString();
      this.form.setFieldValue("end_date_available", this.fecha);
      console.log(this.fecha);

     }

     public currentDay(){
      const today = new CurrentDay();
      return today.currentDay();;
      }
  

}
