import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { OMapComponent } from 'ontimize-web-ngx-map';
import * as L from 'leaflet';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {

  protected carService : OntimizeService;
  validatorsConfirmPlateArray: ValidatorFn[] = [];
  @ViewChild('oMapMarker', { static: false }) oMapMarker: OMapComponent;
  @ViewChild('form', { static: false }) form: OFormComponent;
  dialogForm: FormGroup;

  constructor(public injector : Injector,
     private fb: FormBuilder) {
    this.validatorsConfirmPlateArray.push(this.plateFormatValidator);
    this.carService = this.injector.get(OntimizeService);
  }

  public longitude;
  public latitude;

  async formInit(){
 
  }

  ngOnInit() {
    this.configureCarService();
    this.getLongLat();
    this.dialogForm = this.fb.group({});
  }

  plateFormatValidator(control: AbstractControl): ValidationErrors | null {
    try {
      const platePattern = /^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/i;
      return platePattern.test(control.value) ? null : { plateNotFormat: true };
    } catch (e) {
      // Handle the error if necessary
    }
  }

  // Para servicios mapa
  public onFormDataLoaded(data: any) {
    if (data.LATITUDE) {
      this.latitude = data.LATITUDE;
    }
    if (data.LONGITUDE) {
      this.longitude = data.LONGITUDE;
    }
  }

  public configureCarService(){
    const conf = this.carService.getDefaultServiceConfiguration('cars');
    this.carService.configureService(conf);
  }


public async  getLongLat(){
 let result= this.carService.query({'car_id':223},['longitude','latitude'], 'myCar').subscribe(data => {console.log(data)});

//  let username = 'samu'
//   let  password = '12345'
//      let auth = "Basic " + btoa(`${username}:${password}`)
//      let  body = {
//       filter: {"car_id" : 223},
//       columns: ["car_id", "longitude", "latitude"]}
//       const { data } = await fetch('http://localhost:33333/cars/myCar/search', {
//         method: 'POST', 
//         body: JSON.stringify(body),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//           "Authorization": auth
//       }
//       }).then(res => res.json())
//       this.latitude=data[0].latitude;
//       this.longitude=data[0].longitude;
//       console.log(data);
}

  public hasGPSPositition() {
    // this.getLongLat();
    return this.latitude && this.longitude;
    
  }

  public getPositionGPS() {
    // this.getLongLat();
    return this.latitude + ',' + this.longitude;
  }
  

  public addDrawEvent(arg) {
    const layer = arg.layer;
    if (layer instanceof L.Marker) {
      const latLng = layer.getLatLng();
      const latitude = latLng.lat;
      const longitude = latLng.lng;
      console.log('New marker placed at:', latitude, longitude);
      this.form.setFieldValue('longitude', longitude);
      this.form.setFieldValue('latitude', latitude);
    }
  }

  public moveMapToLocation() {
    const location = this.form.getFieldValue('location');
    // Nominatim API
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
      
        if (data && data.length > 0) {
          const latitude = parseFloat(data[0].lat);
          const longitude = parseFloat(data[0].lon);
          const zoom = 12; // Nivel de zoom que queremos

          // Mueve el mapa a la localizacion deseada y pone el zoom declarado arriba
          const mapInstance = this.oMapMarker.getLMap();
          mapInstance.setView([latitude, longitude], zoom);
        }
      })
      .catch((error) => {
        console.error('Error geocoding location:', error);
        // Maneja el error
      });
  }
}