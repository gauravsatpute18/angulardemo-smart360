import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
declare let GMaps: any;

@Component({
  selector: 'smart360-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faPlus = faPlus;

  constructor() {}

  selectedNewStatus = 'New';
  newStatus = [
    {id: 1, status: 'New'},
    {id: 2, status: 'Running'},
  ];

  selectedRunningStatus = 'Running';
  runningStatus = [
    {id: 1, status2: 'New'},
    {id: 2, status2: 'Running'},
  ];
  
  selectedRunningStatus2 = 'Running';
  runningStatus2 = [
    {id: 1, status3: 'New'},
    {id: 2, status3: 'Running'},
  ];

  selectedTimeStatus = '15 Days';
  timeStatus = [
    {id: 1, tim: '30 Days'},
    {id: 2, tim: '15 Days'}, 
    {id: 3, tim: '7 Days'}, 
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'utility 1'},
    {id: 2, name: 'utility 2'},
  ];

  selectedType = 'Type';
  type = [
    {id: 1, typ: 'Type 1'},
    {id: 2, typ: 'Type 2'},
  ];

  selectedMonth = 'Month';
  month = [
    {id: 1, mnth: ' Last 30 days'},
    {id: 2, mnth: ' Last 60 days'},
    {id: 3, mnth: ' Last 90 days'},
    {id: 4, mnth: ' All'},
  ];

  selectedArea = 'Area';
  area = [
    {id: 1, are: 'Area 1'},
    {id: 2, are: 'Area 2'},
  ];

  selectedFrequency = 'Yearly';
  frequency = [
    {id: 1, frq: 'Yearly'},
    {id: 2, frq: 'Quaterly'},
    {id: 3, frq: 'Monthly'},
  ];

  // Bar Chart settings  
  public barChartType: ChartType = 'bar';
  public barChartLabels: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { barPercentage: 0.8, barThickness: 10, maxBarThickness: 12, data: [360, 380, 240, 300], label: 'Total Registrations', backgroundColor: 'rgba(53, 63, 223, 0.8)', hoverBackgroundColor: 'rgba(53, 63, 223, 1)' },
    { barPercentage: 0.8, barThickness: 10, maxBarThickness: 12, data: [250, 200, 200, 200], label: 'Pending', backgroundColor: 'rgba(255, 111, 32, 0.8)', hoverBackgroundColor: 'rgba(255, 111, 32, 1)' },
    { barPercentage: 0.8, barThickness: 10, maxBarThickness: 12, data: [500, 360, 150, 220], label: 'Installed', backgroundColor: 'rgba(50, 208, 175, 0.8)', hoverBackgroundColor: 'rgba(50, 208, 175, 1)' },
    { barPercentage: 0.8, barThickness: 10, maxBarThickness: 12, data: [0, 0, 0, 0], label: 'Converted', backgroundColor: 'rgba(176, 180, 205, 0.8)', hoverBackgroundColor: 'rgba(176, 180, 205, 1)' }
  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display:false
        }
      }],
      yAxes: [{
        ticks: {
          stepSize: 100,
          max : 600,
          min: 100
        },
        gridLines: {
          borderDash: [8, 8],
          color: "#B0B4CD"
        }
      }]
    },
    legend: { 
      position: 'bottom',
      labels: {
        boxWidth: 7,
        fontSize: 12,
        fontFamily: "'Poppins', sans-serif",
        fontColor: '#83848E',
        padding: 20,
        usePointStyle: true
      }
    }
  };

  // Dots/Scatter Chart Settings
  public scatterChartValues = [0, 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'];
  public scatterChartType: ChartType = 'scatter';
  public scatterChartLabels: Label[] = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'];
  public scatterChartData: ChartDataSets[] = [
    { data: [{ x: 1, y: 1 },{ x: 2, y: 5 },{ x: 4, y: 5 },{ x: 6, y: 4 }], label: 'Scheme X', pointRadius: 7, backgroundColor: 'rgba(53, 63, 223, 0.8)' },
    { data: [{ x: 1, y: 3 },{ x: 3, y: 4 },{ x: 5, y: 6 },{ x: 7, y: 4 }], label: 'Scheme Y', pointRadius: 7, backgroundColor: 'rgba(53, 63, 223, 0.8)' },
  ];
  public chartColors = [{backgroundColor: 'transparent', borderColor: 'transparent', pointBackgroundColor: '#353FDF', pointHoverBackgroundColor: '#353FDF', pointHoverBorderColor: '#353FDF'}];
  public scatterChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { 
      position: 'bottom',
      labels: {
        boxWidth: 10,
        fontSize: 12,
        fontFamily: "'Poppins', sans-serif",
        fontColor: '#83848E',
        padding: 25,
        usePointStyle: true
      }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'No of registration',
          fontSize: 12,
          fontFamily: "'Poppins', sans-serif",
          fontColor: '#83848E',
        },
        ticks: {
          max : 10,
          min: 0,
          display:false
        },
        gridLines: {
          display:false
        }
      }],
      xAxes: [{
        ticks: {
          callback: value => this.scatterChartValues[value],
          stepSize: 1,
          max : 8,
          min: 0
        },
        gridLines: {
          borderDash: [8, 8],
          color: "#B0B4CD"
        }
      }]
    },
  };

  // Donut chart settings
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: Label[] = ['Pending', 'Installed', 'Converted', 'Total Registrations'];
  public doughnutChartData: ChartDataSets[] = [ 
    { weight: 20, backgroundColor: ['rgba(255, 111, 32, 1)','rgba(50, 208, 175, 1)', 'rgba(176, 180, 205, 1)', 'rgba(53, 63, 223, 1)'], data: [70, 70, 76, 144], borderWidth: 0 },
  ];
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { 
      position: 'bottom',
      labels: {
        boxWidth: 7,
        fontSize: 12,
        fontFamily: "'Poppins', sans-serif",
        fontColor: '#83848E',
        padding: 30,
        usePointStyle: true
      }
    },
    cutoutPercentage: 82,
  };

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  // Survey Chart settings  
  public surveyBarChartType: ChartType = 'bar';
  public surveyBarChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public surveyBarChartLegend = true;
  public surveyBarChartPlugins = [];
  public surveyBarChartData: ChartDataSets[] = [
    { barPercentage: 0.8, barThickness: 10, maxBarThickness: 12, data: [5, 2.8, 7.6, 5.8, 3.6, 5.2, 1.8, 3.7, 3.7, 5.8, 7.2, 5.8], label: 'Consumer Survey', backgroundColor: 'rgba(53, 63, 223, 0.8)', hoverBackgroundColor: 'rgba(53, 63, 223, 1)'},
    { barPercentage: 0.8, barThickness: 10, maxBarThickness: 12, data: [3.3, 5.9, 3.1, 3.1, 5.1, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2, 3.2,], label: 'Location Survey', backgroundColor: 'rgba(255, 111, 32, 0.8)', hoverBackgroundColor: 'rgba(255, 111, 32, 1)'}
  ];
  public surveyBarChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display:false
        }
      }],
      yAxes: [{
        ticks: {
          stepSize: 1,
          max : 8,
          min: 1
        },
        gridLines: {
          borderDash: [8, 8],
          color: "#B0B4CD"
        }
      }]
    },
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 7,
        fontSize: 12,
        fontFamily: "'Poppins', sans-serif",
        fontColor: '#83848E',
        padding: 30,
        usePointStyle: true
      }
    }
  };
  
  ngOnInit(): void {
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);;
    $(document).ready(function(){
      $('.toggle-button-wrap .nav-link').on('shown.bs.tab', function (e) {
        // alert('works');   
      });

      var map1 = new GMaps({el: '#g-map1',lat: 19.9511395,lng: 73.7329294,});
      map1.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map1.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      var map2 = new GMaps({el: '#g-map2',lat: 19.9511395,lng: 73.7329294,});
      map2.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map2.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      var map3 = new GMaps({el: '#g-map3',lat: 19.9511395,lng: 73.7329294,});
      map3.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map3.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      var map4 = new GMaps({el: '#g-map4',lat: 19.9511395,lng: 73.7329294,});
      map4.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map4.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      var map5 = new GMaps({el: '#g-map5',lat: 19.9511395,lng: 73.7329294,});
      map5.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map5.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      var map6 = new GMaps({el: '#g-map6',lat: 19.9511395,lng: 73.7329294,});
      map6.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map6.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      var map7 = new GMaps({el: '#g-map7',lat: 19.9511395,lng: 73.7329294,});
      map7.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map7.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      var map8 = new GMaps({el: '#g-map8',lat: 19.9511395,lng: 73.7329294,});
      map8.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map8.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      var map9 = new GMaps({el: '#g-map9',lat: 19.9511395,lng: 73.7329294,});
      map9.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map9.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      var map10 = new GMaps({el: '#g-map10',lat: 19.9511395,lng: 73.7329294,});
      map10.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map10.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );

      
      
    });
  }

}
