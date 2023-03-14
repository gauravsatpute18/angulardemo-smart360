import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faCalendarAlt,faFilePdf,faMapMarkerAlt, faPrint ,faTimesCircle, faEye, faPlus, faFileCsv, faStar, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'smart360-smconsumer-view',
  templateUrl: './smconsumer-view.component.html',
  styleUrls: ['./smconsumer-view.component.scss']
})
export class SmconsumerViewComponent implements OnInit {

  model: NgbDateStruct;
  model2: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  faTimesCircle = faTimesCircle;
  faMapMarkerAlt =  faMapMarkerAlt;
  faPrint = faPrint;
  faEye = faEye;
  faFilePdf = faFilePdf;
  faChevronRight = faChevronRight;
  faCalendarAlt = faCalendarAlt;
  faChevronLeft = faChevronLeft;
  faPen = faPen;
  faPlus = faPlus;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;
  faStar = faStar;

  
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedUtility= 'Beechnut Mud';
  utility = [
    {id: 1, utility: 'Beechnut Mud'},
    {id: 2, utility: 'Other'},
  ];  

  selectedPagination:any;
  pagination = [
    {id: 1, name: '10'},
    {id: 2, name: '20'},
  ];

  selectedSkills: any;
  skill = [
    {id: 1, skill: 'Electrician'},
    {id: 2, skill: 'Driver'},
  ];  

  selectedAreas: any;
  areas = [
    {id: 1, area: 'Area 1'},
    {id: 2, area: 'Area 2'},
    {id: 3, area: 'Area 3'},
    {id: 4, area: 'Area 4'},
    {id: 5, area: 'Area 5'},
  ];

  selectedDocType = 'Address';
  docType = [
    {id: 1, name: 'Passport'},
    {id: 2, name: 'Address'},
    {id: 3, name: 'Aadhaar card'},  
  ];
  
  selectedType: any;
  type = [
    {id: 1, type: 'Operator'},
    {id: 2, type: 'Vendor'},
    {id: 3, type: 'Sales & Marketing'},
  ];

  selectedAmount = 'Above 10000'
  amount = [
    {id: 1, name: 'Above 1000'},
    {id: 2, name: '20000'},
    {id: 3, name: '50000'},
  ];

  selectedServiceType = 'Maintenance 1'
  service_type = [
    {id: 1, name: 'Maintenance 1'},
    {id: 2, name: 'Maintenance 2'},
    {id: 3, name: 'Maintenance 3'},
  ];

  selectedModule = 'S&M';
  module = [
    {id: 1, module1: 'S&M'},
    {id: 2, module1: 'Operations'},
    {id: 3, module1: 'Consumer'},
  ];

  selectedStatus: 'View';
  status = [
    {id: 1, status1: 'View'},
    {id: 2, status1: 'Edit'},
  ];
  selectedDocuments:'Electricity Bill';
  doc = [

    {id : 1, name:'Electricity Bill'}
  ]

  reqsrvc:any = true;
  proceedreqsrvc() {
    this.reqsrvc = !this.reqsrvc;
  }



  files: File[] = []; 
  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
  }
  onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
  ngOnInit(): void {

    $(document).ready(function(){

      $("#addskill").on('click', function(){
        $('#show').trigger( "click" );
      });

      $('.skills-wrap .tag > a').click(function (e) {
        e.preventDefault();
        $(this).parents('.skills-wrap .tag').remove();
      });

      $('.notes-card-wrap .notes-card .close').click(function (e) {
        e.preventDefault();
        $(this).parents('.notes-card-wrap .list-group-item').remove();
      });

      $(document).on('click', '.dot-option-dropdown .dropdown-menu', function(e){ 
        e.stopPropagation(); 
      }); 

    });
    
  }

  public show:boolean = false;
  public buttonName: any;
  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  public showskills:boolean = false;
  addSkills() {
    this.showskills = !this.showskills;
  }
  public showUpload:boolean = false;
  toggleUpload() {
    this.showUpload = !this.showUpload;
  }

  collection = { count: 15, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          Id: i + 32151,
          billId: i + 56378848,
          billMonth: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'December'].sort((a, b) => .5 - Math.random())[0],
          billAmount: "$ "+i+"656",
          billDue: new Date(),
          status: ['paid', 'unpaid'].sort((a, b) => .5 - Math.random())[0],

          requestId: i+ 98754,
          service:'plumber',
          serviceType:'Maintenance',
          raisedOn:'20 May 20',
          resolvedOn:'30 Jun 20',
          service_status: ['Active', 'Expired'].sort((a, b) => .5 - Math.random())[0],
          mobile_no:"201-285-6456",
          area:"Area 1",
          sub_area:"SubArea 1",

          recipt_no: "015890" + i,
          payment_mode:['Paytm', 'Phone Pay', 'Bhim UPI'].sort((a, b) => .5 - Math.random())[0],

          complaint:"plumber",
        }
      );
    }
  }

}

