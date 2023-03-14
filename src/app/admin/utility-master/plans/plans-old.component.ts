import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'smart360-plans',
  templateUrl: './plans.component-old.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponentOld implements OnInit {

  model1: NgbDateStruct;
  model2: NgbDateStruct;
  model3: NgbDateStruct;
  model4: NgbDateStruct;
  date: { year: number, month: number};

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

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedStatus: any = "";
  status = [
    {id: 1, name: 'Basic'},
    {id: 2, name: 'Advance'},
    {id: 3, name: 'Enterprise'}
  ];

  selectedDepartment: any = "";
  department = [
    {id: 1, name: 'Territory'},
    {id: 2, name: 'Num Format'},
    {id: 3, name: 'Role'},
    {id: 4, name: 'User'},
    {id: 5, name: 'Campaign'},
    {id: 6, name: 'Survey'},
    {id: 7, name: 'Registration'},
    {id: 8, name: 'Consumers'},
    {id: 9, name: 'Meter Data'},
    {id: 10, name: 'Billing'},
    {id: 11, name: 'Payments'},
    {id: 12, name: 'Service Requests'},
    {id: 13, name: 'Complaints'}
  ];

  selectedDepartment1: any = "";
  department1 = [
    {id: 1, name1: 'Work Orders'},
    {id: 2, name1: 'Contracts'},
    {id: 3, name1: 'Suppliers'},
    {id: 4, name1: 'Store'},
    {id: 5, name1: 'Asset'},
  ];

  selectedDepartment2: any = "";
  department2 = [
    {id: 1, name2: 'Products'},
    {id: 2, name2: 'Services'},
    {id: 3, name2: 'Tenders'},
    {id: 4, name2: 'Orders'},
    {id: 5, name2: 'HCM'},
    {id: 6, name2: 'Finance'},
  ];

  selectedCompany: any
  company = [
    {id: 1, name: 'Company 1'},
    {id: 2, name: 'Company 2'},
    {id: 3, name: 'Company 3'}
  ]

  selectFilterStatus: any
  filterStatus = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
    {id: 3, name: 'status 3'}

  ]

  selectFilterDepartment: any
  filterDepartment = [
    {id: 1, name: 'Finance'},
    {id: 2, name: 'Marketing'},
    {id: 3, name: 'Billing'}

  ]

  selectedsubtype:any
  subtype = [
  {id: 1, name: 'Type 1'},
  {id: 2, name: 'Type 2'},
  ];

  selected_status:any
  status_filter = [
  {id: 1, name: 'status 1'},
  {id: 2, name: 'status 2'},
  ];

  selected_department:any
  dept_filter = [
  {id: 1, name: 'dept 1'},
  {id: 2, name: 'dept 2'},
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

  installations = { count: 12, data: [
    {
      skill : 'Installation'
    },
    {
      skill : 'Meter Reading'
    },
  ] };

  modules = { count: 12, data: [
    {
      module : 'Registration'
    },
   
  ] };

  prefix_format = { count: 12, data: [
    {
      format : 'Infra'
    },
  ] };

  prefix_yes = { count: 12, data: [
    {
      prefix : 'Yes',
    },
    {
      prefix : 'No'
    },
  ] };

  start = { count: 12, data: [
    {
      starting : '1000',
    },
  ] };

  curr1 = { count: 12, data: [
    {
      current : '1000',
    },
  ]};



  



  country = ""
  city = ""
  state = ""
  section = ""
  area = ""
  subarea = ""
  region = ""
  skill = ""
  module = ""
  format = ""
  prefix = ""
  starting = ""
  current = ""
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
  typeToast = false;
  subTypeToast = false;
  skillToast = false;


 

  

  selectedPagination:any;
  pagination = [
  {id: 1, name: '10'},
  {id: 2, name: '20'},
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

  selectedMonth = '';
  month = [
  {id: 1, name: 'Jan'},
  {id: 2, name: 'Feb'},
  {id: 3, name: 'March'},  
  ];


  model: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  dtOptions2 = {}
  collection = { count: 12, data: [] };

  constructor( private router: Router, private fb: FormBuilder ){ 
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          billId_start: i + 1000,
          billId_current: i + 1020,
          region: ['America'],
          country: ['USA','Mexico'].sort((a, b) => .5 - Math.random())[0],
          state: ['Texas','Florida','Michigan'].sort((a, b) => .5 - Math.random())[0],
          section: ['Queens','Brookyn','Staten Island','Manhatten'].sort((a, b) => .5 - Math.random())[0],
          city: ['New York','Washington D.C.','Houston','Austin'].sort((a, b) => .5 - Math.random())[0],
          area: ['Ridgewood','Queens villege','Brownsville','Rossville'].sort((a, b) => .5 - Math.random())[0],
          subarea: ['Murdock','Hempstead Ave','93rd Ave','Jamaica Ave'].sort((a, b) => .5 - Math.random())[0],
          status: ['active', 'inactive'].sort((a, b) => .5 - Math.random())[0],
          utility: ['Infra mark'],
          skill: ['Meter Reading','Installation'].sort((a, b) => .5 - Math.random())[0],
          channel: ['PayTm','Phonpe','Google Pay','PayU'].sort((a, b) => .5 - Math.random())[0],
          mode: ['Cash','Digital','Cheque','DD'].sort((a, b) => .5 - Math.random())[0],
          billPeriod: "27 Nov 2019 to 03 Mar 2020",
          created_by:'Admin',
          module:['Registration'],
          format:['INFRA,BEECH'].sort((a, b) => .5 - Math.random())[0],
          prefix:['Yes'].sort((a, b) => .5 - Math.random())[0],
          billAmount:500,
          description:['Lorem ipsum'],
          tender_name:'Tender Name ' + i,
          contract_name:'Contract Name ' + i,
          provider:'provider '+i,
          services:'service '+i,
          frequency:'frequency '+i,
          date: new Date(),
        }
      );
      this.adjustbilltype = this.fb.group({            
        billtype: '',
        });
 
    this.dtOptions2 = {
      pageLength: 12,
    };
    }

    this.paymode = this.fb.group({            
      paymodetype: 'cash',
    });
    }
    
  
    ngOnInit(): void {
      this.selectedStatus = this.status[0]
      this.selectedDepartment = this.department[0]
      this.selectedDepartment1 = this.department1[0]
      this.selectedDepartment2 = this.department2[0]
      
     
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

    onTypeAdd(){
      // this.states.data.push(
      //   {
      //     state : this.state
      //   }
      // );
      this.typeToast = true;
    }

    onSubTypeAdd(){
      // this.states.data.push(
      //   {
      //     state : this.state
      //   }
      // );
      this.subTypeToast = true;
    }

    onSkillAdd(){
      // this.states.data.push(
      //   {
      //     state : this.state
      //   }
      // );
      this.skillToast = true;
    }
  }

  


