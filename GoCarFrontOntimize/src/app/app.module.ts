import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { APP_CONFIG, ONTIMIZE_MODULES, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { CustomMessageService, CustomMessageServiceUser } from './main/util/CustomMessageUser';
import { CustomMessageServiceCar } from './main/util/CustomMessageCars';


// Standard providers...
// Defining custom providers (if needed)...
export const customProviders: any = [
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', 
  
    { enabled: environment.production,
   
    
   })
  
  ],
  declarations: [
    AppComponent,

  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    { provide: 'customMessageServiceTypeUser', useValue: CustomMessageServiceUser },
    { provide: 'customMessageServiceTypeCar', useValue: CustomMessageServiceCar },
    ONTIMIZE_PROVIDERS,
    ...customProviders
  ]
})
export class AppModule { }
