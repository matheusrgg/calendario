import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ReservasService } from 'src/app/services/reservas.service';
@Component({
  selector: 'app-modal-reservar-hora',
  templateUrl: './modal-reservar-hora.component.html',
  styleUrls: ['./modal-reservar-hora.component.css']
})
export class ModalReservarHoraComponent {

  @Output() mandarFecharModal = new EventEmitter();
  diaReserva: string = ''
  horarioReservado = true

  // form = FormGroup();

  horariosReservadoHojeArr : string[] = []
  hourdays: Array<string> = [
    '06:00 - 07:00',
    '07:00 - 08:00',
    '08:00 - 09:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
  ]
  constructor(

    private route: ActivatedRoute,
    private reservasService : ReservasService
  ) {
  }

  form = new FormGroup({
    horario: new FormControl({
      // value: '06:00 - 07:00', 
      // disabled: true
    }, 
      Validators.required),
    // food: new FormControl("", {
    //   validators: [Validators.required],
    // }),
  });

  ngOnInit(): void {
    this.chamandoServico()
    this.route.url.forEach(element => {
      this.diaReserva = element[1].path
    });
  }

  reserveHour() {

    console.log("hora reservada", this.diaReserva);
  }
  
  closeModal() {
    console.log("fecharModals");
    this.mandarFecharModal.emit(false)
  }
  
  saveTime(){
    console.log("salvar horário", this.form.value);
    alert('success na reserva de horário');
  }

  chamandoServico(){
    
    // interface Reserva{
    //   quadra: string,
    //   nome:string,
    //   Dia:string,
    //   Hora:string,
    //   pagamento:string,
    //   status:string,

    // }

     this.reservasService.getReservas().subscribe((data:any)=>{
      data.map((resposta:any)=>{
        //mó erro chato aqui falando que resposta.Hora nao é do type string
        //
        //this.horariosReservadoHojeArr.push(JSON.stringify(resposta.Hora))
       
        console.log("resposta do servico", resposta.Hora);

        this.horariosReservadoHojeArr.push(resposta.Hora)
        console.log(this.horariosReservadoHojeArr);

      
    });

    //aqui eu puxo todas as reservas neh
    // o certo seria só trazer só reservas desse dia;
    //más enfim
    //ai eu comparo a array dos horarios disponiveis com a array dos horarios que foram reservados e beleza!!
    
  })

}
}
