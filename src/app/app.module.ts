import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalReservarHoraComponent } from './pages/calendario/components/modal-reservar-hora/modal-reservar-hora.component';
import { HeaderComponent } from './pages/calendario/components/header/header.component';
import { AuthService } from './pages/login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrativoComponent } from './pages/administrativo/list/listAulas/administrativo.component';
import { AdministrativoSlotsComponent } from './pages/administrativo/list/listSlots/administrativoSlots.component';
import { AdministrativoEditComponent } from './pages/administrativo/edit/editAulas/administrativoEdit.component';
import { AdministrativoEditSlotsComponent } from './pages/administrativo/edit/editSlot/administrativoEditSlots.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarioComponent,
    HomeComponent,
    ModalReservarHoraComponent,
    HeaderComponent,
    AdministrativoComponent,
    AdministrativoSlotsComponent,
    AdministrativoEditComponent,
    AdministrativoEditSlotsComponent
    
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
    ,ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
