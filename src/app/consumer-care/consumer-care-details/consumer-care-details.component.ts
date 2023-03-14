import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'smart360-consumer-care-details',
  templateUrl: './consumer-care-details.component.html',
  styleUrls: ['./consumer-care-details.component.scss']
})
export class ConsumerCareDetailsComponent implements OnInit {

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

  constructor( private fb: FormBuilder ) { }

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
