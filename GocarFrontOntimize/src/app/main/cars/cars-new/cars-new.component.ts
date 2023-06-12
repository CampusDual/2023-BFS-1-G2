import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { UsersRegisterComponent } from '../../users/users-register/users-register.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cars-new',
  templateUrl: './cars-new.component.html',
  styleUrls: ['./cars-new.component.css']
})
export class CarsNewComponent implements OnInit {

   protected carService : OntimizeService;

   idUser: string = sessionStorage.getItem('user_id')

   @ViewChild('form', { static: false }) form: OFormComponent;

   dialogForm : FormGroup;
  
   constructor(public injector : Injector, private dialogRef: MatDialogRef<CarsNewComponent>, private fb: FormBuilder,) {  

    this.carService = this.injector.get(OntimizeService);

   }

   public getId():string {

    return sessionStorage.getItem('user_id')

   }

   public getValue() {
    return 'paco'
   }

     ngOnInit() {

      this.dialogForm = this.fb.group({}); 
  
     }
     public performAction() {
      console.log('insertado')

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
  
  

}
