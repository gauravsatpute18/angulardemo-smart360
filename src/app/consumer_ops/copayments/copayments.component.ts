import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'smart360-copayments',
  templateUrl: './copayments.component.html',
  styleUrls: ['./copayments.component.scss']
})
export class CopaymentsComponent implements OnInit {
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

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedNewStatus = 'Bill payment';
  newStatus = [
    {id: 1, status: 'Bill payment'},
    {id: 2, status: 'Registration charges'},
  ];

  selectedNewStatus1 = 'Web app';
  newStatus1 = [
    {id: 1, status: 'Web app'},
    {id: 2, status: 'Digital'},
  ];

  selectedNewStatus2 = 'Cash';
  newStatus2 = [
    {id: 1, status: 'Cash'},
    {id: 2, status: 'Phonpe'},
    {id: 3, status: 'Paytm'},
  ];

  selectedNewStatus3 = 'Total';
  newStatus3 = [
    {id: 1, status: 'Total'},
    // {id: 2, status: 'Phonpe'},
    // {id: 3, status: 'Paytm'},
  ];

  selectedRef= '';
  ref = [
    {id: 1, name: 'option 1'},
    {id: 2, name: 'option 2'},  
  ];

  selecteddate= '';

  paymentdate= '';
  selectedpaymentdate = [
    {id: 1, name: 'option 1'},
    {id: 2, name: 'option 2'},  
  ];

  selectedPagination:any;
  pagination = [
    {id: 1, name: '30'},
    {id: 1, name: '50'},
    {id: 2, name: '100'},
  ];
  
  selectedUtility: any;
  utility = [
    {id: 1, name: 'Inframark-water'},
    {id: 2, name: 'Inframark-gas'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
  ];

  selectedChannel: any;
  channel = [
    {id: 1, name: 'Web app'},
    {id: 2, name: 'Digital'},
  ];

  selectedSubCategory: any;
  subCategory = [
    {id: 1, name: 'subCategory 1'},
    {id: 2, name: 'subCategory 2'},
  ];

  selectedMode: any;
  mode = [
    {id: 1, name: 'Cash'},
    {id: 2, name: 'Phonpe'},
    {id: 3, name: 'Paytm'},
  ];

  selectedArea: any;
  Area = [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
  ];


  selectedType: any;
  type = [
    {id: 1, name: 'Bill payment'},
    {id: 2, name: 'Registration charges'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'Paid'},
    {id: 2, name: 'Unpaid'},
  ];



  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,          
          name: "Name" + (i + 1),
          transactionno:"00199243" + (i + 1),
          type: ["Bill payment","Registration charges"].sort((a, b) => .5 - Math.random())[0],
          status: ['paid', 'unpaid'].sort((a, b) => .5 - Math.random())[0],
          consumerno:"199243" + (i + 1),
          mobileno:"+91 154 152 132",
          amount:"$ 665",
          date: new Date(),
          channel:"Web App",
          mode:['Paytm', 'Cash', 'Phonpe'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength :30
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
