import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faMapMarkerAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye,faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-add-survey-location',
  templateUrl: './add-survey-location.component.html',
  styleUrls: ['./add-survey-location.component.scss']
})
export class AddSurveyLocationComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;
  
  surveyName = '';
  // toaster
  showtoast = false; 
  autohide = true;

  public surveyDetailsCollapse = false;
  public assignVendorCollapse = true;

  selectedSurveyType : any; 
  selectedSurveyObj : any;
  selectedUtility: any;
  selectedCity: any;
  selectedArea: any;
  selectedSubArea: any;
  selectedCategory:any;

  surveyType = [
    {id: 1, srvy: 'Type 1'},
    {id: 2, srvy: 'Type 2'},
  ];
  surveyObj = [
    {id: 1, name1: 'Objective X'},
    {id: 2, name1: 'Objective Y'},
  ];
  selectedPagination:any;
  pagination = [
    {id: 1, name: '10'},
    {id: 2, name: '20'},
  ];
  area = [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
    {id: 3, name: 'Area 3'},
  ];
  subarea = [
    {id: 1, name: 'Sub Area 1'},
    {id: 2, name: 'Sub Area 2'},
    {id: 3, name: 'Sub Area 3'},
  ];
  category=[
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    {id: 3, name: 'Category 3'},
  ];
  utility=[
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
    {id: 3, name: 'Utility 3'},
  ];
  city=[
    {id: 1, name: 'Chicago'},
    {id: 2, name: 'Boston'},
    {id: 3, name: 'Houston'},
  ];

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };


  files: File[] = []; 
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  constructor() { }
  
  // toaster    
  close() {
    this.autohide = false;
    // setTimeout(() => this.autohide = true, 5000);
  }
  addCustomUser = (term) => ({id: term, name: term});


  ngOnInit(): void { 
  
    $(document).ready(function(){
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target
        $('a[data-toggle="tab"]').parent(".list-group-item").removeClass("active").removeClass("finished");
      })
      $('#survey-dtls-tab').on('shown.bs.tab', function(e) {  
        e.target
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#survey-assgnvendor-tab').on('shown.bs.tab', function(e) {
        e.target
        $('#survey-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#location-survey-rvw-sbmt-tab').on('shown.bs.tab', function(e) {
        e.target
        $('#survey-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#survey-assgnvendor-tab').parent(".list-group-item").removeClass("active").addClass("finished");             
        $(this).parent(".list-group-item").addClass("active");
      });


      $("#proceed_assgnvendor").on('click', function(){
        $('#survey-assgnvendor-tab').trigger( "click" );
      });
      $("#survey_vendor_assign").on('click', function(){
        $('#location-survey-rvw-sbmt-tab').trigger( "click" );
      });
      $("#location-survey-priview").on('click', function(){
        console.log("end-of-form");
      });
      setTimeout(function(){
      }, 5000);
    });
    
  }

}
  