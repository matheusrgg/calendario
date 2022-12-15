import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  horariosReservadoHojeArr: string[] = []
  hourdays: Array<string> = [
    '06:00 - 07:00',
    '07:00 - 08:00',
    '08:00 - 09:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
  ]

  reservas : any[]= []

  constructor(

    private route: ActivatedRoute,
    private reservasService: ReservasService
  ) {
  }

  form = new FormGroup({
    // seisManha: new FormControl({ value: '06:00 - 07:00', disabled: true }, Validators.required),
    // seteManha: new FormControl({ value: '07:00 - 08:00', disabled: false }, Validators.required),
    // oitoManha: new FormControl({ value: '08:00 - 09:00', disabled: false }, Validators.required),
    // seisNoite: new FormControl({ value: '18:00 - 19:00', disabled: true }, Validators.required),
    // seteNoite: new FormControl({ value: '19:00 - 20:00', disabled: false }, Validators.required),

    seisManha: new FormControl( Validators.required),
    seteManha: new FormControl( Validators.required),
    oitoManha: new FormControl( Validators.required),
    seisNoite: new FormControl( Validators.required),
    seteNoite: new FormControl( Validators.required),

    // seisManha: new FormControl({ value: '06:00 - 07:00' , require}, Validators.required),
    // seteManha: new FormControl({ value: '07:00 - 08:00', require}, Validators.required),
    // oitoManha: new FormControl({ value: '08:00 - 09:00', require}, Validators.required),
    // seisNoite: new FormControl({ value: '18:00 - 19:00', require}, Validators.required),
    // seteNoite: new FormControl({ value: '19:00 - 20:00', require}, Validators.required),





  });

  

  ngOnInit(): void {
    this.chamandoServico()
    console.log("array cheia", this.horariosReservadoHojeArr);
    this.checaSeTemOValorIgual("06:00-7:00")
    this.route.url.forEach(element => {
      this.diaReserva = element[1].path
    });


    
    this.reservasService.getReservas().subscribe(data=>{
      this.reservas = data
      console.log(this.reservas);
    })


  }

  reserveHour() {

    console.log("hora reservada", this.diaReserva);
  }

  closeModal() {
    console.log("fecharModals");
    this.mandarFecharModal.emit(false)
  }

  saveTime() {
    console.log("salvar horário", this.form.value);
    alert('success na reserva de horário');
  }

  chamandoServico() {

    this.reservasService.getReservas().subscribe((data: any) => {
      data.map((resposta: any) => {


        // console.log("resposta do servico", resposta.Hora);

        this.horariosReservadoHojeArr.push(resposta.Hora)
        // console.log(this.horariosReservadoHojeArr);


      });


    })
  }

  checaSeTemOValorIgual(input : string) {

    this.horariosReservadoHojeArr.filter(horario => {
      if (horario == input) {
        console.log(true);
        this.form.controls['seisManha'].disable();
      } else {
        console.log(false);

      }

      console.log(horario);
    })

    // group.controls.forEach((data)=>{
    //   console.log(data);
    // })




  }


}
