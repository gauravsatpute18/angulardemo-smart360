import { Component, OnInit } from '@angular/core';
import { faChevronLeft,faCalendarAlt, faChevronRight,faEye , faPen,faFileCsv, faMapMarkerAlt, faFileExcel, faPrint, faFilePdf, faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-contracts-details',
  templateUrl: './contracts-details.component.html',
  styleUrls: ['./contracts-details.component.scss']
})
export class ContractsDetailsComponent implements OnInit {

  model: NgbDateStruct;

  filterDateAddDemand: NgbDateStruct;
  filterDateAddInvoice: NgbDateStruct;
  filterDateAddPayment: NgbDateStruct;
  filterDateAddDocument: NgbDateStruct;
  filterDateAddTnC: NgbDateStruct;

  invoiceDateAddInvoice: NgbDateStruct;
  dueDateAddInvoice: NgbDateStruct;
  dueDateAddPayment: NgbDateStruct;
  paymentDateAddPayment: NgbDateStruct;

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

  selected;
  selected2;
  selected3;
  selected4;
  selected5;
  showtoast = false; 
  autohide = true;
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

  selectedInvoiceNumber ='Invoice Number';
  invoiceNumber= [
    {id: 1, inv: 15890},
    {id: 2, inv: 43526},
    {id: 3, inv: 45636},
    {id: 4, inv: 96162},
  ];

  selectedPaymentMethod = 'Payment Method';
  paymentMethod = [
    {id: 1, pay: "Credit Card"},
    {id: 2, pay: "Debit Card"},
    {id: 3, pay: "UPI"},
    {id: 4, pay: "VISA"},
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


  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
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
