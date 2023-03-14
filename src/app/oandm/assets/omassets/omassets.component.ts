import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye,faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'smart360-omassets',
  templateUrl: './omassets.component.html',
  styleUrls: ['./omassets.component.scss']
})
export class OmassetsComponent implements OnInit {

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
  faPlus=faPlus;

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

  // selectedDateRange: any;
  // dateRange = [
  //   {id: 1, name: 'dateRange 1'},
  //   {id: 2, name: 'dateRange 2'},
  // ];

  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          MRcycle: i,
          name: "Name" + (i + 1),
          enquiryNo: "0019924" + i,
          status: ['partial', 'complete', 'dispatched','started','notdispatched'].sort((a, b) => .5 - Math.random())[0],
          mobileNo: "+91 9849163057",
          MRportion: "Old Alwal",
          consumer:"1350",
          MRU:"30",
          raisedOn: new Date(),
          startDate: new Date(),
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
  // onPageChange(event) {
  //   console.log(event);
  //   this.config.currentPage = event;
  // }


}
