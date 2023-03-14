import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'smart360-consumer-adjustbill',
  templateUrl: './consumer-adjustbill.component.html',
  styleUrls: ['./consumer-adjustbill.component.scss']
})
export class ConsumerAdjustbillComponent implements OnInit {

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

  selectedYesNo = true;
  adjustbilltype: FormGroup;

  public showrcpt:boolean = false
  submitBill() {
    this.showrcpt = true;
  }
    
  selectedPagination:any;
  pagination = [
    {id: 1, name: '10'},
    {id: 2, name: '20'},
  ];
  
  selectedMonth = '';
  month = [
    {id: 1, name: 'Jan'},
    {id: 2, name: 'Feb'},
    {id: 3, name: 'March'},  
  ];

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  collection = { count: 12, data: [] };

  constructor ( private router: Router, private fb: FormBuilder ) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          billId: i + 56378848,
          billMonth: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'December'].sort((a, b) => .5 - Math.random())[0],
          billPeriod: "27 Nov 2019 to 03 Mar 2020",
          billDue: new Date(),
          billAmount:500,
          status: ['paid', 'unpaid'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  }
  dtOptions2 = {}
  ngOnInit(): void {
    this.dtOptions = {
    };
    this.adjustbilltype = this.fb.group({            
      billtype: '',
    });

    this.dtOptions2 = {
      pageLength: 12,
    };
  }

}
