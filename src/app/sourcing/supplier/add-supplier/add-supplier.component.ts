import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faMapMarkerAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'smart360-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faPlus = faPlus;

    // toaster
    showtoast = false; 
    autohide = true;

  public supplierDetailsCollapse = false;
  public financialDetailaCollapse = true;

  selectedsourceType = 'Source A'; 
  selectedFrequency: '3 Days/week';
  selectedChannel: any;
  selectedCity: any;
  selectedArea: any;
  selectedSubArea: any;
  selectedPipeline: any;
  selectedCategory:any;
  selectedBudget:any;
  selectedsubType:'xyz';
  selectedUtility:'Option 1';
  selectedState:'USA';
  selectedbank:'BOI';
  selecteddocName:'Address Proof';

  bank =[
    {id: 1, name: 'BOI'},
    {id: 2, name: ''},
  ];
  docName =[
    {id: 1, name: 'Address Proof'},
    {id: 2, name: 'Adhar'},
  ];

  state = [
    {id: 1, state: 'USA'},
    {id: 2, state: 'MH'},
  ];

  subType = [
    {id: 1, sub: 'xyz'},
    {id: 2, sub: 'abc'},
  ];

  sourceType = [
    {id: 1, source: 'Source A'},
    {id: 2, source: 'Source B'},
  ];
  frequency = [
    {id: 1, name: '3 Days/Week'},
    {id: 2, name: '4 Days/Week'},
  ];
  consumerCategory = [
    {id: 1, name: 'consumerCategory 1'},
    {id: 2, name: 'consumerCategory 2'},
  ];
  consumerSubCategory = [
    {id: 1, name: 'consumerSubCategory 1'},
    {id: 2, name: 'consumerSubCategory 2'},
  ];
  area = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ];
  subarea = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ];
  pipeline = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 2'},
  ]
  category=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ]
  utility=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ]
  city=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ]
  channel=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ]
  budget=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ]

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
      })
      $('#general-details-tab').on('shown.bs.tab', function(e) {  
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#financial-details-tab').on('shown.bs.tab', function(e) {
        $('#general-details-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#supplier-rvw-sbmt-tab').on('shown.bs.tab', function(e) {
        $('#general-details-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#financial-details-tab').parent(".list-group-item").removeClass("active").addClass("finished");             
        $(this).parent(".list-group-item").addClass("active");
      });
      $("#proceed_campaign_docs").on('click', function(){
        $('#financial-details-tab').trigger( "click" );
      });
      $("#supplier_finance").on('click', function(){
        $('#supplier-rvw-sbmt-tab').trigger( "click" );
      });
      $("#supplier_submit").on('click', function(){
        console.log("end-of-form");
      });
      setTimeout(function(){
      }, 5000);
    });
  }

}
