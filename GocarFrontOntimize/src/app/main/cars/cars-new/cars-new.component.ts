import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { UsersRegisterComponent } from '../../users/users-register/users-register.component';

@Component({
  selector: 'app-cars-new',
  templateUrl: './cars-new.component.html',
  styleUrls: ['./cars-new.component.css']
})
export class CarsNewComponent implements OnInit {

  protected carService : OntimizeService;

  @ViewChild('form', { static: false }) form: OFormComponent;

  user_id : string
  
  constructor(public injector : Injector, private dialogRef: MatDialogRef<CarsNewComponent>,) {  

    this.carService = this.injector.get(OntimizeService);

  }

  ngOnInit() {
    this.user_id = sessionStorage.getItem('user_id');
    console.log(this.user_id);
  }

    public async send(){
      this.form.insert();
    
    }
  
    public configureCarService(){

      const conf = this.carService.getDefaultServiceConfiguration('cars');
      this.carService.configureService(conf);

    }

    public forceInsertMode(event: any) {

      if (event != OFormComponent.Mode().INSERT) {
        this.form.setInsertMode();
      }
      
    }
    
   public closeDialog(event: any) {
     this.dialogRef.close();
  }
  
  

}
