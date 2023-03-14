import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-survey-location',
  templateUrl: './survey-location.component.html',
  styleUrls: ['./survey-location.component.scss']
})
export class SurveyLocationComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  model: NgbDateStruct;
  date: {year: number, month: number}; 

  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;


  selectedUtility: any;
  utility = [
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
  ];

  selectedPagination:any;
  pagination = [
    {id: 1, name: '100'},
    {id: 2, name: '200'},
  ];

  selectedType:any;
  type = [
    {id: 1, name: 'Domestic 1'},
    {id: 2, name: 'Domestic 2'},
  ];

  selectedVendor:any;
  vendor = [
    {id: 1, name: 'Vendor 1'},
    {id: 2, name: 'Vendor 2'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
  ];

  selectedSubCategory: any;
  subCategory = [
    {id: 1, name: 'SubCategory 1'},
    {id: 2, name: 'SubCategory 2'},
  ];

  selectedCity: any;
  city = [
    {id: 1, name: 'Boston'},
    {id: 2, name: 'Chicago'},
  ];

  selectedArea: any;
  area = [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
  ];

  selectedSubArea: any;
  subArea = [
    {id: 1, name: 'SubArea 1'},
    {id: 2, name: 'SubArea 2'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'New'},
    {id: 2, name: 'Pending'},
    {id: 3, name: 'Rejected'},
    {id: 4, name: 'Finished'},
  ];

  collection = { count: 54, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          name: 'Survey X',
          //creator: ['Michael', 'Scottie', 'Dennis'].sort((a, b) => .5 - Math.random())[0],
          surveyID: 103263 + i,
          status: ['pending', 'finished', 'new'].sort((a, b) => .5 - Math.random())[0],
          city: "Chicago",
          area:"Area 1",
          __type: "Domestic",
          vendor: ['Milhouse', 'Bart', 'Lisa'].sort((a, b) => .5 - Math.random())[0],
          startDate: new Date(1) , 
          endDate: new Date() ,
        }
      );
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
    };
  }

  renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
  }


}
