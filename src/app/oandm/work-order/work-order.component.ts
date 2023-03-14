import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
declare let GMaps: any;

@Component({
  selector: 'smart360-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent implements OnInit {

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

  btnIcon:boolean = false;

  model: NgbDateStruct;
  mapDate: NgbDateStruct;

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedTimeStatus = '15 Days';
  timeStatus = [
    {id: 1, time: '15 Days'},
    {id: 2, time: '30 Days'}, 
    {id: 3, time: 'Last Month'}, 
  ];

  selectedUtility = 'Customer first';
  utility = [
    {id: 1, name: 'Customer first'},
    {id: 2, name: 'Option 2'},
  ];

  selectedFlag = 'Flag';
  flag = [
    {id: 1, flg: 'Flag'},
    {id: 2, flg: 'Flag'},
  ];

  selectedArea = 'Area';
  area = [
    {id: 1, are: 'Area'},
    {id: 2, are: 'Area'},
  ];

  selectedSubArea = 'Sub Area';
  subArea = [
    {id: 1, sbare: 'Sub Area'},
    {id: 2, sbare: 'Sub Area'},
  ];

  selectedStatus = 'Status';
  status = [
    {id: 1, sts: 'Status'},
    {id: 2, sts: 'Status'},
  ];

  selectedSkills = 'Skills';
  skills = [
    {id: 1, skls: 'Skills'},
    {id: 2, skls: 'Skills'},
  ];

  selectedUtilisation = 'Utilisation';
  utilisation = [
    {id: 1, utlstn: 'Utilisation'},
    {id: 2, utlstn: 'Utilisation'},
  ];

  selectedVendor = 'Vendor';
  vendor = [
    {id: 1, vndr: 'Vendor'},
    {id: 2, vndr: 'Vendor'},
  ];

  selectedType = 'Type';
  type = [
    {id: 1, typ: 'Type'},
    {id: 2, typ: 'Type'},
  ];

  collection = { count: 60, data: [] };

  constructor (private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          reqId: i + "05647485",
          type: "Repair",
          status: ['complete', 'pending'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  };


  public show:boolean = false;
  public locations:boolean = true;
  public mapView:boolean = false;
  public buttonName = "Show";
  public iconChange:boolean = false;

  toggleBtn() {
    this.show = !this.show;
    this.iconChange = !this.iconChange;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  showLocations() {
    this.locations = !this.locations;
  }

  toggleMapView() {
    this.mapView = !this.mapView;
    if(this.mapView)  
      this.showMap();
    else
      this.hideMap();    
  }

  public hideMap() {
    setTimeout(() => {
      $("#g-map-wrapper").addClass('hide-map');
    }, 1000);
  };

  public showMap() {
    setTimeout(() => {
      $("#g-map-wrapper").removeClass('hide-map');
    }, 1000);
  };



  ngOnInit(): void {
    this.hideMap();
    $(document).ready(function(){
      $(document).on('click', '.filter-dropdown', function(e){ 
        e.stopPropagation(); 
      });
      $(document).on('click', '.filter-dropdown-select', function(e){ 
        e.stopPropagation(); 
      });

      
      
      var map = new GMaps({
        el: '#g-map',
        lat: 19.9511395,
        lng: 73.7329294,
      });
      map.addMarker (
        {lat: 19.9511395, lng: 73.7329294, title: 'Prismic Reflections', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'
        }, color: 'blue'}
      );
      map.addMarker (
        {lat: 19.9517864, lng: 73.7337073, title: 'M.S.E.D.C.L', infoWindow: {
          content: '<div class="marker-details"><div class="marker-details-head"> <i class="icons8 icons8-marker"></i> <span class="p">8 Requests in this Area</span></div><div class="marker-details-body"><div class="bttn-list"> <button class="btn ikon-bttn colr1 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon1.png" alt="b"></button> <button class="btn ikon-bttn colr2 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon2.png" alt="b"></button> <button class="btn ikon-bttn colr3 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon3.png" alt="b"></button> <button class="btn ikon-bttn colr4 st"><img class="st" src="../../../assets/images/icons/marker-bttn-ikon4.png" alt="b"></button></div> <button class="btn ikon-bttn num st">+15</button> <button class="btn btn-block zoom-in st"><i class="icons8 icons8-search"></i>Zoom in</button></div></div>'        
        }, size: 'small'}
      );
      
    });
  }

}

