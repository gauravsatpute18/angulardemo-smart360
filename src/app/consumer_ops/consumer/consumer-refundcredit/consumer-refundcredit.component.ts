import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-consumer-refundcredit',
  templateUrl: './consumer-refundcredit.component.html',
  styleUrls: ['./consumer-refundcredit.component.scss']
})
export class ConsumerRefundcreditComponent implements OnInit {

  model: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPen = faPen;
  faMapMarkerAlt = faMapMarkerAlt;
  faPrint = faPrint;
  faTimesCircle = faTimesCircle;
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;
  
  selectedMonth = '';
  month = [
    {id: 1, name: 'Jan'},
    {id: 2, name: 'Feb'},
    {id: 3, name: 'March'},  
  ];

  selectedRefMonth = 'March';
  refMonth = [
    {id: 1, refmnth: 'January'},
    {id: 2, refmnth: 'February'},
    {id: 2, refmnth: 'March'},
    {id: 2, refmnth: 'April'},
    {id: 2, refmnth: 'May'},
  ];
  selectedPagination:any;
  pagination = [
    {id: 1, name: '100'},
    {id: 2, name: '200'},
  ];
  
  public showrcpt:boolean = false
  submitBill() {
    this.showrcpt = true;
  }
  resetSubmitBill() {
    this.showrcpt = false;
  }

  collection = { count: 60, data: [] };

  constructor (private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          billId: i + 56378848,
          billMonth: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'December'].sort((a, b) => .5 - Math.random())[0],
          billPeriod: "27 Nov 2019 to 03 Mar 2020",
          billDue: new Date(),
          status: ['paid', 'unpaid'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  };
  
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  ngOnInit(): void {
  }

}
