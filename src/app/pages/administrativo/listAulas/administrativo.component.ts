
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent implements OnInit {

    arrAulas = []

  constructor(
    private router:Router,
    private aulasService:AulasService

  ) { }

  ngOnInit(): void {
    this.getListAulas()
  }



  maisInfo(){
    // this.router.navigate(["/administrativoMaisInfo"])
  }

  criarAula(){
    this.router.navigate(["/administrativoMaisInfo"])
  }

  editarAula(){
    this.router.navigate(["/administrativoMaisEditar"])
  }

  getListAulas(){
    this.aulasService.getAulas().subscribe((map)=>{
        this.arrAulas = map
    })
    console.log("ta rodando", this.arrAulas);
  }





















}
