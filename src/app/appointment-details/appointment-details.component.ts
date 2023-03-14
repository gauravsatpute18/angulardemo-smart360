import { Component, OnInit } from '@angular/core';
import { faChevronLeft,faCalendarAlt, faChevronRight,faEye ,faPlus, faPen,faFileCsv, faMapMarkerAlt, faFileExcel, faPrint, faFilePdf } from '@fortawesome/free-solid-svg-icons'; 
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent implements OnInit {

  show = false;

  model: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  files: File[] = [];
  faCalendarAlt = faCalendarAlt;
  date: {year: number, month: number}; 
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPen = faPen;
  faFileCsv = faFileCsv;
  faMapMarkerAlt = faMapMarkerAlt;
  faPrint = faPrint;
  faFileExcel = faFileExcel;
  faFilePdf= faFilePdf;
  faEye =faEye ; 
  selectedDocumentType ='Address';
  documentType= [
    {id: 1, name2: 'Personal details'},
    {id: 2, name2: 'Address details'},
  ];


  selectedDoctype: any;
  doctype= [
    {id: 1, name: 'Lorem Ipsum'},
    {id: 2, name: 'Valar Moghulis'},
  ];

  selectedDoctype2: any;
  doctype2= [
    {id: 1, name: 'Lorem Ipsum'},
    {id: 2, name: 'Valar Moghulis'},
  ];


  selectedAmount: any;
  amount= [
    {id: 1, name: 'Above 100000'},
    {id: 2, name: 'Above 100000'},
  ];



  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        { 
          id: i + 1,
          Adname: "Lorem ipsum" ,
          AdNo: "0"+ i,
          status: ['danger', 'success', 'warning'].sort((a, b) => .5 - Math.random())[0],
          frequency: "5 - 6 times",
          channel: "channel x",
          vendor:"Rivika Frank",
          raisedOn: new Date(),
        }
      );
    }
  }


  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
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
}
