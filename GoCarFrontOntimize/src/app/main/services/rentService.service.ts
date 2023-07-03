import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, observable, throwError } from "rxjs";
import { Rent } from "../model/rent";
import { BBDD } from "../util/BBDD";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  catchError, map, tap } from 'rxjs/operators' 
import { Router } from "@angular/router";



@Injectable({
    providedIn: 'root',
 })
export class RentService {
  [x: string]: any;
  username: string = 'demo'
  password: string = 'demouser'

  auth: string = "Basic " + btoa(`${this.username}:${this.password}`)

  protected body = {
    filter: {},
    columns: ["car_id", "user_rent", "rental_start_date","rental_end_date", "total_price", "rent_id"]}


  private urlendPoint: string = 'http://localhost:33333/rents';
  private header = new HttpHeaders ({
    'Content-Type': 'application/json',
    "Authorization": this.auth
  })
  
  private shoppingCart: BehaviorSubject<Rent[]> = new BehaviorSubject<Rent[]>([]);

    constructor(private http: HttpClient, private router: Router) { }

    getRents(): Observable<Rent>[] {
      return this.http.put(this.urlendPoint.concat('/allRents/search'), {headers: this.header}).pipe(tap(
        response => {
            // Almacenamos los productos, recogemos de las respuesta y casteamos a products[]
            let products = response as Rent[]  
            return products
        }
    ))
    }

    getShoppingItems():Observable<Rent[]>{
      return this.shoppingCart.asObservable();
    }

    addShoppingItem(items:any[]) {
      // let items = this.shoppingCart.getValue()
      // let stored = items[item.rent_id];
      // if(!stored){
      //   items[item.rent_id]=item;
      // }else{
      //   // item.number=item.number+stored.number;
      //   items[item.id]=item;
      // }
      this.shoppingCart.next(items);
    }

    clearShoppingCart(){
      this.shoppingCart.next([]);
    }
}

function tap(arg0: (response: any) => void): any {
  throw new Error("Function not implemented.");
}
