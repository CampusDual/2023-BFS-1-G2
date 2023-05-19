import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormuserComponent } from './formuser/formuser.component';


@NgModule({
  declarations: [
    AppComponent,
    FormuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
