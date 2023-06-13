import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {

  validatorsConfirmPlateArray: ValidatorFn[] = [];

   
   constructor() {  

    this.validatorsConfirmPlateArray.push(this.plateFormatValidator);

   }
 

  ngOnInit() {
  }

  plateFormatValidator(control: AbstractControl): ValidationErrors | null {
  
    try {
    
      const platePattern = /^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/i;
        
      return platePattern.test(control.value) ? null : { plateNotFormat: true };
    
    }catch(e){
      }
  }

}
