import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-validation-details',
  templateUrl: './validation-details.component.html',
  styleUrls: ['./validation-details.component.scss']
})
export class ValidationDetailsComponent implements OnInit {

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

  public applyAdjustCollapse = true;
  selectedRemark:any;
  remark = [
    {id: 1, name: 'ok'},
    {id: 2, name: 'Done'},
  ];
  selectedReasonCode:any;
  code = [
    {id: 1, name: '10'},
    {id: 2, name: '20'},
    {id: 3, name: '30'},
  ];
  selectedStatus:any;
  status = [
    {id: 1, name: 'Active'},
  ];

  selectedBillCycle = '300';
  billCycle = [
    {id: 1, blcyc: '300'},
    {id: 2, blcyc: '400'},
    {id: 3, blcyc: '200'},
  ];

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  constructor(private modalService: NgbModal) { }

  campaignTypeModal(content) {
    this.modalService.open(content, {backdropClass: 'dark-backdrop center-modal-backdrop', windowClass: 'center-modal', centered: true });
  }

  ngOnInit(): void {
  }

}
