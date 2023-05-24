import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { User } from "../model/user";


@Injectable({providedIn: 'root'})
export class UserService{

    private urlEndPoint : string = 'http://localhost:30030/users';
    private header = new HttpHeaders({'Content-Typer': 'application/json'});

    constructor(private http: HttpClient, private router: Router){

    }

    //Como al llamar al endPoint devuelve el id del user o -1 si hay errores el observable es tipo Number
    addUser(user: User): Observable<User>{
        return this.http.post(this.urlEndPoint.concat('/add'), user, {headers: this.header})
        .pipe(
            map(response => {
              return response as User
            })
        );
    }

    checkUser(user : User) : Observable <Number>{
        return this.http.post<Number>(this.urlEndPoint.concat('/Conectarse'), user, {headers: this.header})
        .pipe();
    }

}