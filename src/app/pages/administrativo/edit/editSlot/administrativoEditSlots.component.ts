
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AulasService } from 'src/app/services/aulas.service';
import { SlotsService } from 'src/app/services/slots.service';

@Component({
  selector: 'app-administrativoEditSlots',
  templateUrl: './administrativoEditSlots.component.html',
  styleUrls: ['./administrativoEditSlots.component.css']
})
export class AdministrativoEditSlotsComponent implements OnInit {

    arrSlots = []

  constructor(
    private router:Router,
    private aulasService:AulasService,
    private slotsService: SlotsService

  ) { }



  form = new FormGroup({
    first:new FormControl(),
  })

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.form.value);
  }

  voltar(){
    this.router.navigate(["/administrativo"])
  }

















}
