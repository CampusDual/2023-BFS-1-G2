import { Component, Injector, OnInit, ViewChild, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatLocation } from '../util/FormatLocation';
import { OntimizeService } from 'ontimize-web-ngx';
import { OMapComponent } from 'ontimize-web-ngx-map';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: string;
  protected carService: OntimizeService;
  public positionsCars: any[];
  formatMethod = new FormatLocation();

  @ViewChild('oMapMarker', { static: false }) oMap: OMapComponent;
  reloadMapFlag: boolean = false;

  constructor(
    public injector: Injector,
    private router: Router,
    private actRoute: ActivatedRoute) {
    this.carService = this.injector.get(OntimizeService);
  }


  ngOnInit() {
    this.configureCarService();

    const localStorageData = JSON.parse(localStorage.getItem('com.ontimize.web.ngx.jee.seed'));
    this.user = localStorageData.session.user;

    if (localStorageData && localStorageData.session && localStorageData.session.user) {
      this.user = localStorageData.session.user;
    }

    this.getData();
    console.log(this.positionsCars);
  }

  gridInit() {
    this.addMarkerOnMap();
  }


  public addMarkerOnMap() {
    this.positionsCars.forEach(marker => {
      this.oMap.addMarker(marker.car_id, marker.latitude, marker.longitude, null, null, null, null, null);
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
      console.log(this.positionsCars);
    })
  }

  public configureCarService() {
    const conf = this.carService.getDefaultServiceConfiguration('cars');
    this.carService.configureService(conf);
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }
  convertDate(date: Date) {
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }

  public proba(location: string) {
    let resultt = this.formatMethod.format(location);
    return resultt
  }
}
