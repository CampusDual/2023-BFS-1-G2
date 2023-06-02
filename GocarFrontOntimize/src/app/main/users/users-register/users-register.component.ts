import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { async } from 'rxjs/internal/scheduler/async';


@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.css']
})
export class UsersRegisterComponent implements OnInit {

  protected userService : OntimizeService;

  @ViewChild('form', { static: false }) form: OFormComponent;
  constructor(public injector : Injector, private dialogRef: MatDialogRef<UsersRegisterComponent>, private router:Router, private actRoute: ActivatedRoute,@Inject(AuthService) private authService: AuthService,
  ) {
  
  this.userService = this.injector.get(OntimizeService);
   }

  ngOnInit() {
    this.configureUserService();
  }

  public async send(){
    const password = this.form.formGroup.get('PASSWORD').value;
    const confirmPassword = this.form.formGroup.get('CONFIRM_PASSWORD').value;
    const userName = this.form.formGroup.get('USER_').value;
  
    if (password !== confirmPassword) {
      // No es igual
      console.log('pass no igual');
      alert("Las contraseñas no coinciden");
      
    }else{
      this.form.insert();
      if (userName && userName.length > 0 && password && password.length > 0) {
        const self = this;
        this.authService.login(userName, password)
          .subscribe(() => {
            self.router.navigate(['/main/home']);
          })
      }
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
