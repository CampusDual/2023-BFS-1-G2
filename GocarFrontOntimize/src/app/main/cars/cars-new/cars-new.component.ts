import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { UsersRegisterComponent } from '../../users/users-register/users-register.component';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-cars-new',
  templateUrl: './cars-new.component.html',
  styleUrls: ['./cars-new.component.css']
})
export class CarsNewComponent implements OnInit {

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
     

  //   public async send(){

  //     this.form.insert();
    
  //   }

  
  //   public configureCarService(){

  //     const conf = this.carService.getDefaultServiceConfiguration('cars');
  //     this.carService.configureService(conf);

  //   }

  //   public forceInsertMode(event: any) {

  //     if (event != OFormComponent.Mode().INSERT) {
  //       this.form.setInsertMode();
  //     }
      
  //   }
    
  //  public closeDialog(event: any) {
  //    this.dialogRef.close();
  // }
  // test 2
  
  

}
