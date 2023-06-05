import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';



@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.css']
})
export class UsersRegisterComponent implements OnInit {

  
  // error: boolean;
 
  protected userService : OntimizeService;
  validatorsConfirmPasswordArray: ValidatorFn[] = []; //array para la validación de 2 contraseñas iguales.


  @ViewChild('form', { static: false }) form: OFormComponent;
  
  constructor(public injector : Injector, private dialogRef: MatDialogRef<UsersRegisterComponent>,
     private router:Router, private actRoute: ActivatedRoute,@Inject(AuthService)
     private authService: AuthService) {
      
      
      this.userService = this.injector.get(OntimizeService);
      this.validatorsConfirmPasswordArray.push(this.passwordMatchValidator);
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
      // this.error = false;
      alert("Las contraseñas no coinciden");
     
      
    }else{
      // this.error = true
      this.form.insert();
      //INTENTO DE LOGIN DESPUES DE REGISTRO Y REDIRECCIONAR. FALLABA A LA HORA DEL LOGIN
      // if (userName && userName.length > 0 && password && password.length > 0) {
      //   const self = this;
      //   this.authService.login(userName, password)
      //     .subscribe(() => {
      //       self.router.navigate(['/main/home']);
      //     }, this.handleError)
      // }
    }
    }
  
  public configureUserService(){
    const conf = this.userService.getDefaultServiceConfiguration('users');
    this.userService.configureService(conf);
  }

  handleError(error) {
    switch (error.status) {
      case 401:
        console.error(error);
      case 500:
        console.log(error)
        break;
      default: break;
    }
  }


  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
  
    }
  }

  public closeDialog(event: any) {
    this.dialogRef.close();
  }

  
  passwordMatchValidator(control: any): any {
    const password = control.parent ? control.parent.controls['PASSWORD'].value : null;//El control.parent es necesario sino peta
    const confirmPassword = control.value;
    return password === confirmPassword ? null : { passwordsNotMatched: true };
  }

}
