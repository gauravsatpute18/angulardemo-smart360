import { Component, OnInit } from '@angular/core';
import { faChevronLeft,faCalendarAlt, faChevronRight,faEye , faPen,faFileCsv, faMapMarkerAlt, faFileExcel, faPrint, faFilePdf, faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

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

  selectedDocType = 'Address';
  docType = [
    {id: 1, name: 'Passport'},
    {id: 2, name: 'Address'},
    {id: 3, name: 'Aadhar card'},  
  ];

  selecteImageType = 'Type 1';
  ImageType = [
    {id: 1, typ: 'Type 1'},
    {id: 2, typ: 'Type 2'},
  ];

  selectedUser = 'User 1';
  user = [
    {id: 1, user: 'User 1'},
    {id: 2, user: 'User 2'},
    {id: 3, user: 'User 3'},  
  ];

  selectedName = 'Passport';
  name = [
    {id: 1, nme: 'Passport'},
    {id: 2, nme: 'Aadhar card'},
  ];


  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          receipt_no: i + 1,
          name: "Name" + (i + 1),
          user: "User" + (i + 1),          
          date: new Date(),
          location: "Location" + (i + 1),
          status: ['finished', 'pending'].sort((a, b) => .5 - Math.random())[0],
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

