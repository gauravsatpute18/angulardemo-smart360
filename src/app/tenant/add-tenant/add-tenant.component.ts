import { Component, OnInit } from '@angular/core';
import { faPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.scss']
})
export class AddTenantComponent implements OnInit {

  model: NgbDateStruct;
  disabled = false;
  faCalendarAlt = faCalendarAlt;
  faPlus = faPlus;

  ufirstName = 'John';
  uMiddleName = 'Sam';
  uLastName = 'Doe';
  uemail = 'jhon@125gmail.com';
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
  selectedType: any;
  selectedSubType: any;
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
    {id: 1, name: 'Type 1'},
    {id: 2, name: 'Type 2'},
    {id: 3, name: 'Type 3'},
  ];
  subType= [
    {id: 1, name: 'Sub Type 1'},
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
      $('#user-bank-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working2'); 
        $('#general-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#user-docs-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working3');
        $('#general-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#user-bank-tab').parent(".list-group-item").removeClass("active").addClass("finished"); 
        $(this).parent(".list-group-item").addClass("active");
      });
      // $('#user-privillages-tab').on('shown.bs.tab', function(e) {
      //   e.target // newly activated tab
      //   // alert('working4');
      //   $('#general-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
      //   $('#user-bank-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
      //   $('#user-docs-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
      //   $(this).parent(".list-group-item").addClass("active");
      // });
      $("#proceed_user_bank").on('click', function(){
        $('#user-bank-tab').trigger( "click" );
      });
      $("#proceed_user_docs").on('click', function(){
        $('#user-docs-tab').trigger( "click" );
      });
      $("#proceed_user_privillages").on('click', function(){
        $('#user-privillages-tab').trigger( "click" );
      });
      setTimeout(function(){
      }, 5000);
    });
  }

}
