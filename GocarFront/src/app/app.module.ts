import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormuserComponent } from './formuser/formuser.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormuserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
