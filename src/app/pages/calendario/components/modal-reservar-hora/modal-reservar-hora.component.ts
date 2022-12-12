import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-modal-reservar-hora',
  templateUrl: './modal-reservar-hora.component.html',
  styleUrls: ['./modal-reservar-hora.component.css']
})
export class ModalReservarHoraComponent {

  @Output() mandarFecharModal = new EventEmitter();
  diaReserva: string = ''

  // form = FormGroup();

  constructor(

    private route: ActivatedRoute
  ) {
  }

  form = new FormGroup({
    food: new FormControl("", {
      validators: [Validators.required],
    }),
  });

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

  saveTime(){
    console.log("salvar horário", this.form.value);
  }
}
