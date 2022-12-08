import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //https://www.youtube.com/watch?v=m9OSBJaQTlM&list=LL&index=1
  //https://www.youtube.com/watch?v=Q5Xen_Y7lUk
  //https://github.com/portexe?tab=repositories
  title = 'projectBookingTenis';
  
  
  weekdays: Array<string> = ['domingo', 'segunda-feira','terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabádo'];
  daysFullCalendar: number = 0
  //daySquare =  `<div>Teste</div>`
  daysArr :Array<any>= [];
  showModal :boolean = false

  constructor() {
  }


  ngOnInit() {

    const dt = new Date()


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

 

    const paddingDays = this.weekdays.indexOf(dateString.split(', ')[0])
 


    this.daysFullCalendar = paddingDays + daysInMonth
    console.log("daysFullCalendar", this.daysFullCalendar);

   
    
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

  onClickModal(){
    console.log("modal aberto");
    this.showModal = true;
  }
}


