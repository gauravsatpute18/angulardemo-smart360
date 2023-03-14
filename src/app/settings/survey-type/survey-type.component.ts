import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-survey-type',
  templateUrl: './survey-type.component.html',
  styleUrls: ['./survey-type.component.scss']
})

export class SurveyTypeComponent implements OnInit {

  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectedType: any;
  type = [
    {id: 1, name: 'type 1'},
    {id: 2, name: 'type 2'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'status 1'},
    {id: 2, name: 'status 2'},
  ];

  selectedActiveStatus: 'Active';
  activeStatus = [
    {id: 1, status1: 'Active'},
    {id: 2, status1: 'Pending'},
    {id: 3, status1: 'Finished'},
  ];

  selectedPendingStatus: 'Pending';
  pendingStatus = [
    {id: 1, status2: 'Active'},
    {id: 2, status2: 'Pending'},
    {id: 3, status2: 'Finished'},
  ];

  selectedFinishedStatus: 'Finished';
  finishedStatus = [
    {id: 1, status3: 'Active'},
    {id: 2, status3: 'Pending'},
    {id: 3, status3: 'Finished'},
  ];

  selectedActiveStatus2: 'Active';
  activeStatus2 = [
    {id: 1, status6: 'Active'},
    {id: 2, status6: 'Pending'},
    {id: 3, status6: 'Finished'},
  ];

  selectedPendingStatus2: 'Pending';
  pendingStatus2 = [
    {id: 1, status4: 'Active'},
    {id: 2, status4: 'Pending'},
    {id: 3, status4: 'Finished'},
  ];

  selectedFinishedStatus2: 'Finished';
  finishedStatus2 = [
    {id: 1, status5: 'Active'},
    {id: 2, status5: 'Pending'},
    {id: 3, status5: 'Finished'},
  ];

  selectedSurveyType = 'Domestic';
  surveyType = [
    {id: 1, name2: 'Domestic'},
    {id: 2, name2: 'Lorem'},
  ];

  selectedActStatus = 'Active';
  actStatus = [
    {id: 1, name3: 'Active'},
    {id: 2, name3: 'Deactive'},
  ];

  constructor(private modalService: NgbModal) {}

  surveyTypeModal(content) {
    this.modalService.open(content, {backdropClass: 'white-backdrop center-modal-backdrop', windowClass: 'center-modal', centered: true });
  }

  ngOnInit(): void {
  }

}
