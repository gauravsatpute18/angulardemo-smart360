import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'smart360-validation-consumer',
  templateUrl: './validation-consumer.component.html',
  styleUrls: ['./validation-consumer.component.scss']
})
export class ValidationConsumerComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  model: NgbDateStruct;
  date: {year: number, month: number}; 

  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;

  selectedMonth: any;
  month = [
    {id: 1, mnth: 'March'},
    {id: 2, mnth: 'April'},
    {id: 3, mnth: 'May'},
    {id: 4, mnth: 'June'},
    {id: 5, mnth: 'July'},
  ];

  selectedCycle: any;
  cycle = [
    {id: 1, cycl: '30'},
    {id: 2, cycl: '20'},
    {id: 3, cycl: '10'},
  ];

  selectedPortion: any;
  portion = [
    {id: 1, prtn: 'Old Alwal-30'},
    {id: 2, prtn: 'Old Alwal-32'},
    {id: 3, prtn: 'Old Alwal-33'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, stts: 'Active'},
    {id: 2, stts: 'Inactive'},
  ];

  files: File[] = []; 
  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
  }
  onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
  }
  
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          mru: "M1-GANDHI-NAG-" + i,
          installno: "00199243" + i,
          bpno: "3009539" + i,
          dvcno: "3009539" + i,
          nm: "Rivka Frank ",
          category: "Domestic",
          cnt: "+91 984916305" + i,
          status: ['active', 'inactive'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
  }

}
