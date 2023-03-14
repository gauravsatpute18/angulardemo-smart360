import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faMapMarkerAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'smart360-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faPlus = faPlus;

  public assetDetailsCollapse = false;
  public assetOtherDetailsCollapse = true;

  selectedCampaignType = 'Type A'; 
  selectedFrequency: '3 Days/week';
  selectedChannel: any;
  selectedUtility: any;
  selectedCity: any;
  selectedArea: any;
  selectedSubArea: any;
  selectedPipeline: any;
  selectedCategory:any;
  selectedSubCategory:any;
  selectedManufacture:any;
  selectedMake:any;
  selectedInsurance:any;
  selectedModel:any;
  selecteddepricationMethod:any;
  selecteddepricationRate:any;
  selectedsop:any;
  selectedLatitude:any;
  selectedLongitude:any;

  
  showtoast = false;
  autohide = true;
  

  make = [
    {id: 1, name: 'Make A'},
    {id: 2, name: 'Make B'},
  ];
  manufacture = [
    {id: 1, name: 'Manufacture 1'},
    {id: 2, name: 'Manufacture 2'},
  ];
   
  model_ = [
    {id: 1, name: 'model 1'},
    {id: 2, name: 'model 2'},
    {id: 3, name: 'model 3'},
  ];
  insurance = [
    {id: 1, name: 'Insurance 1'},
    {id: 2, name: 'Insurance 2'},
    {id: 3, name: 'Insurance 3'},
  ];
  depricationRate = [
    {id: 1, name: 'Rate 1'},
    {id: 2, name: 'Rate 2'},
    {id: 3, name: 'Rate 3'},
  ];
  depricationMethod = [
    {id: 1, name: 'Method 1'},
    {id: 2, name: 'Method 2'},
    {id: 3, name: 'Method 2'},
  ]
  category=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ]
  subcategory=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ]
  frequency = [
    {id: 1, name: '3 Days/Week'},
    {id: 2, name: '4 Days/Week'},
  ];
  latitude=[
    {id: 1, name: '343535'},
    {id: 2, name: '353452'},
    {id: 3, name: '244223'},
  ]
  longitude=[
    {id: 1, name: '333331'},
    {id: 2, name: '545452'},
    {id: 3, name: '333353'},
  ]
  sop = [
    {id: 1, name: 'Sop A'},
    {id: 2, name: 'Sop B'},
  ];

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  files: File[] = []; 
  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
  }
  onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('a[data-toggle="tab"]').parent(".list-group-item").removeClass("active").removeClass("finished");
      });
      $('#applicnt-dtls-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab               
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#applicnt-pay-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working2'); 
        $('#applicnt-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      
       $("#proceed_asset_other_details").on('click', function(){
         $('#applicnt-pay-tab').trigger( "click" );
       });

      $("#proceed_2").on('click', function(){
        console.log("end-of-form");
      });
      setTimeout(function(){
      }, 5000);
    });
  }

}
