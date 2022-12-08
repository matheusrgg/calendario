import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalReservarHoraComponent } from './pages/calendario/components/modal-reservar-hora/modal-reservar-hora.component';
import { HeaderComponent } from './pages/calendario/components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarioComponent,
    HomeComponent,
    ModalReservarHoraComponent,
    HeaderComponent,
 
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
