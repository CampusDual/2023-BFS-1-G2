import { AfterViewInit, Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { OntimizeService } from 'ontimize-web-ngx';
import { OMapComponent } from 'ontimize-web-ngx-map';

@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.css']
})
export class MapHomeComponent implements OnInit, AfterViewInit {

  protected carService: OntimizeService;
  public positionsCars: any[];
  public positionNavigator: string;
  dialogForm : FormGroup;
  isLoading: boolean;

  @ViewChild('oMapMarker', { static: false }) oMap: OMapComponent;

  constructor(public injector: Injector, private dialogRef: MatDialogRef<MapHomeComponent>, private fb: FormBuilder) {
    this.carService = this.injector.get(OntimizeService); 
  this.isLoading = true}

  ngOnInit() {
    this.configureCarService(); 
    this.getData();
    this.getGeolocation();
    this.addMarkerOnMap();
    document.addEventListener('load', 
    function() { 
      alert('hello!');
    }, false);
 }
  

  ngAfterViewInit(){

  
  }

  hazClic(){
    let element = document.getElementById("carMap");
   element.click(); 
  }


  
  public addMarkerOnMap() {
    this.positionsCars.forEach(marker => {
      this.oMap.getMapService().addMarker(marker.car_id, marker.latitude, marker.longitude, null, null, null, null, null);
      console.log(this.positionNavigator)
      if (!this.positionNavigator) {
        this.positionNavigator = "40.419020587254735;-3.7001507068918635";
      }
      this.oMap.setCenter(this.positionNavigator);
    })
  }

  public getGeolocation() {
    navigator.geolocation.getCurrentPosition(position => {
      var latitute = position.coords.latitude;
      var longitude = position.coords.longitude;
      this.positionNavigator = `${latitute};${longitude}`;
      
    })
  }

  public getData() {
    this.carService.query(null, ['car_id', 'longitude', 'latitude'], 'availableCars').subscribe(result => {
      this.positionsCars = result.data.map(item => {
        return {
          car_id: item.car_id,
          longitude: item.longitude,
          latitude: item.latitude
        };
      });
    })
  }

  public configureCarService() {
    const conf = this.carService.getDefaultServiceConfiguration('cars');
    this.carService.configureService(conf);
  }
  
}
