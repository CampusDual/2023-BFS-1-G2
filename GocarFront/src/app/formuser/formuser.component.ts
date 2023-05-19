import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormuserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveNewUser(){
    const newUser = new User;
    newUser.name = "prueba";
    console.log("intentamos insertar usuario" + newUser.name);
    this.userService.addUser(newUser).subscribe(user => console.log(user));
  }
}
