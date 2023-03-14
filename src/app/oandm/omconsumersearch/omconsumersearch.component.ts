import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { faTrash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'smart360-omconsumersearch',
  templateUrl: './omconsumersearch.component.html',
  styleUrls: ['./omconsumersearch.component.scss']
})
export class OmconsumersearchComponent implements OnInit {

  selectedtype:any;
  type = [
    {id: 1, utilityName: 'Repair '},
    {id: 2, utilityName: 'Repair '},
  ];
  selectedpriority:any;
  priority = [
    {id: 1, utilityName: 'Emergency'},
    {id: 2, utilityName: 'Emergency'},
  ];
  selectedCity: any;
  City=[
    {id: 1, utilityName: ' '},
    {id: 2, utilityName: ' '},
  ];
  selectedArea: any;
  selectedSubArea: any;
  Area=[
    {id: 1, utilityName: ' '},
    {id: 2, utilityName: ' '},
  ];
  SubArea=[
    {id: 1, utilityName: ' '},
    {id: 2, utilityName: ' '},
  ];
  assets='';
  consumeraccount='';
  Duration='';

  
  constructor() { }

  // toaster
  showtoast = false; 
  autohide = true;
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  

  model: NgbDateStruct;
  date: {year: number, month: number}; 

  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;

  public applicantDetailsCollapse = false;
  public applicantPayCollapse = true;
  public applicantAddrsCollapse = true;
  public applicantKycCollapse = true;

  


  changeFn(val){
    console.log(val);
  }
 

 
  
  // toaster


  close() {
    this.autohide = false;
    // setTimeout(() => this.autohide = true, 5000);
  }
  addCustomUser = (term) => ({id: term, name: term});


  ngOnInit(): void { 
  
    
    
  }

}
