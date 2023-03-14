import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'smart360-consumer-payments',
  templateUrl: './consumer-payments.component.html',
  styleUrls: ['./consumer-payments.component.scss']
})
export class ConsumerPaymentsComponent implements OnInit {
  selected;
  model: NgbDateStruct;
  model2: NgbDateStruct;
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

  selectedCycle:any;
  cycle = [
    {id: 1, name: 'Cycle 1'},
    {id: 2, name: 'Cycle 2'},
  ];
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
   
  public showrcpt:boolean = false
  submitBill() {
    this.showrcpt = true;
  }
  resetSubmitBill() {
    this.showrcpt = false;
  }

public showrcptcreadit:boolean = false
  submitBillCreadit(){
    this.showrcptcreadit = true
  }

  selectedPagination:any;
  pagination = [
    {id: 1, name: '100'},
    {id: 2, name: '200'},
  ];
  
  selectedType:any;
  type = [
    {id: 1, name: 'Domestic 1'},
    {id: 2, name: 'Domestic 2'},
  ];

  selectedCity: any;
  city = [
    {id: 1, name: 'city 1'},
    {id: 2, name: 'city 2'},
  ];

  selectedArea: any;
  area = [
    {id: 1, name: 'area 1'},
    {id: 2, name: 'area 2'},
  ];


  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];

  selectedMru:any;
  mru=[
    {id: 1, name: 'MRU 1'},
    {id: 2, name: 'MRU 2'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'utility 1'},
    {id: 2, name: 'utility 2'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
  ];

  selectedBillMonth= "Jan";
  billMonth = [
    {id: 1, blmnth: 'Feb'},
    {id: 2, blmnth: 'March'},
  ];

  selectedYesNo = true;
  profchangetype: FormGroup;
  paymode: FormGroup;

  collection = { count: 60, data: [] };

  constructor (private router: Router, private fb: FormBuilder) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          billId: i + 56378848,
          txnId: i + 1000378849,
          type: ['Online', 'Offline'].sort((a, b) => .5 - Math.random())[0],
          channel: ['Phone Pay', 'Paytm'].sort((a, b) => .5 - Math.random())[0],
          billAmount: "500",
          dte: new Date(),
          status: ['paid', 'unpaid'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  };

  selectedState = '';
  state = [
    {id: 1, state1: 'State 1'},
    {id: 2, state1: 'State 2'},
    {id: 3, state1: 'State 3'},  
  ];

  selectedScheme = '30 Days Free';
  scheme = [
    {id: 1, schm: '30 Days Free'},
    {id: 2, schm: '60 Days Free'},
    {id: 3, schm: '90 Days Free'},  
  ];

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
  
  selectedDocType = '';
  docType = [
    {id: 1, doctp: 'docType 1'},
    {id: 2, doctp: 'docType 2'},
  ];

  selectedDocument = '';
  document = [
    {id: 1, doc: 'docType 1'},
    {id: 2, doc: 'docType 2'},
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
  showtoast = false;
  autohide = true;

  ngOnInit() {
    this.profchangetype = this.fb.group({            
      changetype: 'name',
    });
    this.paymode = this.fb.group({            
      paymodetype: 'cash',
    });
  } 

}
