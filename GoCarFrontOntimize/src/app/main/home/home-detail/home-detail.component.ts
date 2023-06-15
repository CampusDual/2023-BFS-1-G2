import { Component, OnInit,  ViewChild} from '@angular/core';
import {  OFormComponent } from 'ontimize-web-ngx';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  username: string = 'demo'
  password: string = 'demouser'

  auth: string = "Basic " + btoa(`${this.username}:${this.password}`)


  
  @ViewChild('form', { static: false }) form: OFormComponent;
  dialogForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dialogForm = this.fb.group({}); 
  }

  public insertRent() {

    
    const car_id = this.form.formGroup.get('car_id').value;
    const brand = this.form.formGroup.get('brand').value;
    const model = this.form.formGroup.get('model').value;
    const daily_rental_price= this.form.formGroup.get('daily_rental_price').value;
    const rental_start_date= this.form.formGroup.get('rental_start_date').value;
    const rental_end_date= this.form.formGroup.get('rental_end_date').value;
    console.log(typeof car_id)

    const dataFormArray = [daily_rental_price, rental_end_date, rental_start_date]
    
    if(dataFormArray.some( item => item === undefined)) 
      alert('Algun campo esta vacio')
    
    else {
      
      let dataForm = {
       car_id, daily_rental_price, rental_end_date, rental_start_date}
        
      fetch('http://localhost:33333/rents/rent', {
        method:  'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": this.auth
      },body: JSON.stringify(dataForm)
      })
    }
   
  }

}

