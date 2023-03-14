import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'smart360-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.scss']
})
export class SchemesComponent implements OnInit {

  firstName = ''; 
  middleName = ''; 
  lastName = ''; 
  mobileNo = ''; 
  email = ''; 
  name = ''; 

  constructor() { }

  // toaster
  showtoast = false; 
  autohide = true;
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  textValue = 'Thomas Shelby';

  model: NgbDateStruct;
  date: {day: number, year: number, month: string}; 

  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPlus = faPlus;

  public applicantDetailsCollapse = false;
  public applicantPayCollapse = true;
  public applicantAddrsCollapse = true;
  public applicantKycCollapse = true;


  
  changeFn(val){
    console.log(val);
  }

  selectedCharege: any;
  charge = [
    {id: 1, name: 'Charge 1'},
    {id: 2, name: 'Charge 2'},
  ];

  selectedType:any;
  type = [
    {id: 1, name: 'Type 1'},
    {id: 2, name: 'Type 2'},
  ];

  selectedFrequency:any;
  Frequency = [
    {id: 1, name: 'Frequency 1'},
    {id: 2, name: 'Frequency 2'},
  ];

  selectedValidity:any;
  validity = [
    {id: 1, name: 'validity 1'},
    {id: 2, name: 'validity 2'},
  ];
  selectedTax:any;
  tax =  [
    {id: 1, name: 'Tax'},
    {id: 2, name: 'Tax'},
  ];


  paymentType = [];
  paymentType2 = [];
  paymentType3 = [];
  scheme= [];
  scheme2= [];
  paymentMode= [];
  stateProvince= [];
  billingAddress= [];
  city= [];
  billingCity= [];
  zipCode= [];
  billingZipCode= [];
  area= [];
  billingArea= [];
  subArea= []; 
  billingSubArea= []; 

  documentType= [
    {id: 1, name2: 'Personal details'},
    {id: 2, name2: 'Address details'},
  ];
  kycDocument= [
    {id: 3, name: 'Pancard'},
    {id: 4, name: 'Energy Bill'},
    {id: 5, name: 'Aadhar Card'},
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
  
  // toaster


  close() {
    this.autohide = false;
    // setTimeout(() => this.autohide = true, 5000);
  }
  addCustomUser = (term) => ({id: term, name: term});


  ngOnInit(): void {   
    
  }

}
