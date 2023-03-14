import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPen,faUpload} from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-coupload',
  templateUrl: './coupload.component.html',
  styleUrls: ['./coupload.component.scss']
})
export class CouploadComponent implements OnInit {
  selected;
  date: {year: number, month: number}; 
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv; 
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPen = faPen;
  faUpload=faUpload;
  showtoast = false;
  autohide = true;

  dtOptions: DataTables.Settings = {};
  model: NgbDateStruct;

  collection = { count: 60, data: [] };
 
  
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
  selectedPagination:any;
  pagination = [
    {id: 1, name: '30'},
    {id: 1, name: '50'},
    {id: 2, name: '100'},
  ];
 
  selectedSubCategory: any;
  subcategory = [
    {id: 1, name: 'subCategory 1'},
    {id: 2, name: 'subCategory 2'},
  ];

  selectedCity: any;
  city = [
    {id: 1, name: 'city 1'},
    {id: 2, name: 'city 2'},
  ];

  selectedSubType:any;
  subtype = [
    {id: 1, name: 'Sub Type 1'},
    {id: 2, name: 'Sub Type 2'},
  ];

  selectedType:any;
  type = [
    {id: 1, name: 'Type 1'},
    {id: 2, name: 'Type 2'},
  ];

  selectedVendor:any;
  vendor = [
    {id: 1, name: 'Vendor 1'},
    {id: 2, name: 'Vendor 2'},
  ];
  selectedcategory: any;
  category1 = [
    {id: 1, name: 'c 1'},
    {id: 2, name: 'c2'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];


  selectedArea: any;
  area = [
    {id: 1, name: 'area 1'},
    {id: 2, name: 'area 2'},
  ];

  selectedRoute:any;
  route = [
    {id: 1, name: 'Route 1'},
    {id: 2, name: 'Route 2'},
  ];

  selectedSubArea: any;
  subArea = [
    {id: 1, name: 'subArea 1'},
    {id: 2, name: 'subArea 2'},
  ];
  selectedstype: any;
  stype = [
    {id: 1, name: 'option 1 '},
    {id: 2, name: 'option 2'},
  ];
  selectedCycle:any;
  cycle = [
    {id: 1, name: '01 '},
    {id: 2, name: '02'},
  ];
  selectedMonth:any;
  month = [
    {id: 1, name: 'April '},
    {id: 2, name: 'May'},
  ];


  selectedMru = 'POR2-GANDHI NAGAR-02';
  mru = [
    {id: 1, slmru: 'POR3-GANDHI NAGAR-01'},
    {id: 2, slmru: 'POR2-GANDHI NAGAR-02'},
  ];

  constructor(private router: Router) {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          MRCycle: i + 1,
          month:"202003",
          name: "Name" + (i + 1),
          userId: "0019924" + i,
          status: ['Partial', 'Complete', 'Dispatched','Started','Not Dispatched'].sort((a, b) => .5 - Math.random())[0],
          cantact: "+91 9849163057",
          email: "thomos@gmail.com",
          department: "Finance",
          role: "Admin",
          MRPortion:"Old Alwal_30",
          MRU: "150" + i,
          consumers:1236,
          new: 0,
          completed: 0,
          pending: 0,
          raisedOn: new Date()
        }
      );
    }
   }

   renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
  }

  ngOnInit(): void {

    this.dtOptions = {
      pageLength :30
    };
    
    $("#proceed_4").on('click', function(){
      console.log("end-of-form");
    });
  }

}
