import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-reservar-hora',
  templateUrl: './modal-reservar-hora.component.html',
  styleUrls: ['./modal-reservar-hora.component.css']
})
export class ModalReservarHoraComponent {

  @Output() mandarFecharModal = new EventEmitter();
  diaReserva: string = ''

  hourdays: Array<string> = [
    '06:00 - 07:00',
    '07:00 - 08:00',
    '08:00 - 09:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
  ]

  constructor(

    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
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
}
