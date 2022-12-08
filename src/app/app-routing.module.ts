import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';

import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


const APP_ROUTES : Routes = [
  { path: '', component : HomeComponent},
  { path: 'calendario', component : CalendarioComponent},
  { path: 'calendario/:id', component : CalendarioComponent},
  { path: 'login', component : LoginComponent},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


export const routing: ModuleWithProviders<any>= RouterModule.forRoot(APP_ROUTES);