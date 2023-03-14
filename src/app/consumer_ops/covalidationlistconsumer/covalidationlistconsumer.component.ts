import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye,faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-covalidationlistconsumer',
  templateUrl: './covalidationlistconsumer.component.html',
  styleUrls: ['./covalidationlistconsumer.component.scss']
})
export class CovalidationlistconsumerComponent implements OnInit {


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
  faPlus=faPlus;

  

 
  

  selectedMonth: any;
  Month = [
    {id: 1, name: 'Jan'},
    {id: 2, name: 'Feb'},
  ];

  selectedCycle: any;
  Cycle = [
    {id: 1, name: 'Cycle 1'},
    {id: 2, name: 'Cycle 2'},
  ];

  selectedPortion: any;
  Portion = [
    {id: 1, name: 'subArea 1'},
    {id: 2, name: 'subArea 2'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];

  // selectedDateRange: any;
  // dateRange = [
  //   {id: 1, name: 'dateRange 1'},
  //   {id: 2, name: 'dateRange 2'},
  // ];

  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
  
      
          installationno:"00199243",
          status: ['partial', 'complete', 'dispatched','started','notdispatched'].sort((a, b) => .5 - Math.random())[0],
          BPNo:"3009539",
          MRportion: "Old Alwal",
          DeviceNo:"3009539",
          MRU:"M1-GANDHI-NAG-1",
          name:"Rivika Frank",
          category:"Domestic",
         contact: "+91 9849163057",
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
  renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
  }
  // onPageChange(event) {
  //   console.log(event);
  //   this.config.currentPage = event;
  // }
}
