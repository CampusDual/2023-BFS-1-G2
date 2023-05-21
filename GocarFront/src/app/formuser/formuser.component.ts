import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';


@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormuserComponent implements OnInit {

  newUser: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveNewUser(e: Event){
    console.log("intentamos insertar usuario " + this.newUser);
    this.userService.addUser(this.newUser).subscribe( response =>{
      if(response == -1)  {
        alert('ERROR EN EL REGISTRO')
      } else {
        alert('REGISTRO CON EXITO')
      }
    });
  }
}
