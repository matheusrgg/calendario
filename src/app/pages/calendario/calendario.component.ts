import { Component, ElementRef, OnInit, Renderer2,RendererFactory2, ViewChild } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit{

  weekdays: Array<string> = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabádo'];
  daysArr: Array<any> = [];
  showModal: boolean = false
  dataHoje:Date = new Date()
  getDay  = this.dataHoje.getDate()
  dateDisplay :string = ''
  
  nav = 0
  
  emptyArrSemanaSemData:any = []
  // diaDaSemana = 20
  colEmptyDiaSemana = ''
  // `<div class="col">Vázio</div> <div class="col">Vázio</div>` + `<div class="col">Vázio</div>`
  colDiaSemana = ""
  diaDaSemana = ''
  colRow = ''
  // tableRow = ''
  col2 ='tESTE COLUNA 2 '
  
  @ViewChild('hello', { static: false }) divHello: ElementRef;
  
  constructor(
    private reservasService : ReservasService,
    private renderer: Renderer2,
    private rendererFactory :RendererFactory2
    ){}
    
  newMonth = new Date();

  ngOnInit() {
    this.configDatas()
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.divHello.nativeElement, 'color', 'blue');

    this.renderer.setProperty(this.divHello.nativeElement,'innerHTML',"Hello Angular")
    this.renderer.addClass(this.divHello.nativeElement, 'row')

    const newTr = this.renderer.createElement('div');
    this.renderer.addClass(newTr, 'row')
    this.renderer.setProperty(newTr,'innerHTML',"Hello Angular")

    this.renderer.appendChild(this.divHello.nativeElement, newTr);

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
