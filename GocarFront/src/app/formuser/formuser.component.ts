import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { ELOOP } from 'constants';
import { log } from 'console';

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

  async saveNewUser(e: Event){
    console.log("intentamos insertar usuario " + this.newUser);
    let error =  await this.userService.addUser(this.newUser).toPromise();
    console.log(error)

    if(error == -1)  {
      alert('ERROR EN EL REGISTRO')
    } else {
      alert('REGISTRO CON EXITO')
    }
    
  }
}
