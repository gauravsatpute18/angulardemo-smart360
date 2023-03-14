import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'smart360-copaymentsfilter',
  templateUrl: './copaymentsfilter.component.html',
  styleUrls: ['./copaymentsfilter.component.scss']
})
export class CopaymentsfilterComponent implements OnInit {

  selected;
  model: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPen = faPen;
  faMapMarkerAlt = faMapMarkerAlt;
  faPrint = faPrint;
  faTimesCircle = faTimesCircle;
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;
  showtoast = false;
  autohide = true;

  collection = { count: 8, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          srno: i+1,
          consumer_no: "12378943",
          txn_id: '45' + i + '68' + i + '25' + i,
          type: ["Bill payment","Registration charges"].sort((a, b) => .5 - Math.random())[0],
          status: 'paid',
          amt : '$ 500',
          paymentdate: "09 Jan 2020",
          channel:"Web App",
          paymentmode:['Paytm', 'Cash', 'Phonpe'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  }

  selectedStatus: any;
  status = [
    {id: 1, name: 'Paid'},
    {id: 2, name: 'Unpaid'},
  ];

  selectedChannel: any;
  channel = [
    {id: 1, name: 'Web app'},
    {id: 2, name: 'Digital'},
  ];

  selectedMode: any;
  mode = [
    {id: 1, name: 'Cash'},
    {id: 2, name: 'Phonpe'},
    {id: 3, name: 'Paytm'},
  ];

  selectedType: any;
  type = [
    {id: 1, name: 'Bill payment'},
    {id: 2, name: 'Registration charges'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'Inframark-water'},
    {id: 2, name: 'Inframark-gas'},
  ];

  selectedSubCategory: any;
  subCategory = [
    {id: 1, name: 'subCategory 1'},
    {id: 2, name: 'subCategory 2'},
  ];

  selectedPagination:any;
  pagination = [
    {id: 1, name: '10'},
    {id: 1, name: '20'},
    {id: 2, name: '30'},
  ];
  
  paymentStatus:"Paid";
  status1 = [
    {id: 1, name: 'Paid'},
    {id: 2, name: 'Partial'},  
  ];

  selectedamount= '500';
  amount = [
    {id: 1, name: '500'},
    {id: 2, name: '1000'},  
  ];

  selecteddate= '';
  date = [
    {id: 1, name: 'option 1'},
    {id: 2, name: 'option 2'},  
  ];

  selectedRef= '';
  ref = [
    {id: 1, name: 'option 1'},
    {id: 2, name: 'option 2'},  
  ];

  paymentdate= '';
  selectedpaymentdate = [
    {id: 1, name: 'option 1'},
    {id: 2, name: 'option 2'},  
  ];


  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 50,
      responsive: true,
    };
  }
}
