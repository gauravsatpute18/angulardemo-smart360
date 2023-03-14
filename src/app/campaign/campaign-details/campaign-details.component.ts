import { Component, OnInit } from '@angular/core';
import { faChevronLeft,faCalendarAlt, faChevronRight,faEye , faPen,faFileCsv, faMapMarkerAlt, faFileExcel, faPrint, faFilePdf, faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {
  selected;

  model: NgbDateStruct;
  dtOptions: DataTables.Settings = {};
  faCalendarAlt = faCalendarAlt;
  date: {year: number, month: number}; 
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPen = faPen;
  faFileCsv = faFileCsv;
  faMapMarkerAlt = faMapMarkerAlt;
  faPrint = faPrint;
  faFileExcel = faFileExcel;
  faFilePdf= faFilePdf;
  faEye =faEye ; 
  faPlus = faPlus;

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  selectedDocumentType ='Address';
  documentType= [
    {id: 1, name2: 'Personal details'},
    {id: 2, name2: 'Address details'},
  ];

  selectedDocType = 'Address';
  docType = [
    {id: 1, name: 'Passport'},
    {id: 2, name: 'Address'},
    {id: 3, name: 'Aadhaar card'},  
  ];

  selectedAmount = 'Above 10000';
  amount = [
    {id: 1, amnt: 'Above 10000'},
    {id: 2, amnt: 'Above 15000'},
    {id: 3, amnt: 'Above 20000'},  
  ];

  selectedvendor = 'Vendor X';
  vendor = [
    {id: 1, ven: 'Vendor X'},
    {id: 2, ven: 'Vendor Y'},
    {id: 3, ven: 'Vendor Z'},  
  ];

  selectedCategory = 'Category 1';
  category = [
    {id: 1, catg: 'Category 1'},
    {id: 2, catg: 'Category 2'},
    {id: 3, catg: 'Category 3'},  
  ];

  selectedChannel: 'Channel';
  channel=[
    {id: 1, name: 'Channel 1'},
    {id: 2, name: 'Channel 2'},
    {id: 3, name: 'Channel 3'},
  ];

  selectedBudget:'Budget 1';
  budget=[
    {id: 1, name: 'Budget 1'},
    {id: 2, name: 'Budget 2'},
    {id: 3, name: 'Budget 3'},
  ];

  selectedUtility: any;
  utility=[
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
    {id: 3, name: 'Utility 3'},
  ];

  selectedCategory2 = 'Category 1';
  category2 = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    {id: 3, name: 'Category 3'},  
  ];

  selectedPagination:any;
  pagination = [
    {id: 1, name: '10'},
    {id: 2, name: '20'},
  ];


  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          addno: i + 1,
          addname: "Advertisement " + i+1,
          frequency: "5-6 times",          
          channel: "Channel X",
          vendor: "Rivka Frank",
          budget: '500 $',
          status: ['finished', 'unfinished', 'pending'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
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

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 10,
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
    $(document).ready(function(){
      // notes remove from list
      $('.notes-card-wrap .notes-card .close').click(function (e) {
        e.preventDefault();
        $(this).parents('.notes-card-wrap .list-group-item').remove();
      });
      // to prevent dropdown close on selecting color
      $(document).on('click', '.dot-option-dropdown .dropdown-menu', function(e){ 
        e.stopPropagation(); 
      }); 
    });
  }
  // renderDetail(id: number){
  //   this.router.navigateByUrl('/details');
  //   console.log(id);
  // }

  public show:boolean = false;
  toggle() {
    this.show = !this.show;
  }

}
