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
    e.preventDefault();
    // const newUser = new User;
    // newUser.name = "prueba";
    // newUser.nif = "32684086M";
    console.log("intentamos insertar usuario " + this.newUser);
    this.userService.addUser(this.newUser).subscribe(user => console.log(user));
  }
}
