import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormuserComponent } from './formuser/formuser.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


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
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
