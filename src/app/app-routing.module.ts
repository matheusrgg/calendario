import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';

import { ModuleWithProviders } from "@angular/core";


const APP_ROUTES : Routes = [
  { path: 'salas-disponiveis', component : CalendarioComponent},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


export const routing: ModuleWithProviders<any>= RouterModule.forRoot(APP_ROUTES);