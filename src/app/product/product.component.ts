import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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

  selected;
  selectedPagination:any;
  pagination = [
    {id: 1, name: '50'},
    {id: 2, name: '100'},
    {id: 3, name: '200'},
  ];

  selectedType:any;
  type = [
    {id: 1, name: 'Domestic 1'},
    {id: 2, name: 'Domestic 2'},
  ];


  selectedUtility: any;
  utility = [
    {id: 1, name: 'utility 1'},
    {id: 2, name: 'utility 2'},
  ];

  selectedSupplier:any;
  supplier = [
    {id: 1, name: 'Supplier 1'},
    {id: 2, name: 'Supplier 2'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
  ];

  selectedSubCategory: any;
  subCategory = [
    {id: 1, name: 'subCategory 1'},
    {id: 2, name: 'subCategory 2'},
  ];

  selectedCity: any;
  city = [
    {id: 1, name: 'city 1'},
    {id: 2, name: 'city 2'},
  ];

  selectedArea: any;
  area = [
    {id: 1, name: 'area 1'},
    {id: 2, name: 'area 2'},
  ];

  selectedSubArea: any;
  subArea = [
    {id: 1, name: 'subArea 1'},
    {id: 2, name: 'subArea 2'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];

  selectedDepartment:any;
  dept = [
    {id: 1, name: 'Dept 1'},
    {id: 2, name: 'Dept 2'},
  ];


  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          tenant: "Tenant " + (i + 1),          
          no: "0015" + (i + 1),
          utility: "Gas",
          status: ['rejected', 'success', 'warning', 'unfinished'].sort((a, b) => .5 - Math.random())[0],
          mobile: "+91 145 546 785" + (i + 1),
          email: "frank@gmail.com",
          area: "New Jersey",
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
