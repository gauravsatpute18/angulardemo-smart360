import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faPen,faEye ,faPlus} from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-meterdatalist',
  templateUrl: './meterdatalist.component.html',
  styleUrls: ['./meterdatalist.component.scss']
})
export class MeterdatalistComponent implements OnInit {
  selected;
  selected1;
  selected2;
  selected3;
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
  faPen=faPen;
  selectedMru:any;
  mru=[
    {id: 1, name: 'MRU 1'},
    {id: 2, name: 'MRU 2'},
  ];

  selectcity: any;
  cityoption=[
    {id: 1, name: 'Old alwal'},
    {id: 2, name: 'city 2'},
  ];


  selectedUtility: any;
  utility = [
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
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
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
  ];

  selectedCycle:any;
  cycle = [
    {id: 1, name: '01'},
    {id: 2, name: '02'},
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

  selectedcategory: any;
  category1 = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category1 2'},
  ];
 
  selectedAreasub:any;
  subarea = [
    {id: 1, name: 'Sub Area 1'},
    {id: 2, name: 'Sub Area 2'},
  ];
  selectedsubcategory: any;
  subcategory1 = [
    {id: 1, name: 'subcategory 1'},
    {id: 2, name: 'subcategory 2'},
  ];

  selectedstype: any;
  stype = [
    {id: 1, name: 'Manual'},
    {id: 2, name: 'Photo Meter Reading'},
    {id: 3, name: 'Smart Meter Reading/ AMR'},
  ];
  selectedatype: any;
  atype = [
    {id: 1, name: 'Type 1 '},
    {id: 2, name: 'Type 2'},
  ];
  selectedbillcycle: any;
  billcycle = [
    {id: 1, name: '01 '},
    {id: 2, name: '02'},
  ];

  selectedMonth:any;
  month = [
    {id: 1, name: 'April '},
    {id: 2, name: 'May'},
  ];


  selectedPagination:any;
  pagination = [
    {id: 1, name: '30'},
    {id: 1, name: '50'},
    {id: 2, name: '100'},
  ];
 

  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: "0"+ i ,
          month:"202003",
          name: "Name" + (i + 1),
          area:"Area 1",
          sub_area:"Sub Area1",
          campaignid: "0019924" + i,
          status: ['pending', 'confirmed'].sort((a, b) => .5 - Math.random())[0],
          scheduletype:['manual','spot','smart'].sort((a, b) => .5 - Math.random())[0],
          consumer: "500",
          activityType: "Manual",
          source: "Branch",
          raisedOn: new Date(),
          mobile_no:"9011548878",
          meter_no:"897565"+i
        }
      );
    }
  }

  ngOnInit(): void {

    this.dtOptions = {
      pageLength: 30,
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
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };
  showtoast = false;
  autohide = true;
}
