import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ReservasService {
    constructor(){

    }

    reservas = [
        {
            "quadra": "rápida",
            "nome": "Joao Antonio",
            "Dia" : "17/12/2022",
            "Hora":"06:00-7:00",
            "pagamento": "nao concluido",
            "status": "reservado"
        },
        {
            "quadra": "rápida",
            "nome": "Beatriz Oliveira",
            "Dia" : "15/12/2022",
            "Hora":"18:00-19:00",
            "pagamento": "nao concluido",
            "status": "reservado"
        },
        {
            "quadra": "rápida",
            "nome": "Caio de Sousa",
            "Dia" : "22/12/2022",
            "Hora":"19:00-21:00",
            "pagamento": "nao concluido",
            "status": "reservado"
        },
        
        
    ]


    getReservas(){
        return of(this.reservas)
    }
  } 
  