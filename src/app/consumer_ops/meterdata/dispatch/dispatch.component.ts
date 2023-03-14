import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus, faRedoAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'smart360-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements OnInit {

  selected;
  selected1;
  selected2;

  dtOptions: DataTables.Settings = {};
  dtOptions2: DataTables.Settings = {};
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
  faRedoAlt = faRedoAlt;
  faUser = faUser;

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

  selectedSubArea: any;
  subArea = [
    {id: 1, name: 'subArea 1'},
    {id: 2, name: 'subArea 2'},
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

  collection = { count: 60, data: [] };
  collection2 = { count: 48, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          mrcycle: 10 + i,
          month:"202004",
          mrportion: "Old Alwal-30",
          type:"Type 1",
          sub_type:"Sub Type 1",
          category:"category"+(i + 1),
          sub_category:"sub_category"+(i+1),
          status: ['partial', 'complete', 'dispatched', 'notdispatched' ].sort((a, b) => .5 - Math.random())[0],
          mru: "10" + i,
          consumer: "10" + i,
          dispatch:50,
          complete:20,
          startdt: new Date(),
          enddt: new Date(),
        }
      );
    };
    for (var j = 0; j < this.collection2.count; j++) {
      this.collection2.data.push(
        {
          mru: j + 1,
          consumer: 1353 * 10 *j,
          reading: 378 + 2*j,
          mr: "Rivka Frank",
          status: ['partial', 'complete', 'dispatched', 'notdispatched' ].sort((a, b) => .5 - Math.random())[0],
          disptchdt: new Date(),
          duedt: new Date(),
        }
      );
    };

  };

  // Donut chart settings 1
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: Label[] = ['Total Count', ''];
  public doughnutChartData: ChartDataSets[] = [ 
    { weight: 20, backgroundColor: ['rgba(53, 63, 223, 1)', 'rgba(255,255,255, 1)'], data: [500, 500], borderWidth: 0 },
  ];
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    cutoutPercentage: 90,
  };

  // Donut chart settings 2
  public doughnutChartType2: ChartType = 'doughnut';
  public doughnutChartLabels2: Label[] = ['Total Validation', ''];
  public doughnutChartData2: ChartDataSets[] = [ 
    { weight: 20, backgroundColor: ['rgba(176, 180, 205, 1)', 'rgba(255,255,255, 1)'], data: [100, 10], borderWidth: 0 },
  ];
  public doughnutChartOptions2: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    cutoutPercentage: 86,
  };

  // Donut chart settings 3
  public doughnutChartType3: ChartType = 'doughnut';
  public doughnutChartLabels3: Label[] = ['Total Validation', ''];
  public doughnutChartData3: ChartDataSets[] = [ 
    { weight: 20, backgroundColor: ['rgba(237, 155, 34, 1)', 'rgba(255,255,255, 1)'], data: [500, 500], borderWidth: 0 },
  ];
  public doughnutChartOptions3: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    cutoutPercentage: 90,
  };

  // Donut chart settings 4
  public doughnutChartType4: ChartType = 'doughnut';
  public doughnutChartLabels4: Label[] = ['Total Validation', ''];
  public doughnutChartData4: ChartDataSets[] = [ 
    { weight: 20, backgroundColor: ['rgba(255, 111, 32, 1)', 'rgba(255,255,255, 1)'], data: [100, 10], borderWidth: 0 },
  ];
  public doughnutChartOptions4: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    cutoutPercentage: 86,
  };

  // Donut chart settings 5
  public doughnutChartType5: ChartType = 'doughnut';
  public doughnutChartLabels5: Label[] = ['Total Validation', ''];
  public doughnutChartData5: ChartDataSets[] = [ 
    { weight: 20, backgroundColor: ['rgba(50, 208, 175, 1)', 'rgba(255,255,255, 1)'], data: [500, 500], borderWidth: 0 },
  ];
  public doughnutChartOptions5: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    cutoutPercentage: 90,
  };

  // Donut chart settings 6
  public doughnutChartType6: ChartType = 'doughnut';
  public doughnutChartLabels6: Label[] = ['Total Validation', ''];
  public doughnutChartData6: ChartDataSets[] = [ 
    { weight: 20, backgroundColor: ['rgba(237, 104, 104, 1)', 'rgba(255,255,255, 1)'], data: [100, 10], borderWidth: 0 },
  ];
  public doughnutChartOptions6: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    cutoutPercentage: 86,
  };

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 30,
    };
    this.dtOptions2 = {
      info: false,
      paging: false,
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
    $(document).ready(function(){
      $('.assign-col-list li').click(function(){
        $(this).parents('.dropdown-menu').removeClass('show');
      });
    });
  }
  showtoast = false;
  autohide = true;

}
