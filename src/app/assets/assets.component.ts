import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPen} from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'smart360-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

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
  faPen = faPen;
  showtoast = false;
  autohide = true;
  faPlus = faPlus;

  selected;

  selectedPagination:any;
  pagination = [
    {id: 1, name: '50'},
    {id: 2, name: '100'},
    {id: 3, name: '200'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'utility 1'},
    {id: 2, name: 'utility 2'},
  ];
  
  selectedVendor:any;
  vendor = [
    {id: 1, name: 'Vendor 1'},
    {id: 2, name: 'Vendor 2'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];
  selectedCategory: any;
  category = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
    {id: 3, name: 'category 3'},
  ];
  selectedSubCategory: any;
  subcategory = [
    {id: 1, name: 'subcategory 1'},
    {id: 2, name: 'subcategory 2'},
    
  ];

  selectedArea: any;
  area = [
    {id: 1, name: 'area 1'},
    {id: 2, name: 'area 2'},
    
  ];

  collection = { count: 60, data: [] };

  constructor(private router: Router) {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          assetId: "0019924" + (i + 1),
          assetName:"Name" + (i + 1),
          category:"category"+(i + 1),
          sub_category:"sub_category"+(i+1),
          status: ['danger', 'success', 'warning'].sort((a, b) => .5 - Math.random())[0],
          area: "Pune",
          installationDate: new Date(),
          make: "Idgf_" + i,
          model: "M689457" + i,
          vendor:"Vendor 1"
        }
      );
    }
   }

  renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
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
    $("#proceed_4").on('click', function(){
      console.log("end-of-form");
    });
    this.dtOptions = {
      pageLength:30
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
  }

}
