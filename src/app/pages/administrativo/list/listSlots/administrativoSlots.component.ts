
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AulasService } from 'src/app/services/aulas.service';
import { SlotsService } from 'src/app/services/slots.service';

@Component({
  selector: 'app-administrativoSlots',
  templateUrl: './administrativoSlots.component.html',
  styleUrls: ['./administrativoSlots.component.css']
})
export class AdministrativoSlotsComponent implements OnInit {

    arrSlots = []

  constructor(
    private router:Router,
    private aulasService:AulasService,
    private slotsService: SlotsService

  ) { }

  ngOnInit(): void {
    this.getListAulas()
  }


  voltar(){
    // this.router.navigate("[/administrativo]")
  }

  onClick(){
    // this.router.navigate("[/administrativoEdit]")

  }

  criarSlots(){
    this.router.navigate(["/administrativoEditSlots"])

  }

  getListAulas(){
    this.slotsService.getSlots().subscribe((map)=>{
      this.arrSlots = map.results
    })

  }




















}
