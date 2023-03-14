import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'smart360-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

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
  paymode: FormGroup;

  selectedYesNo = true;
  adjustbilltype: FormGroup;

  files: File[] = []; 
  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
  }
  onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  public showrcpt:boolean = false
  public showbtn:boolean = true
  submitBill() {
    this.showrcpt = true;
    this.showbtn = false;
  }
    
  selectedPayChannel = '';
  payChannel = [
    {id: 1, paychnl: 'Channel 1'},
    {id: 2, paychnl: 'Channel 2'},
    {id: 3, paychnl: 'Channel 3'},  
  ];
  selectedPayType = 'Refund';
  payType = [
    {id: 1, paytp: 'Subscription'},
    {id: 2, paytp: 'Refund'},
  ];
  selectedPagination:any;
  pagination = [
    {id: 1, name: '10'},
    {id: 2, name: '20'},
  ];
  selectedCategory:any;
  category = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
  ];
  selectedUtility: any;
  utility=[
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
    {id: 3, name: 'Utility 3'},
  ]
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

  collection = { count: 20, data: [] };

  constructor( private router: Router, private fb: FormBuilder ) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          billId: i + 5637,
          sub_type:'Meter',
          type: ['available','not available'].sort((a, b) => .5 - Math.random())[0],
          billPeriod: "27 Nov 2019 to 03 Mar 2020",
          currentval:500,
          changedval:200,
          billDue: new Date(),

          status: ['pending', 'completed'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  }
  dtOptions2 = {}
  ngOnInit(): void {
    this.adjustbilltype = this.fb.group({            
      billtype: '',
    });

    this.dtOptions2 = {
      pageLength: 10,
    };

    this.paymode = this.fb.group({            
      paymodetype: 'cash',
    });
  }


}
