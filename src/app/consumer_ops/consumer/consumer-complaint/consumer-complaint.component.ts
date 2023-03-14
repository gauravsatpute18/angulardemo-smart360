import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'smart360-consumer-complaint',
  templateUrl: './consumer-complaint.component.html',
  styleUrls: ['./consumer-complaint.component.scss']
})
export class ConsumerComplaintComponent implements OnInit {

  model: NgbDateStruct;
  date: {day: number, year: number, month: string}; 

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
  faStar = faStar;
  faStarHalf = faStarHalf;

  selectedYesNo = true;
  adjustbilltype: FormGroup;

  public showrcpt:boolean = false
  submitBill() {
    this.showrcpt = true;
  }
  selectedPagination:any;
  pagination = [
    {id: 1, name: '100'},
    {id: 2, name: '200'},
  ];

  selectedType = 'Technical'
  type = [
    {id: 1, name: 'Technical'},
    {id: 2, name: 'Non Technical'},
  ];

  selectedSubtype = 'Meter'
  subtype = [
    {id: 1, name: 'Meter'},
    {id: 2, name: 'Payment'},
  ];

  selectedComplaintType = '';
  complaintType  = [
    {id: 1, cmplntyp: 'Type 1'},
    {id: 2, cmplntyp: 'Type 2'},
  ];

  selectedComplaintSubType = '';
  complaintSubType  = [
    {id: 1, cmplnsubtyp: 'Sub Type 1'},
    {id: 2, cmplnsubtyp: 'Sub Type 2'},
  ];

  time = '';
  selectedTime  = [
    {id: 1, tym: 'Option 1'},
    {id: 2, tym: 'Option 2'},
  ];
  

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  reqsrvc:any = true;
  proceedreqsrvc() {
    this.reqsrvc = !this.reqsrvc;
  }

  collection = { count: 60, data: [] };

  constructor( private router: Router, private fb: FormBuilder ) {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          srvcId: i + 199243057,
          srvccat: 'Technical',
          srvcsubcat: 'Meter ',
          reqOn: new Date(),
          status: ['unresolved', 'resolved', 'pending'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  }

  ngOnInit(): void {
    this.adjustbilltype = this.fb.group({            
      billtype: '',
    });
  }

}
