
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { OFormComponent, OntimizeService } from 'ontimize-web-ngx';


@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.css']
})
export class UsersRegisterComponent implements OnInit {

  protected userService : OntimizeService;

  @ViewChild('form', { static: false }) form: OFormComponent;
  constructor(public injector : Injector, private dialogRef: MatDialogRef<UsersRegisterComponent>) {
  
  this.userService = this.injector.get(OntimizeService);
   }

  ngOnInit() {
    this.configureUserService();
  }

  public send(){
 console.log(this.form);
    // this.userService.insert()
    //coment
  }

public configureUserService(){
  const conf = this.userService.getDefaultServiceConfiguration('users');
  this.userService.configureService(conf);
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
