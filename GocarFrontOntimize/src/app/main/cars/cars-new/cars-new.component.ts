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

  username: string = 'demo'
  password: string = 'demouser'

  auth: string = "Basic " + btoa(`${this.username}:${this.password}`)

  protected body = {
    filter: {},
    columns: ["brand","model","status","il","password"]}
  
  @ViewChild('form', { static: false }) form: OFormComponent;
  
  constructor(public injector : Injector, private dialogRef: MatDialogRef<CarsNewComponent>,) {  
      
      this.carService = this.injector.get(OntimizeService);
       }

  ngOnInit() {}

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
  
  public async getAllCars(body: Object, auth: string) {

    try{

      const data = await fetch('http://localhost:33333/cars/car/search', {
        method: 'POST', 
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": auth
      }
      }).then(res => res.json())

      return data

    }catch(e){

      console.log(e.message)
    } 
  }
  

}
