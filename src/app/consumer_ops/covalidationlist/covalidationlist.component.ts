import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus, faRedoAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'smart360-covalidationlist',
  templateUrl: './covalidationlist.component.html',
  styleUrls: ['./covalidationlist.component.scss']
})
export class CovalidationlistComponent implements OnInit {

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
  faPlus=faPlus;

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

    selectedsubcategory: any;
    subcategory1 = [
      {id: 1, name: 'subcategory 1'},
      {id: 2, name: 'subcategory 2'},
    ];
    selectedAreasub:any;
    subarea = [
      {id: 1, name: 'Sub Area 1'},
      {id: 2, name: 'Sub Area 2'},
    ];
  selectedUtility: any;
  utility = [
    {id: 1, name: 'utility 1'},
    {id: 2, name: 'utility 2'},
  ];
  selectedcategory: any;
  category1 = [
    {id: 1, name: 'c 1'},
    {id: 2, name: 'c2'},
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
  selectedmru: any;
  mru = [
    {id: 1, name: 'option 1'},
    {id: 2, name: 'option 2'},
  ];
  selectedPagination:any;
  pagination = [
    {id: 1, name: '30'},
    {id: 1, name: '50'},
    {id: 2, name: '100'},
  ];
  selectedCity: any;
  city = [
    {id: 1, name: 'city 1'},
    {id: 2, name: 'city 2'},
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

  selectedstype: any;
  stype = [
    {id: 1, name: 'Manual'},
    {id: 2, name: 'Photo Meter Reading'},
    {id: 3, name: 'Smart Meter Reading/ AMR'},
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
          cycle: i,
          portion: "Old Alwal_30",
          consumer:1350,
          normal: 3500,
          new:0,
          completed:60,
          duplicate: 2,
          v1:100,
          v2:50,
          month:"202003",
          enddate: new Date(),
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

  files: File[] = []; 
  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
  }
  onRemove(event) {
		console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
