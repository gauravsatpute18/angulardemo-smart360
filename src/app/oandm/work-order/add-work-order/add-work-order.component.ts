import { Component, OnInit } from '@angular/core';
import { faPlus, faTrash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-add-work-order',
  templateUrl: './add-work-order.component.html',
  styleUrls: ['./add-work-order.component.scss']
})
export class AddWorkOrderComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};   
  disabled = false;

  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPlus = faPlus;

  selectedCity: string[];
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

  show2 = false;
  autohide2 = true;

  public workOrderCollapse = false;
  public workTaskCollapse = true;
  public workProductCollapse = true;
  public workReadingCollapse = true;
  
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
  skills= [
    {id: 1, name: 'Electrician'},
    {id: 2, name: 'Driver'},
  ];
  area= [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
  ];
  type= [];
  subType= [];
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

  selectedAssets: any;
  assets = [
    {id: 536289, asts: '536289', meterimg: '../../assets/images/meter-read.png', statusBadge: 'badge-finished', status: 'finished', locn: 'Location Lorem '},
    {id: 536288, asts: '536289', meterimg: '../../assets/images/meter-read.png', statusBadge: 'badge-finished', status: 'finished', locn: 'Location Lorem '},
    {id: 536287, asts: '536289', meterimg: '../../assets/images/meter-read.png', statusBadge: 'badge-unfinished', status: 'unfinished', locn: 'Location Lorem '}
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
      $('#add-work-order-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab               
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#work-tasks-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working2'); 
        $('#add-work-order-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#work-products-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working3');
        $('#add-work-order-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#work-tasks-tab').parent(".list-group-item").removeClass("active").addClass("finished"); 
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#work-reading-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#add-work-order-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#work-tasks-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#work-products-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });
      $("#proceed_user_bank").on('click', function(){
        $('#work-tasks-tab').trigger( "click" );
      });
      $("#proceed_user_docs").on('click', function(){
        $('#work-products-tab').trigger( "click" );
      });
      $("#proceed_user_privillages").on('click', function(){
        $('#work-reading-tab').trigger( "click" );
      });
      $("#proceed_user_done").on('click', function(){
        console.log("end-of-form");
      });

      setTimeout(function(){
      }, 5000);
    });  
    
  }


}
