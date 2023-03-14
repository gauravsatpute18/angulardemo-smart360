import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint ,faTimesCircle, faEye, faPlus, faFileCsv, faFileExcel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'smart360-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
   
  faTimesCircle = faTimesCircle;
  faMapMarkerAlt =  faMapMarkerAlt;
  faPrint = faPrint;
  faEye = faEye;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faPen = faPen;
  faPlus = faPlus;
  faFileCsv = faFileCsv;
  faFileExcel = faFileExcel;

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedUtility= 'Beechnut Mud';
  utility = [
    {id: 1, utility: 'Beechnut Mud'},
    {id: 2, utility: 'OTHER'},
  ];  

  selectedSkills: any;
  skill = [
    {id: 1, skill: 'ELECTRICIAN'},
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

  selectedDocType = 'Personal ID';
  docType = [
    {id: 1, name: 'Personal ID'},
    {id: 2, name: 'Address Proof'},
    {id: 3, name: 'Bank Passbook'},  
  ];
  
  selectedType: any;
  type = [
    {id: 1, type: 'Type 1'},
    {id: 2, type: 'Type 2'},
    {id: 3, type: 'Type 3'},
  ];

  selectedSubType: any;
  subtype = [
    {id: 1, stype: 'Sub Type 1'},
    {id: 2, stype: 'Sub Type 2'},
    {id: 3, stype: 'Sub Type 3'},
  ];

  selectedFactor: any;
  formfactor = [
    {id: 1, factor: 'Form Factor 1'},
    {id: 2, factor: 'Form Factor 2'},
    {id: 3, factor: 'Form Factor 3'},
  ];

  selecteddepartment: any;
  department = [
    {id: 1, dept: 'Department 1'},
    {id: 2, dept: 'Department 2'},
    {id: 3, dept: 'Department 3'},
  ];

  selectedModule = 'S&M';
  module = [
    {id: 1, module1: 'S&M'},
    {id: 2, module1: 'Operations'},
    {id: 3, module1: 'Consumer'},
  ];

  selectedStatus: 'View';
  status = [
    {id: 1, status: 'View'},
    {id: 2, status: 'Edit'},
  ];

  selectedStatus1: 'View';
  status1 = [
    {id: 1, status1: 'View'},
    {id: 2, status1: 'Edit'},
  ];

  selectedStatus2: 'View';
  status2 = [
    {id: 1, status2: 'View'},
    {id: 2, status2: 'Edit'},
  ];

  selectedStatus3: 'View';
  status3 = [
    {id: 1, status3: 'View'},
    {id: 2, status3: 'Edit'},
  ];

  selectedStatus4: 'View';
  status4 = [
    {id: 1, status4: 'View'},
    {id: 2, status4: 'Edit'},
  ];

  constructor() { }

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
  

}
