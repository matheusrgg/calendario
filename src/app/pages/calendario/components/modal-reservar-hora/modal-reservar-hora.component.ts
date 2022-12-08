import { Component, EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-modal-reservar-hora',
  templateUrl: './modal-reservar-hora.component.html',
  styleUrls: ['./modal-reservar-hora.component.css']
})
export class ModalReservarHoraComponent {


  @Output() mandarFecharModal = new EventEmitter();

  hourdays: Array<string> = [
    '06:00 - 07:00', 
    '07:00 - 08:00',
    '08:00 - 09:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
  ]

  reserveHour(){
    console.log("hora reservada");
  }

  closeModal(){
    console.log("fecharModals");

    this.mandarFecharModal.emit(false)
  }
}
