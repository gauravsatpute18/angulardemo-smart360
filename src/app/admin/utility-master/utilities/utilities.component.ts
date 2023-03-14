import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";

@Component({
  selector: 'smart360-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit {

  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPen = faPen;
  faPlus = faPlus;

  showtoast = false;
  autohide = true;

  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];
  selectedDepartment: any;
  department = [
    {id: 1, name: 'Finance'},
    {id: 2, name: 'Marketing'},
    {id: 3, name: 'Billing'},
  ];
  selectedRole: any;
  role = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'Accounting'},    
  ];
  selectedUtilityType: any;
  utilityType = [
    {id: 1, utype: 'Type 1'},
    {id: 2, utype: 'Type 2'},
    {id: 3, utype: 'Type 3'},
  ];
  selectedState: any;
  state = [
    {id: 1, stat: 'Option 1'},
    {id: 2, stat: 'Option 2'},
    {id: 3, stat: 'Option 3'},
  ];
  selectedCountry: any;
  country = [
    {id: 1, cntry: 'Option 1'},
    {id: 2, cntry: 'Option 2'},
    {id: 3, cntry: 'Option 3'},
  ];
  selectedModule: any;
  module = [
    {id: 1, modul: 'Option 1'},
    {id: 2, modul: 'Option 2'},
    {id: 3, modul: 'Option 3'},
  ];
  selectedSubModule: any;
  subModule = [
    {id: 1, submodul: 'Option 1'},
    {id: 2, submodul: 'Option 2'},
    {id: 3, submodul: 'Option 3'},
  ];
  selectedProduct: any;
  product = [
    {id: 1, prod: 'Option 1'},
    {id: 2, prod: 'Option 2'},
    {id: 3, prod: 'Option 3'},
  ];
  selectedConsumerCat: any;
  consumerCat = [
    {id: 1, conscat: 'Option 1'},
    {id: 2, conscat: 'Option 2'},
    {id: 3, conscat: 'Option 3'},
  ];
  selectedSubConsumerCat: any;
  subConsumerCat = [
    {id: 1, subconscat: 'Option 1'},
    {id: 2, subconscat: 'Option 2'},
    {id: 3, subconscat: 'Option 3'},
  ];

  scrollOptions = {
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addUtility(){
    this.router.navigateByUrl('admin/master-utility/utilities/add-utility');
  }

}
