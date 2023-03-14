import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'smart360-consumer-services',
  templateUrl: './consumer-services.component.html',
  styleUrls: ['./consumer-services.component.scss']
})
export class ConsumerServicesComponent implements OnInit {

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

  selectedServiceCategory = '';
  serviceCategory  = [
    {id: 1, srvccat: 'Category 1'},
    {id: 2, srvccat: 'Category 2'},
  ];
  selectedPagination:any;
  pagination = [
    {id: 1, name: '100'},
    {id: 2, name: '200'},
  ];
  selectedServiceSubCategory = '';
  serviceSubCategory  = [
    {id: 1, srvcsubcat: 'Category 1'},
    {id: 2, srvcsubcat: 'Category 2'},
  ];

  time = '';
  selectedTime  = [
    {id: 1, tym: 'Option 1'},
    {id: 2, tym: 'Option 2'},
  ];

  selectedType = 'Maintenance'
  type = [
    {id: 1, name: 'Maintenance'},
    {id: 2, name: 'Installation'},
  ];

  selectedSubtype = 'Meter'
  subtype = [
    {id: 1, name: 'Meter'},
    {id: 2, name: 'Pipe'},
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
          srvccat: 'Maintenance',
          srvcsubcat: 'Meter Fixing',
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
