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

  public send() {
    const password = this.form.formGroup.get('PASSWORD').value;
    const confirmPassword = this.form.formGroup.get('CONFIRM_PASSWORD').value;
  
    if (password !== confirmPassword) {
      // No es igual
      console.log('pass no igual');
      alert("Las contraseñas no coinciden");
      
    }else{
      this.form.insert();
    }
    
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
