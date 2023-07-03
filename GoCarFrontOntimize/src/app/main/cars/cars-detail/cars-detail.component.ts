import { Component, OnInit, ViewChild} from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import {  OFormComponent } from 'ontimize-web-ngx';
import { OMapComponent } from 'ontimize-web-ngx-map';
import * as L from 'leaflet';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {

  validatorsConfirmPlateArray: ValidatorFn[] = [];

  @ViewChild('oMapMarker', { static: false }) oMapMarker: OMapComponent;
  @ViewChild('form', { static: false }) form: OFormComponent;
  dialogForm : FormGroup;

   constructor( private fb: FormBuilder,) {  

    this.validatorsConfirmPlateArray.push(this.plateFormatValidator);

   }
   public longitude; 
   public latitude;

  ngOnInit() {
    this.dialogForm = this.fb.group({});

  
  }



  plateFormatValidator(control: AbstractControl): ValidationErrors | null {
  
    try {
    
      const platePattern = /^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/i;
        
      return platePattern.test(control.value) ? null : { plateNotFormat: true };
    
    }catch(e){
      }
  }

   //Para servicios mapa
   public onFormDataLoaded(data: any) {
    if (data.LATITUDE) {
      this.latitude = data.LATITUDE;
    }
    if (data.LONGITUDE) {
      this.longitude = data.LONGITUDE;
    }
  }

 public hasGPSPositition() {
    if (this.latitude && this.longitude) {
      return true;
    }
    return false;
  }

 public getPositionGPS() {
    return this.latitude + ',' + this.longitude;
  }


public addDrawEvent(arg) {
  const layer = arg.layer;
  if (layer instanceof L.Marker) {
    const latLng = layer.getLatLng();
    const latitude = latLng.lat;
    const longitude = latLng.lng;
    console.log('New marker placed at:', latitude, longitude);   
    this.form.setFieldValue("longitude", longitude);
    this.form.setFieldValue("latitude", latitude);

  }
}

public moveMapToLocation() {
  const location = this.form.getFieldValue('location');    

  // Nominatim api
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
