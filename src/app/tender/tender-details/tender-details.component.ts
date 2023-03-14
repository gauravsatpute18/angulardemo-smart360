import { Component, OnInit } from '@angular/core';
import { faChevronLeft,faCalendarAlt, faChevronRight,faEye , faPen,faFileCsv, faMapMarkerAlt, faFileExcel, faPrint, faFilePdf, faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-tender-details',
  templateUrl: './tender-details.component.html',
  styleUrls: ['./tender-details.component.scss']
})
export class TenderDetailsComponent implements OnInit {

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

  selectedName ='Name 1';
  name= [
    {id: 1, nme: 'Name 1'},
    {id: 2, nme: 'Name 2'},
  ];

  selectedDocType = 'Address';
  docType = [
    {id: 1, name: 'Passport'},
    {id: 2, name: 'Address'},
    {id: 3, name: 'Aadhar card'},  
  ];

  selectedSubType = 'Sub Type';
  subType = [
    {id: 1, name: 'Sub Type A'},
    {id: 2, name: 'Sub Type B'},
    {id: 3, name: 'Sub Type C'},  
  ];

  selectedVendor = 'vendor';
  vendor = [
    {id: 1, name: 'vendor A'},
    {id: 2, name: 'vendor B'},
    {id: 3, name: 'vendor C'},  
  ];

  selectedSourceType = 'Source Type';
  sourceType = [
    {id: 1, name: 'Source Type A'},
    {id: 2, name: 'Source Type B'},
    {id: 3, name: 'Source Type C'},  
  ];

  selectedCategory = 'Operator';
  category = [
    {id: 1, catg: 'Operator'},
    {id: 2, catg: 'Category 2'},
    {id: 3, catg: 'Category 3'},  
  ];

  selectedUtility = 'Utility 1';
  utility = [
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
    {id: 3, name: 'Utility 3'},  
  ];


  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          vendor_id: "EMP012" + (i + 1),
          name: "Vendor" + (i + 1),
          utility: "Utility " + (i + 1),
          phone: "+91 123 456 15" + (i + 1),
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
    this.dtOptions = {};
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
