import { Component,Injector,OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user:string;
  protected carService: OntimizeService;
  
  constructor(
    public injector: Injector,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.carService = this.injector.get(OntimizeService);
  }
 
public positionsCars: any[];

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

 public hasArray(){
  if(this.positionsCars.length == 0){
    return false
  }else{
    return true
  }
 }

  public getData() {

    this.carService.query(null, ['car_id','longitude','latitude'], 'availableCars').subscribe(result => {
      this.positionsCars = result.data.map(item => {
        return {
          car_id: item.car_id,
          positionGPS: `${item.longitude};${item.latitude}`
        };
      });
      // console.log(this.array);
  })
  
}
  
  public configureCarService() {
    const conf = this.carService.getDefaultServiceConfiguration('cars');
    this.carService.configureService(conf);
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }
  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }

}
