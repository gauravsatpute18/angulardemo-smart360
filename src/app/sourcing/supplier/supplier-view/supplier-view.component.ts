import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faCalendarAlt,faFilePdf,faMapMarkerAlt, faPrint ,faTimesCircle, faEye, faPlus, faFileCsv, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent implements OnInit {

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

  selectedPagination:any;
  pagination = [
    {id: 1, name: '50'},
    {id: 2, name: '100'},
    {id: 3, name: '200'},
  ];

  selectedName = 'Passport';
  name = [
    {id: 1, nme: 'Passport'},
    {id: 2, nme: 'Aadhar card'},
  ];

    selectedUser = 'User 1';
  user = [
    {id: 1, user: 'User 1'},
    {id: 2, user: 'User 2'},
    {id: 3, user: 'User 3'},  
  ];

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedUtility= 'MNGL';
  utility = [
    {id: 1, utility: 'MNGL'},
    {id: 2, utility: 'OTHER'},
  ];  

  selectedSkills: any;
  skill = [
    {id: 1, skill: 'ELECTRICIAN'},
    {id: 2, skill: 'Driver'},
    {id: 3, skill: 'Lorem ipsum lorem'},
    {id: 4, skill: 'Lorem'},
    {id: 5, skill: 'Lorem ipsum'},
    {id: 6, skill: 'Driver'},
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
    {id: 3, name: 'Aadhar card'},  
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
  ];

  selectedmode:"Digital";
  mode = [
    {id : 1, mode:'Digital'}
  ];

  selectedProduct:"Lorem ipsum";
  product = [
    {id : 1, name:'Lorem ipsum'}
  ];

  selectedRate:"$ 45 Days";
  rate = [
    {id : 1, name:'$ 45 Days'}
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

  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          name: "Lorem ipsum" + (i + 1),
          invoice_no: "01589" + (i),  
          amount : "$ " +"" + 500,
          date: new Date(),
          due_date:new Date(),
          supplier_name: "Thomas Shelby",
          status: ['finished', 'pending'].sort((a, b) => .5 - Math.random())[0],


          payment_no:"011589" + i,
          mode:"Digital",

          type:"Service",
          demand:"Asset XY",

          product_no:"P12466"+i,
          product_name:"Lorem ipsum dolor",
          sub_type:"Lorem ipsum",
          rate:"$ 45 Days",

          service_no:"015896"+i,
          service:"Plumber",
          service_type:"Maintainace",
        }
      );
    }
  }

  renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
  }

}

