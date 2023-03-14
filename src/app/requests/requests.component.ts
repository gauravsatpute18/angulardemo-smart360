import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

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

  selectedtype:any;
  type = [
    {id: 1, name: 'Domestic 1'},
    {id: 2, name: 'Domestic 2'},
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


  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];

  selectedMru:any;
  mru=[
    {id: 1, name: 'MRU 1'},
    {id: 2, name: 'MRU 2'},
  ];
  selectedsubArea:any;
  subarea = [
    {id: 1, name: 'Sub Area 1'},
    {id: 2, name: 'Sub Area 2'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'utility 1'},
    {id: 2, name: 'utility 2'},
  ];


  selectedstype:any;
  catg = [
    {id: 1, catg: 'Type 1'},
    {id: 2, catg: 'Type 2'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
  ];


  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          request_no: "00945" + (i + 1),
          requestor: "Name" + (i + 1),
          qty: i + 1,
          department: "Department" + (i + 1),
          project: "Project" + (i + 1),
          status: ['danger', 'success', 'warning'].sort((a, b) => .5 - Math.random())[0],
          request_date: new Date(),
          type:"Type 1",
          sub_type:"Sub Type 1",
          area:"Area 1",
          sub_area:"Sub Area 1"

        }
      );
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
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
