import { Component, OnInit } from '@angular/core';
import { faChevronLeft,faCalendarAlt, faChevronRight,faEye , faPen,faFileCsv, faMapMarkerAlt, faFileExcel, faPrint, faFilePdf, faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-survey-location-details',
  templateUrl: './survey-location-details.component.html',
  styleUrls: ['./survey-location-details.component.scss']
})
export class SurveyLocationDetailsComponent implements OnInit {

  model: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  faCalendarAlt = faCalendarAlt;
  date: {year: number, month: number}; 
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPen = faPen;
  faFileCsv = faFileCsv;
  faMapMarkerAlt = faMapMarkerAlt;
  faPrint = faPrint;
  faFileExcel = faFileExcel;
  faFilePdf= faFilePdf;
  faEye =faEye ; 
  faPlus = faPlus;

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedDocumentType ='Personal ID';
  documentType= [
    {id: 1, name2: 'Personal ID'},
    {id: 2, name2: 'Bank Passbook'},
  ];

  selectedDocType = 'Personal ID';
  docType = [
    {id: 1, name: 'Personal ID'},
    {id: 2, name: 'Bank Passbook'},
    {id: 3, name: 'Address Proof'},  
  ];

  selectedAmount = 'Above 10000';
  amount = [
    {id: 1, amnt: 'Above 10000'},
    {id: 2, amnt: 'Above 15000'},
    {id: 3, amnt: 'Above 20000'},  
  ];

  selectedCategory = 'Category 1';
  category = [
    {id: 1, catg: 'Category 1'},
    {id: 2, catg: 'Category 2'},
    {id: 3, catg: 'Category 3'},  
  ];

  selectedutility = 'Utility 1';
  utility = [
    {id: 1, name: 'Utility 2'},
    {id: 2, name: 'Utility 2'},
    {id: 3, name: 'Utility 3'},  
  ];

  constructor() {}

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
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
    $(document).ready(function(){
      // notes remove from list
      $('.notes-card-wrap .notes-card .close').click(function (e) {
        e.preventDefault();
        $(this).parents('.notes-card-wrap .list-group-item').remove();
      });
      // to prevent dropdown close on selecting color
      $(document).on('click', '.dot-option-dropdown .dropdown-menu', function(e){ 
        e.stopPropagation(); 
      }); 
    });
  }

  public show:boolean = false;
  toggle() {
    this.show = !this.show;
  }

  public showUpload:boolean = false;
  toggleUpload() {
    this.showUpload = !this.showUpload;
  }

}
