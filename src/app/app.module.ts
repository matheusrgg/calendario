import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarioComponent,
 
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
