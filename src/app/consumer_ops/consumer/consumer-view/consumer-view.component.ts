import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-consumer-view',
  templateUrl: './consumer-view.component.html',
  styleUrls: ['./consumer-view.component.scss']
})
export class ConsumerViewComponent implements OnInit {

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
  profchangetype: FormGroup;
  paymode: FormGroup;
  dtOptions: DataTables.Settings = {};
  model: NgbDateStruct;
  date: {year: number, month: number}; 
  public showrcpt:boolean = false
  public showbtn:boolean = true
  submitBill() {
    this.showrcpt = true;
    this.showbtn = false

  }

  public profundbtn:boolean = true
  public profupdtd:boolean = false
  onprofupdtd() {
    this.profupdtd = true;
    this.profundbtn = false

  }
  public prokycbtn:boolean = true
  kycupload(){
    this.prokycbtn = false
  }
  resetprofupdtd() {
    this.profupdtd = false;
  }

  public changemeter:boolean = false
  onchangemeter() {
    this.changemeter = true;
  }  
  resetchangemeter() {
    this.changemeter = false;
  }

  constructor( private fb: FormBuilder ) { }

  selectedServices:"Water";
  service = [
    {id: 1, name: 'Water'},
    {id: 2, name: 'Gas'},
    {id: 3, name: 'Electricity'},  
  ];

  selectedBillCycle:"02";
  cycle = [
    {id: 1, name: '02'},
    {id: 2, name: '00'},
    {id: 3, name: '03'},  
  ];

  selectedRoute:"102";
  route = [
    {id: 1, name: '102'},
    {id: 2, name: '100'},
    {id: 3, name: '103'},  
  ];

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

  selectedPayChannel = 'Paytm';
  payChannel = [
    {id: 1, paychnl: 'Paytm'},
    {id: 2, paychnl: 'GooglePay'},
    {id: 3, paychnl: 'Phone Pay'},  
  ];

  selectedPayType = 'Refund';
  payType = [
    {id: 1, paytp: 'Subscription'},
    {id: 2, paytp: 'Refund'},
  ];
  
  selectedDocType = '';
  docType = [
    {id: 1, doctp: 'Type 1'},
    {id: 2, doctp: 'Type 2'},
  ];

  selectedDocument = '';
  document = [
    {id: 1, doc: 'Adharcard'},
    {id: 2, doc: 'PAN'},
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


  // public shown:boolean = true;

  ngOnInit() {
    this.profchangetype = this.fb.group({            
      changetype: 'name',
    });
    this.paymode = this.fb.group({            
      paymodetype: 'cash',
    });
  }  

}
