import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'smart360-add-user-details',
  templateUrl: './add-user-details.component.html',
  styleUrls: ['./add-user-details.component.scss']
})
export class AddUserDetailsComponent implements OnInit {

  disabled = false;

  faPlus = faPlus;

  ufirstName = 'John';
  uMiddleName = 'Sam';
  uLastName = 'Doe';
  uemail = 'jhon@125gmail.com'
  uContact = '201-285-6456'; 
  bankName = ''; 
  accountNo = ''; 
  ifscCode = ''; 
  panNo = ''; 
  documentName = ''; 
  documentNumber = '';

  selectedCity: string[];
  selectedutility: string[];
  selectedmodule: string[];
  selectedSkills: string[];
  selectedArea: string[];
  selectedDocumentType: string[];
  selectedType: any;
  selectedSubType: any;
  selectedFormFactor: any;
  selectedRole: any;
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
    {id: 1, name: 'New York'},
    {id: 2, name: 'Chicago'},
    {id: 3, name: 'Boston'},
  ];
  skills= [
    {id: 1, name: 'Electrician'},
    {id: 2, name: 'Driver'},
  ];
  area= [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
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
  formFactor= [
    {id: 1, name: 'Form Factor 1'},
    {id: 2, name: 'Form Factor 2'},
    {id: 3, name: 'Form Factor 3'},
  ];
  role= [
    {id: 1, name: 'Marketing Manager'},
    {id: 2, name: 'Vendor'},
    {id: 3, name: 'Supervisor'},
  ];
  documentType= [
    {id: 1, name: 'Personal ID'},
    {id: 2, name: 'Address Proof'},
    {id: 3, name: 'Bank Passbook'},
  ];
  utility= [
    {id: 1, name: 'Utility  1'},
    {id: 2, name: 'Utility  2'},
    {id: 3, name: 'Utility  3'},
  ];
  module= [
    {id: 1, name: 'Registration'},
    {id: 2, name: 'Consumer Ops'},
    {id: 3, name: 'Consumer Care'},
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
      $('#user-dtls-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab               
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#user-bank-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working2'); 
        $('#user-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#user-docs-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working3');
        $('#user-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#user-bank-tab').parent(".list-group-item").removeClass("active").addClass("finished"); 
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#user-privillages-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#user-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#user-bank-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#user-docs-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });

      $('#user-rvw-sbmt-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#user-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#user-bank-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#user-docs-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#user-privillages-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });

      $("#proceed_user_bank").on('click', function(){
        $('#user-bank-tab').trigger( "click" );
      });
      $("#proceed_user_docs").on('click', function(){
        $('#user-docs-tab').trigger( "click" );
      });
      $("#proceed_user_privillages").on('click', function(){
        $('#user-privillages-tab').trigger( "click" );
      });
      $("#proceed_user_done").on('click', function(){
        $('#user-rvw-sbmt-tab').trigger( "click" );
      });
      $("#user-priview").on('click', function(){
        console.log("end-of-form");
      });

      setTimeout(function(){
      }, 5000);
    });  
    
  }

}
