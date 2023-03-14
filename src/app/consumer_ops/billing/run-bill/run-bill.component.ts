import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-run-bill',
  templateUrl: './run-bill.component.html',
  styleUrls: ['./run-bill.component.scss']
})
export class RunBillComponent implements OnInit {

  model1: NgbDateStruct;
  model11: NgbDateStruct;
  model2: NgbDateStruct;
  model22: NgbDateStruct;
  model3: NgbDateStruct;
  model33: NgbDateStruct;
  date: {year: number, month: number}; 

  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;

  // toaster
  showtoast = false; 
  autohide = true;

  // scroll options
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedConsumer:any;
  consumer = [
    {id: 1, name: 'Individual'},
    {id: 2, name: 'Industrial'},
  ];
  

  selectedFrequency:any;
  frequency = [
    {id: 1, name: 'Smart Meter'},
    {id: 2, name: 'Spot Billing'},
    {id: 3, name: 'Manual'},
    {id: 4, name: 'Photo Meter'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'Gas'},
  ];

  selectedMonth:any;
  month = [
    {id: 1, name: 'April'},
    {id: 2, name: 'May'},
  ];
  
  selectedPortion:any;
  portion = [
    {id: 1, name: 'Houston'},
  ];
  selectedPagination:any;
  pagination = [
    {id: 1, name: '100'},
    {id: 2, name: '200'},
  ];
  selectedCategory: any;
  category = [
    {id: 1, name: 'category 1'},
    {id: 2, name: 'category 2'},
  ];

  // Collapsibles
  public billingConsumerCollapse = false;
  public billingDataCollapse = true;
  public billingViewBillCollapse = true;

  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          utility: "DAP_LOT1",
          cycle: "01",
          mru: "370M1-GANDHI-NAG-1",
          portion: "POR2-MEDCHAL",
          duedt: new Date(),
        }
      );
    }
  }

  ngOnInit(): void {   
    $(document).ready(function(){
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
        $('a[data-toggle="tab"]').parent(".list-group-item").removeClass("active").removeClass("finished");
      })
      $('#billing-consumer-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab               
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#billing-data-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working2'); 
        $('#billing-consumer-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#billing-view-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working3');
        $('#billing-consumer-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#billing-data-tab').parent(".list-group-item").removeClass("active").addClass("finished"); 
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#kyc-doc-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#billing-consumer-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#billing-data-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#billing-view-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });

      $('#billing-rvw-sbmt-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#billing-consumer-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#billing-data-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#billing-view-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $('#kyc-doc-tab').parent(".list-group-item").removeClass("active").addClass("finished");  
        $(this).parent(".list-group-item").addClass("active");
      });
      $("#proceed_1").on('click', function(){
        $('#billing-data-tab').trigger( "click" );
      });
      $("#proceed_2").on('click', function(){
        $('#billing-view-tab').trigger( "click" );
      });
      $("#proceed_3").on('click', function(){
        $('#billing-rvw-sbmt-tab').trigger( "click" );
      });
      $("#billing_preview").on('click', function(){
        console.log("end-of-form");
      });
      setTimeout(function(){
      }, 5000);
      $('#checkbox_check').change(function() {
        if ($(this).is(':checked')) {
          $('#open_slide').trigger( "click" );
        };
      });

      // counter + content loader
      $(".pr-custom-accordion .btn-link").on("click", function(){
        $(this).find('.counter').each(function() {
          var $this = $(this),
          countTo = $this.attr('data-count');        
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },      
          {     
            duration: 1800,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(parseInt(this.countNum)));
            },
            complete: function() {
              $this.text(this.countNum);
              $this.parent().addClass('done');
            }      
          });
        });           
        $(this).parent().next().find('.pr-content-loader').each(function() {
          $(this).addClass('disappear');
        });
      });
     

    });    
  }

}
