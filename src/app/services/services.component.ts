import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  model: NgbDateStruct;
  date: {year: number, month: number}; 
  selected;
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf; 
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;

  selectedPagination:any;
  pagination = [
    {id: 1, name: '50'},
    {id: 2, name: '100'},
    {id: 3, name: '200'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'utility 1'},
    {id: 2, name: 'utility 2'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
  ];

  selectedSubCategory: any;
  subCategory = [
    {id: 1, name: 'Sub Category 1'},
    {id: 2, name: 'Sub Category 2'},
  ];

  selectedCity: any;
  city = [
    {id: 1, name: 'City 1'},
    {id: 2, name: 'City 2'},
  ];

  selectedArea: any;
  area = [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
  ];

  selectedSubArea: any;
  subarea = [
    {id: 1, name: 'Sub Area 1'},
    {id: 2, name: 'Sub Area 2'},
  ];

  selectedType: any;
  type = [
    {id: 1, name: 'Type 1'},
    {id: 2, name: 'Type 2'},
  ];

  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          service_id: "0094" + (i + 1),
          name: "Name" + (i + 1),
          status: ['success', 'warning'].sort((a, b) => .5 - Math.random())[0],
          type: "Type" + (i + 1),
          qty: i + 1,
          category: "Category" + (i + 1),
          subcategory: "Sub Category" + (i + 1),
          date: new Date(),
        }
      );
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength:30
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
  }
  renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
  }


}
