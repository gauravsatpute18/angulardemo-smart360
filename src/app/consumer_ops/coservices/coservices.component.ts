import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faPlus, faCheckCircle,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'smart360-coservices',
  templateUrl: './coservices.component.html',
  styleUrls: ['./coservices.component.scss']
})
export class CoservicesComponent implements OnInit {
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
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faPlus = faPlus;

  selectedNewStatus = 'Damage';
  newStatus = [
    {id: 1, status: 'Damage'},
    {id: 2, status: 'Improper PNG'},
    {id: 3, status: 'Flame issue'},
  ];

  selectedNewStatus1 = 'After RFC';
  newStatus1 = [
    {id: 1, status: 'After 15 days of conversion'},
    {id: 2, status: 'Damage to installation'},
    {id: 1, status: 'After RFC'},
  ];

  selectedNewStatus2 = 'Resolved';
  newStatus2 = [
    {id: 1, status: 'Resolved'},
    {id: 2, status: 'Unresolved'},
    {id: 3, status: 'Pending'},
  ];

  selectedNewStatus3 = 'Total';
  newStatus3 = [
    {id: 1, status: 'Total'},
    // {id: 2, status: 'Phonpe'},
    // {id: 3, status: 'Paytm'},
  ];

  selectedCycle:any;
  cycle = [
    {id: 1, name: 'Cycle 1'},
    {id: 2, name: 'Cycle 2'},
  ];

  selectedPagination:any;
  pagination = [
    {id: 1, name: '30'},
    {id: 1, name: '50'},
    {id: 2, name: '100'},
  ];
  selectedMonth:any;
  month = [
    {id: 1, name: 'April'},
    {id: 2, name: 'May'},
  ];

  selectedtype:any; 
  type = [
    {id: 1, name: 'Damage'},
    {id: 2, name: 'Improper PNG'},
    {id: 1, name: 'Flame issue'},
  ];

  selectedCity: any;
  city = [
    {id: 1, name: 'city 1'},
    {id: 2, name: 'city 2'},
  ];

  selectedArea: any;
  area = [
    {id: 1, name: 'Queens villege'},
    {id: 2, name: 'Ridgewood'},
    {id: 3, name: 'Brownsville'},
    {id: 4, name: 'Rossville'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'Resolved'},
    {id: 2, name: 'Unresolved'},
    {id: 3, name: 'Pending'},
  ];

  selectedMru:any;
  mru=[
    {id: 1, name: 'MRU 1'},
    {id: 2, name: 'MRU 2'},
  ];

  selectedsubArea:any;
  subarea = [
    {id: 1, name: 'Jamaica Ave'},
    {id: 2, name: '93rd Ave'},
    {id: 3, name: 'Murdock'},
    {id: 4, name: 'Hempstead Ave'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'Inframark-water'},
    {id: 2, name: 'Inframark-gas'},
  ];

  selectedstype:any;
  catg = [
    {id: 1, catg: 'Type 1'},
    {id: 2, catg: 'Type 2'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'Domestic'},
    {id: 2, name: 'Industrial'},
  ];

  selectedSubcategory: any;
  subcategory = [
    {id: 1, name: 'Individual'},
    {id: 2, name: 'Builder'},
  ];

  selectedBillMonth= "Jan";
  billMonth = [
    {id: 1, blmnth: 'Feb'},
    {id: 2, blmnth: 'March'},
  ];

  selectedSubtype:any;
  subtype = [
    {id: 1, name: 'After 15 days of conversion'},
    {id: 2, name: 'Damage to installation'},
    {id: 1, name: 'After RFC'},
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
          name: "Name" + (i + 1),
          campaignid: "0019924" + i,
          type:['Damage', 'Improper PNG', 'Flame issue'].sort((a, b) => .5 - Math.random())[0],
          subtype:['After 15 days of conversion', 'Damage to installation', 'After RFC'].sort((a, b) => .5 - Math.random())[0],
          status: ['danger', 'success', 'warning'].sort((a, b) => .5 - Math.random())[0],
          consumerno: '123' + i +'152' + i,
          mobileno: "+125 454 211",
          area: ['Ridgewood','Queens villege','Brownsville','Rossville'].sort((a, b) => .5 - Math.random())[0],
          subarea: ['Murdock','Hempstead Ave','93rd Ave','Jamaica Ave'].sort((a, b) => .5 - Math.random())[0],
          raisedOn: new Date()
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
  // onPageChange(event) {
  //   console.log(event);
  //   this.config.currentPage = event;
  // }

  files: File[] = []; 
  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
  }
  onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
  }
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };
  showtoast = false;
  autohide = true;
}
