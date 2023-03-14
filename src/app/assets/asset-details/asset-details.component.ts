import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faFilePdf,faMapMarkerAlt, faPrint ,faTimesCircle, faEye, faPlus, faFileCsv, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'smart360-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {

  faTimesCircle = faTimesCircle;
  faMapMarkerAlt =  faMapMarkerAlt;
  faPrint = faPrint;
  faEye = faEye;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faPen = faPen;
  faPlus = faPlus;
  faFilePdf = faFilePdf;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;

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

  public showskill:boolean = false;
  addskills() {
    this.showskill = !this.showskill;
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
          Id: '0'+i + 1,    
          service_no: i+ 98754,
          category:'Industrial',
          subcategory:'Industrial 1',
          date:new Date(),
          status: ['Complate', 'In_progress'].sort((a, b) => .5 - Math.random())[0],
          duration:'2 Days',

          asset_val:'20,15,'+i,
          dept_method:'Quaterly',
          dept_rate:'12 % p.a',
          install_date:new Date(),
          life:'4 Year',
          current_val:'1250.00',
          main_cost:'780.00',
        }
      );
    }
  }

}

