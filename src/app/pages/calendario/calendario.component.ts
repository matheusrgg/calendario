import { Component, Renderer2 } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  weekdays: Array<string> = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabádo'];

  daysArr: Array<any> = [];
  showModal: boolean = false
  dataHoje:Date = new Date()
  getDay  = this.dataHoje.getDate()
  dateDisplay :string = ''

  nav = 0

  emptyArrSemanaSemData:any = []
  diaDaSemana = 20
  colEmptyDiaSemana = ''
  // `<div class="col">Vázio</div> <div class="col">Vázio</div>` + `<div class="col">Vázio</div>`
  colDiaSemana = ""
  colRow = `<div class="row">${this.colEmptyDiaSemana || this.colDiaSemana}</div>`
  tableRow = ''


constructor(
  private reservasService : ReservasService,
  private renderer2:Renderer2
){

}
  newMonth = new Date();
 

  ngOnInit() {
    this.configDatas()
    // this.colEmptyDiaSemana += `<div class="col">Vázio</div>`
    
  

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
    console.log("days int the month igual a last Day neh?" ,daysInMonth );

    const dateString = firstDayOfMonth.toLocaleDateString('pt-br', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  console.log("object", dateString);
    this.dateDisplay = `${dt.toLocaleDateString('pt-br', { month: 'long' })} ${year}`;
    const  paddingDays = this.weekdays.indexOf(dateString.split(', ')[0])
    console.log("o que tem nesse padding Days?", paddingDays);
    //cont daysFullCalendar = paddingDays + daysInMonth



 
    //esse for loop vai da 4 dias da semana
    for (let i = 0; i < (paddingDays || 7); i++) {
     this.colEmptyDiaSemana += `<div class="col">Vázio</div>`
    }

    //esse for loop vai da 31 dias
    //preciso colocar a regra de quebrar
    //antes preciso criar uma row aqui em cima neh
    for (let i = 0; i < daysInMonth ; i++){
      this.colDiaSemana += `<div class="col">Dia Da Semana</div>`
    }
    console.log("colDiaSemana", this.colDiaSemana);
    this.tableRow = this.colEmptyDiaSemana + this.colDiaSemana 
    console.log("quebrou de vez", this.tableRow);
console.log("como ta essa srting com os dias vazios", this.colEmptyDiaSemana);

    this.preencherCalendario(paddingDays, daysInMonth , month, year)
  }


  preencherCalendario(paddingDays:any, daysInMonth:any , month:any, year:any){
    console.log(paddingDays,daysInMonth, month, year);
 
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
     
      console.log("oq tem dentro desse dayString?", month+1);
      if (i > paddingDays) {
        this.daysArr.push({
          value: i - paddingDays,
          event: null,
          isCurrentDay: false,
          date: dayString,
          month: month+1,
          dataVelha:this.comparadorData(dayString)
        
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


  comparadorData(dayAmericano:string){

    
    const dataBotao = new Date(dayAmericano)

    if(this.dataHoje < dataBotao){
      return true
    }else{
      return false

    }
  }
  
}
