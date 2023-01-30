import { Component, ElementRef, OnInit, Renderer2, RendererFactory2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ReservasService } from 'src/app/services/reservas.service';

import * as XLSX from 'xlsx'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  weekdays: Array<string> = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabádo'];
  daysArr: Array<any> = [];
  showModal: boolean = false
  dataHoje: Date = new Date()
  getDay = this.dataHoje.getDate()
  dateDisplay: string = ''

  nav = 0

  emptyArrSemanaSemData: any = []
  // diaDaSemana = 20
  colEmptyDiaSemana = ''
  // `<div class="col">Vázio</div> <div class="col">Vázio</div>` + `<div class="col">Vázio</div>`
  colDiaSemana = ""
  diaDaSemana = ''
  colRow = ''
  // tableRow = ''
  col2 = 'tESTE COLUNA 2 '

  currentTr: void

  @ViewChild('hello', { static: false }) divHello: ElementRef;

  constructor(
    private reservasService: ReservasService,
    private renderer: Renderer2,
    private rendererFactory: RendererFactory2,
    private router: Router
  ) { }

  newMonth = new Date();

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.configDatas()

  }


  backMonth() {
    this.nav--
    this.daysArr = []
    this.configDatas()
  }

  nextMonth() {
    this.nav++
    this.daysArr = []
    this.configDatas()
  }

  configDatas() {


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
    const paddingDays = this.weekdays.indexOf(dateString.split(', ')[0])
    this.preencherCalendario(paddingDays, daysInMonth, month, year)
    this.novoCalendario(daysInMonth, paddingDays, month, year)

  }

  preencherCalendario(paddingDays: any, daysInMonth: any, month: any, year: any) {

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        this.daysArr.push({
          value: i - paddingDays,
          event: null,
          isCurrentDay: false,
          date: dayString,
          month: month + 1,
          dataVelha: this.comparadorData(dayString)

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
    this.showModal = true;
  }

  onFecharModal(evento: any) {
    this.showModal = evento;
  }

  comparadorData(dayAmericano: string) {
    const dataBotao = new Date(dayAmericano)

    if (this.dataHoje < dataBotao) {
      return true
    } else {
      return false

    }
  }


  addNewRow() {
    let node = this.renderer.createElement('div');
    this.renderer.addClass(node, 'row')
    return node
  }


  novoCalendario(daysInMonth: any, paddingDays: any, month: any, year: any) {

    this.renderer.setProperty(this.divHello.nativeElement, 'innerHTML', "")
    const newTr = this.renderer.createElement('div');
    this.renderer.addClass(newTr, 'row')
    this.renderer.appendChild(this.divHello.nativeElement, newTr)

    for (let i = 0; i < paddingDays; i++) {
      let emptyDivCol = this.renderer.createElement('div');
      this.renderer.addClass(emptyDivCol, 'empty-day')
      this.renderer.addClass(emptyDivCol, 'col')
      this.renderer.appendChild(newTr, emptyDivCol)
    }

    for (let i = 1; i < daysInMonth; i++) {

      if (this.divHello.nativeElement.lastChild.childNodes.length >= 7) {
        this.renderer.appendChild(this.divHello.nativeElement, this.addNewRow())
      }

      let currentDay = this.renderer.createElement('div');
      this.renderer.addClass(currentDay, 'day-novo');
      this.renderer.addClass(currentDay, 'col');
      this.renderer.setProperty(currentDay, 'innerHTML', i);
      let button = this.renderer.createElement('button');
      this.renderer.setProperty(button, 'innerHTML', 'Reservar');
      this.renderer.addClass(button, 'button');
      this.renderer.appendChild(currentDay, button)
      this.renderer.listen(button, "click", () => {
        this.router.navigate(['/calendario', `${i}/${month + 1}/${year}`])
        this.openModal()
      })
      this.renderer.listen(currentDay, "click", () => {
        this.router.navigate(['/calendario', `${i}/${month + 1}/${year}`])
        this.openModal()
      })

      this.renderer.appendChild(this.divHello.nativeElement.lastChild, currentDay);

    }

    for (let i = this.divHello.nativeElement.lastChild.childNodes.length; i < 7; i++) {
      let emptyDivCol = this.renderer.createElement('div');
      this.renderer.addClass(emptyDivCol, 'empty-day')
      this.renderer.addClass(emptyDivCol, 'col')
      this.renderer.appendChild(this.divHello.nativeElement.lastChild, emptyDivCol)
    }
  }



  reservas = [
    {
      "quadra": "rápida",
      "nome": "Joao Antonio",
      "Dia": "17/12/2022",
      "Hora": "06:00-7:00",
      "pagamento": "nao concluido",
      "status": "reservado"
    },
    {
      "quadra": "rápida",
      "nome": "Beatriz Oliveira",
      "Dia": "15/12/2022",
      "Hora": "18:00-19:00",
      "pagamento": "nao concluido",
      "status": "reservado"
    },
    {
      "quadra": "rápida",
      "nome": "Caio de Sousa",
      "Dia": "22/12/2022",
      "Hora": "19:00-20:00",
      "pagamento": "nao concluido",
      "status": "reservado"
    },


  ]

  downloadExcel(){
    this.exportToXlsx(this.reservas)
  }

  exportToXlsx(data: any) {
    console.log("baixar excel");
    const doc = data.map((item: any) => this.dataItemToExcelLine(item));
    const title = 'TitleTeste';
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const worksheet = XLSX.utils.json_to_sheet(doc);
  

    worksheet['!cols'] = this.fitToColumn(doc);

    //esse nome workbook tb vi no video
    const workbook = {
      Sheets: {
        [title]: worksheet,
      },
      SheetNames: [title.substring(0, 31)], //Nome das planilhas podem ter no máximo 32 caracteres
    }

    const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    const blobData = new Blob([excelBuffer], {type: EXCEL_TYPE});
    //vou precisar baixar o renderer 2 e já usei no form 
    const linkRef = this.renderer.createElement('a') as HTMLAnchorElement
    const url = window.URL.createObjectURL(blobData);
    this.renderer.setAttribute(linkRef , 'href', url)
    this.renderer.setAttribute(linkRef , 'download', `${title}`)
    linkRef.click()

  }

  dataItemToExcelLine = (item: any) => {
    let line: any = {}
    for (let colKey in item) {
      const colName = colKey
      line[colName] = item[colKey]
    }
    return line
  }

  private fitToColumn = (data:any) => {
    const columnWidths = [];
    for (const property in data[0]) {
      columnWidths.push({
        wch: Math.max(
          property ? property.toString().length : 0,
          ...data.map((obj: any) => (obj[property] ? obj[property].toString().length : 0))
        )
      })
    }
    return columnWidths
  }

}