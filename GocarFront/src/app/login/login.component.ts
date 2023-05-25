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
        alert('Credenciales Incorrectas')
        e.preventDefault();
      } else {
        localStorage.setItem('logueado', 'true');
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      }
    });
  }
  }
 // this.router.navigate(['items'], { relativeTo: this.route });

