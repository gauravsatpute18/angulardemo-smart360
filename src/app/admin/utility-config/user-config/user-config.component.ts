import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'smart360-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {

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

scrollOptions = { 
autoHide: true, 
scrollbarMinSize: 67,
scrollbarMaxSize: 180,
};

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


  constructor() { }

  ngOnInit(): void {
  }

}