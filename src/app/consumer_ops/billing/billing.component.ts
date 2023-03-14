import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  selected;
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
  faFileInvoiceDollar = faFileInvoiceDollar;

  selectedCycle:any;
  cycle = [
    {id: 1, name: 'Cycle 1'},
    {id: 2, name: 'Cycle 2'},
  ];
  
  selectedMonth:any;
  month = [
    {id: 1, name: 'April'},
    {id: 2, name: 'May'},
  ];

  selectedType:any;
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
  selectedatype: any;
  atype = [
    {id: 1, name: 'option 1 '},
    {id: 2, name: 'option 2'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
  ];

  subCategory = [
    {id: 1, name: 'subCategory 1'},
    {id: 2, name: 'subCategory 2'},
  ];

  selectedSubArea: any;
  subArea = [
    {id: 1, name: 'sub area 1'},
    {id: 2, name: 'sub area 2'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];
  selectedcategory: any;
  category1 = [
    {id: 1, name: 'c1'},
    {id: 2, name: 'c2'},
  ];
  selectedsubcategory: any;
  subcategory1 = [
    {id: 1, name: 'sc 1'},
    {id: 2, name: 'sc 2'},
  ];
  selectedstype: any;
  stype = [
    {id: 1, name: 'option 1 '},
    {id: 2, name: 'option 2'},
  ];

  selectedMru:any;
  mru=[
    {id: 1, name: 'MRU 1'},
    {id: 2, name: 'MRU 2'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'utility 1'},
    {id: 2, name: 'utility 2'},
  ];

  selectedbillcycle: any;
  billcycle = [
    {id: 1, name: 'option 1 '},
    {id: 2, name: 'option 2'},
  ];
  selectedBillMonth= "Jan";
  billMonth = [
    {id: 1, blmnth: 'Feb'},
    {id: 2, blmnth: 'March'},
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
          utility: "DAP_LOT1",
          cycle: "01",
          mru: "370" + i,
          consumer: "5563" + i,
          type: "Spot",
          category: "Category 1",
          sbcategory: "Category 1",
          billed: "4521" + i,
          status: ['partial', 'complete', 'dispatched', 'notdispatched' ].sort((a, b) => .5 - Math.random())[0],
          duedt: new Date(),
        }
      );
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength : 30
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
  }

  renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
  }

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };
  showtoast = false;
  autohide = true;

}
