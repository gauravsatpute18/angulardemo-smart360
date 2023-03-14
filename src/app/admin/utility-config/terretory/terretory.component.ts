import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'smart360-terretory',
  templateUrl: './terretory.component.html',
  styleUrls: ['./terretory.component.scss'] 
})
export class TerretoryComponent implements OnInit {

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

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];
  
  selectedDepartment: any;
  department = [
    {id: 1, name: 'Finance'},
    {id: 2, name: 'Marketing'},
    {id: 3, name: 'Billing'},
  ];

  countries = { count: 12, data: [
    {
      country : 'USA'
    },
    {
      country : 'Mexico'
    },
  ] };

  states = { count: 12, data: [
    {
      state : 'Texas'
    },
    {
      state : 'Florida'
    },
    {
      state : 'Michigan'
    },
  ] };

  cities = { count: 12, data: [
    {
      city : 'New York'
    },
    {
      city : 'Washington D.C.'
    },
    {
      city : 'Austin'
    },
    {
      city : 'Houston'
    },
  ] };

  sections = { count: 12, data: [
    {
      section : 'Queens'
    },
    {
      section : 'Brookyn'
    },
    {
      section : 'Staten island'
    },
    {
      section : 'Manhatten'
    },
  ] };

  areas = { count: 12, data: [
    {
      area : 'Queens villege'
    },
    {
      area : 'Ridgewood'
    },
    {
      area : 'Brownsville'
    },
    {
      area : 'Rossville'
    },
  ] };

  subareas = { count: 12, data: [
    {
      subarea : 'Jamaica Ave'
    },
    {
      subarea : '93rd Ave'
    },
    {
      subarea : 'Murdock'
    },
    {
      subarea : 'Hempstead Ave'
    },
  ] };

  country = ""
  city = ""
  state = ""
  section = ""
  area = ""
  subarea = ""
  region = ""
  editedCountry = "USA"
  editedCity = "New York"
  editedState = "Texas"
  editedSection = "Manhatten"
  editedArea = "Ridgewood"
  editedSubarea = "Murdock"
  editedRegion = "America"
  subareaToast = false;
  areaToast = false;
  sectionToast = false;
  countryToast = false;
  cityToast = false;
  stateToast = false;
  autohide = true;

  selectedPagination:any;
  pagination = [
  {id: 1, name: '10'},
  {id: 2, name: '20'},
  ];
  model: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  dtOptions2 = {}
  collection = { count: 12, data: [] };

  constructor( private router: Router, private fb: FormBuilder ) { 
  //Create dummy data
  for (var i = 0; i < this.collection.count; i++) {
    this.collection.data.push(
      {
        region: ['America'],
        country: ['USA','Mexico'].sort((a, b) => .5 - Math.random())[0],
        state: ['Texas','Florida','Michigan'].sort((a, b) => .5 - Math.random())[0],
        section: ['Queens','Brookyn','Staten Island','Manhatten'].sort((a, b) => .5 - Math.random())[0],
        city: ['New York','Washington D.C.','Houston','Austin'].sort((a, b) => .5 - Math.random())[0],
        area: ['Ridgewood','Queens villege','Brownsville','Rossville'].sort((a, b) => .5 - Math.random())[0],
        subarea: ['Murdock','Hempstead Ave','93rd Ave','Jamaica Ave'].sort((a, b) => .5 - Math.random())[0],
        status: ['active', 'inactive'].sort((a, b) => .5 - Math.random())[0],
      }
    );

  this.dtOptions2 = {
    pageLength: 12,
  };
  }
  }

  ngOnInit(): void {
  }

  onSubareaAdd(){
    this.subareas.data.push(
      {
        subarea : this.subarea
      }
    );
    this.subareaToast = true;
  }

  onAreaAdd(){
    this.areas.data.push(
      {
        area : this.area
      }
    );
    this.areaToast = true;
  }

  onSectionAdd(){
    this.sections.data.push(
      {
        section : this.section
      }
    );
    this.sectionToast = true;
  }

  onCountryAdd(){
    this.countries.data.push(
      {
        country : this.country
      }
    );
    this.countryToast = true;
  }

  onCityAdd(){
    this.cities.data.push(
      {
        city : this.city
      }
    );
    this.cityToast = true;
  }

  onStateAdd(){
    this.states.data.push(
      {
        state : this.state
      }
    );
    this.stateToast = true;
  }

}
