import { Component, OnInit, ViewChild} from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import {  OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {

  validatorsConfirmPlateArray: ValidatorFn[] = [];

  @ViewChild('form', { static: false }) form: OFormComponent;
  dialogForm : FormGroup;

   constructor( private fb: FormBuilder,) {  

    this.validatorsConfirmPlateArray.push(this.plateFormatValidator);

   }
 

  ngOnInit() {
    this.dialogForm = this.fb.group({});

  
  }



  plateFormatValidator(control: AbstractControl): ValidationErrors | null {
  
    try {
    
      const platePattern = /^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/i;
        
      return platePattern.test(control.value) ? null : { plateNotFormat: true };
    
    }catch(e){
      }
  }

}


