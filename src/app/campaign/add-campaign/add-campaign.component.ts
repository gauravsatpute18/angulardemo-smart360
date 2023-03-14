import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faMapMarkerAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss']
})
export class AddCampaignComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faPlus = faPlus;

  public campaignDetailsCollapse = false;
  public campaignAdsDocsCollapse = true;

  selectedCampaignType = 'Type A'; 
  selectedFrequency: '3 Days/week';
  selectedChannel: any;
  
  selectedCity: any;
  selectedArea: any;
  selectedSubArea: any;
  selectedPipeline: any;
  
  selectedBudget:any;

  campaignType = [
    {id: 1, campgn: 'Type A'},
    {id: 2, campgn: 'Type B'},
  ];
  frequency = [
    {id: 1, name: '3 Days/Week'},
    {id: 2, name: '4 Days/Week'},
  ];

  selectedCategory:any;
  consumerCategory = [
    {id: 1, name: 'consumerCategory 1'},
    {id: 2, name: 'consumerCategory 2'},
  ];
  consumerSubCategory = [
    {id: 1, name: 'consumerSubCategory 1'},
    {id: 2, name: 'consumerSubCategory 2'},
  ];
  area = [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
    {id: 3, name: 'Area 3'},
  ];
  subarea = [
    {id: 1, name: 'SubArea 1'},
    {id: 2, name: 'SubArea 2'},
    {id: 3, name: 'SubArea 3'},
  ];
  pipeline = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 2'},
  ]
  category=[
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    {id: 3, name: 'Category 3'},
  ]

  selectedUtility: any;
  utility=[
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
    {id: 3, name: 'Utility 3'},
  ]
  city=[
    {id: 1, name: 'City 1'},
    {id: 2, name: 'City 2'},
    {id: 3, name: 'City 3'},
  ]
  channel=[
    {id: 1, name: 'Channel 1'},
    {id: 2, name: 'Channel 2'},
    {id: 3, name: 'Channel 3'},
  ]
  budget=[
    {id: 1, name: 'Budget 1'},
    {id: 2, name: 'Budget 2'},
    {id: 3, name: 'Budget 3'},
  ]

  // toaster
  showtoast = false; 
  autohide = true;
  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };




  close() {
    this.autohide = false;
    // setTimeout(() => this.autohide = true, 5000);
  }

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

  public show_advert_block:boolean = false;
  add_advertise() {
    this.show_advert_block = !this.show_advert_block;
  }

 

  ngOnInit(): void {
    $(document).ready(function(){
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target
        $('a[data-toggle="tab"]').parent(".list-group-item").removeClass("active").removeClass("finished");
      })
      $('#campaign-details-tab').on('shown.bs.tab', function(e) {  
        e.target
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#campaign-docs-tab').on('shown.bs.tab', function(e) {
        e.target
        $('#campaign-details-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });   
      $('#campaign-rvw-sbmt-tab').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        // alert('working4');
        $('#campaign-details-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $('#campaign-docs-tab').parent(".list-group-item").removeClass("active").addClass("finished");   
        $(this).parent(".list-group-item").addClass("active");
      });
      $("#proceed_campaign_docs").on('click', function(){
        $('#campaign-docs-tab').trigger( "click" );
      });
      $("#campaign_submit").on('click', function(){
        $('#campaign-rvw-sbmt-tab').trigger( "click" );
      });
      $("#campaign_preview").on('click', function(){
        console.log("end-of-form");
      });
      setTimeout(function(){
      }, 5000);
    });
  }

}
