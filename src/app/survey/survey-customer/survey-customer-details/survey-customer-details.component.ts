import { Component, OnInit } from '@angular/core';
import { faChevronLeft,faCalendarAlt, faChevronRight,faEye , faPen, faFileCsv, faMapMarkerAlt, faFileExcel, faPrint, faFilePdf, faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-survey-customer-details',
  templateUrl: './survey-customer-details.component.html',
  styleUrls: ['./survey-customer-details.component.scss']
})
export class SurveyCustomerDetailsComponent implements OnInit {

  model: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  date: {year: number, month: number}; 

  faCalendarAlt = faCalendarAlt;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPen = faPen;
  faFileCsv = faFileCsv;
  faMapMarkerAlt = faMapMarkerAlt;
  faPrint = faPrint;
  faFileExcel = faFileExcel;
  faFilePdf= faFilePdf;
  faEye = faEye ; 
  faPlus = faPlus;

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedAmount:any;
  amount = [
    {id: 1, amount: '500'},
    {id: 2, amount: '5872'},
    {id: 3, amount: '9803'},  
  ];

  selectedCategory = 'Category 1';
  category = [
    {id: 1, catg: 'Category 1'},
    {id: 2, catg: 'Category 2'},
    {id: 3, catg: 'Category 3'},  
  ];

  selectedPagination:any;
  pagination = [
    {id: 1, name: '10'},
    {id: 2, name: '20'},
  ];

  selectedutility = 'Utility 1';
  utility = [
    {id: 1, name: 'Utility 2'},
    {id: 2, name: 'Utility 2'},
    {id: 3, name: 'Utility 3'},  
  ];

  collection = { count: 60, data: [] };

  constructor (private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          billId: i + 56378848,
          billMonth: ['James', 'Smith', 'Michael', 'Maria', 'Robert', 'Mary'].sort((a, b) => .5 - Math.random())[0],
          billPeriod: "27 Nov 2019 to 03 Mar 2020",
          billDue: new Date(),
          status: ['Finished', 'Unfinished'].sort((a, b) => .5 - Math.random())[0],
          billAmount:'500',
        }
      );
    }
  };

  ngOnInit(): void {
    this.dtOptions = {
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
  };

}
