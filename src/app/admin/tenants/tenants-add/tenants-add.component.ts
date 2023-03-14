import { Component, OnInit } from '@angular/core';
import { faPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-tenants-add',
  templateUrl: './tenants-add.component.html',
  styleUrls: ['./tenants-add.component.scss']
})
export class TenantsAddComponent implements OnInit {

  model: NgbDateStruct;
  disabled = false;
  faCalendarAlt = faCalendarAlt;
  faPlus = faPlus;

  ufirstName = 'Contract XYZWS';
  uMiddleName = '';
  uLastName = 'Doe';
  uemail = 'thomas15@gmail.com';
  state = 'New York';
  postal = '2314650';
  uContact = '+91 965030303'; 
  bankName = ''; 
  accountNo = ''; 
  ifscCode = ''; 
  panNo = ''; 
  documentName = ''; 
  documentNumber = '';

  selectedCity: string[];
  selectedSkills: string[];
  selectedArea: string[];
  selectedSubArea: string[];
  selectedDocumentType: string[];
  selectedType = 'Sub Type XY';
  selectedSubType = 'Sub Type XY';
  selectedFormFactor: any;
  selectedRole: any;
  selectedBank: any;
  selectedCategory: any;
  $scope;size=10;

  showtoast = false;
  autohide = true;

  public userDetailCollapse = false;
  public userBankDetailCollapse = true;
  public userDocsCollapse = true;
  public userPrivillagesCollapse = true;
  
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };  

  city= [
    {id: 1, name: 'Pune'},
    {id: 2, name: 'Mumbai'},
    {id: 3, name: 'Nashik'},
  ];
  bank= [
    {id: 1, name: 'HDFC'},
    {id: 2, name: 'ICICI'},
  ];
  skills= [
    {id: 1, name: 'Electrician'},
    {id: 2, name: 'Driver'},
  ];
  area= [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
  ];
  subarea= [
    {id: 1, name: 'Sub Area 1'},
    {id: 2, name: 'Sub Area 2'},
  ];
  type= [
    {id: 1, name: 'Sub Type XY'},
    {id: 2, name: 'Type 2'},
    {id: 3, name: 'Type 3'},
  ];
  subType= [
    {id: 1, name: 'Sub Type XY'},
    {id: 2, name: 'Sub Type 2'},
    {id: 3, name: 'Sub Type 3'},
  ];
  category= [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    {id: 3, name: 'Category 3'},
  ];
  formFactor= [];
  role= [];
  documentType= [
    {id: 1, name: 'Personal details'},
    {id: 2, name: 'Address details'},
  ];

  selectedStatus: 'View';
  status = [
    {id: 1, status: 'View'},
    {id: 2, status: 'Edit'},
  ];

  constructor() { }

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
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
        $('a[data-toggle="tab"]').parent(".list-group-item").removeClass("active").removeClass("finished");
      })
      $('#general-dtls-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab               
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#subs-and-utility-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working2'); 
        $('#general-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#super-admin-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working3');
        $('#general-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#subs-and-utility-tab').parent(".list-group-item").removeClass("active").addClass("finished"); 
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#user-privillages-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#general-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#subs-and-utility-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#super-admin-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });
      $("#proceed_subs_utility").on('click', function(){
        $('#subs-and-utility-tab').trigger( "click" );
      });
      $("#proceed_super_admin").on('click', function(){
        $('#super-admin-tab').trigger( "click" );
      });
      $("#proceed_user_done").on('click', function(){
        console.log("end-of-form");
      });

      setTimeout(function(){
      }, 5000);
    });  
    
  }

  public subscribed:boolean = true;
  toggleSubscribed() {
    this.subscribed = !this.subscribed;
  }

  public leftCardHovered:boolean = true;
  public centerCardHovered:boolean = true;
  public rightCardHovered:boolean = true;
  leftHovered() {
    this.leftCardHovered = false;
    this.centerCardHovered = false;
  }
  leftNotHovered() {
    this.leftCardHovered = true;
    this.centerCardHovered = true;
  }
  rightHovered() {
    this.rightCardHovered = false;
    this.centerCardHovered = false;
  }
  rightNotHovered() {
    this.rightCardHovered = true;
    this.centerCardHovered = true;
  }

}
