import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  newUser: User = new User();

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
  }
  
  checkNewUser(e: Event){
    console.log ("intentamos loguear");
    this.userService.checkUser(this.newUser).subscribe( response =>{
      if(response == -1)  {
        alert('ERROR EN LA CONEXION')
        // En caso de que de un error los campos se van a vaciar
        this.newUser.email = "";
        this.newUser.password="";
        e.preventDefault();
      } else {
        alert('CONECTADO CON EXITO')
        this.router.navigate(['/home']);
      }
    });
  }
  }
 // this.router.navigate(['items'], { relativeTo: this.route });

