import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormuserComponent implements OnInit {

  newUser: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  saveNewUser(e: Event){
    console.log("intentamos insertar usuario " + this.newUser);
    this.userService.addUser(this.newUser).subscribe( response =>{
      if(response == -1)  {
        alert('ERROR EN EL REGISTRO')
        // Cuando salte el error los campos se van a limpiar (same a como tenemos en el inicio components)
        this.newUser.nif = "";
        this.newUser.name = "";
        this.newUser.password = "";
        this.newUser.email = "";
      } else {
        alert('REGISTRO CON EXITO')
        this.router.navigate(['/loguearme/home']);
      }
    });
  }
}

