import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  weekdays: Array<string> = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabádo'];

  daysArr: Array<any> = [];
  showModal: boolean = false
  dataAtual = Date.now()
  dateDisplay :string = ''

  nav = 0


constructor(){

}
  newMonth = new Date();
 

  ngOnInit() {
    this.configDatas()
  }

  backMonth() {
    console.log("funciona pra tras", this.nav);
    this.nav--
    this.daysArr= []
    this.configDatas()
   

  }
  nextMonth() {
    console.log("funciona pra tras", this.nav);
    this.nav++
    this.daysArr= []
    this.configDatas()
  }

  configDatas(){
    const dt = new Date();

    if (this.nav !== 0) {
      dt.setMonth(new Date().getMonth() + this.nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('pt-br', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  
    this.dateDisplay = `${dt.toLocaleDateString('pt-br', { month: 'long' })} ${year}`;
    const  paddingDays = this.weekdays.indexOf(dateString.split(', ')[0])
    //cont daysFullCalendar = paddingDays + daysInMonth
    this.preencherCalendario(paddingDays, daysInMonth , month, year)
  }


  preencherCalendario(paddingDays:any, daysInMonth:any , month:any, year:any){
    console.log(paddingDays,daysInMonth, month, year);
 
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        this.daysArr.push({
          value: i - paddingDays,
          event: null,
          isCurrentDay: false,
          date: dayString,
        });
      } else {
        this.daysArr.push({
          value: 'padding',
          event: null,
          isCurrentDay: false,
          date: '',
        });
      }
    }
  }

  
  openModal() {
    console.log("modal aberto");
    this.showModal = true;
  }

  onFecharModal(evento: any) {
    console.log("falseeeeeeeeeeeee", evento);
    this.showModal = evento;
  }
}
