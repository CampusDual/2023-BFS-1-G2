import { Injectable } from "@angular/core";
import { OTranslateService } from "ontimize-web-ngx";

@Injectable({
  providedIn: 'root'
})

export class Combo {

  constructor(
    private translateService: OTranslateService
  ) { }

  
  public fuelsArray = [{
    fuelCode: 1,
    fuelText:'Gasoline'
  }, {
    fuelCode: 2,
    fuelText: 'Diesel oil'
  },{
    fuelCode: 3,
    fuelText: 'Electric'
  }, {
    fuelCode: 4,
    fuelText: 'Hybrid'

  }];

  public selectedFuelCode = 2;

}