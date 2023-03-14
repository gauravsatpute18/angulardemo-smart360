import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'smart360-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

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

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          cycle: i + 1,
          portion: "Old Alwal-30",
          consumer: "13530" + i,
          normal: "2360" + i,
          new: "0",
          cmpltd: i + 1,
          duplicate: i + 1,
          enddt: new Date(),
        }
      );
    }
  }

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
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
  }

}
