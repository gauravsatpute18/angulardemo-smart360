import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

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
{id: 3, name: 'status 3'},
];

selectedTransitionObject: any;
editedTransitionObject: any;

transition_objects = [
{id: 1, name: 'Registration'},
{id: 2, name: 'Campaign'},
{id: 3, name: 'Asset'},
];

selectedDepartment: any;

department = [
{id: 1, name: 'departmant 1'},
{id: 2, name: 'departmant 2'},
{id: 3, name: 'departmant 3'},
];

selectedChannel: any;
editedChannel: any;

channels = [
{id: 1, name: 'EMAIL'},
{id: 2, name: 'SMS'},
{id: 3, name: 'WHATSAPP'},
];

selectedTemplate: any;
editedTemplate: any;

templates = [
{id: 1, name: 'Template 1'},
{id: 2, name: 'Template 2'},
{id: 3, name: 'Template 3'},
];

selectedState: any;
editedState: any;
editedCreatedDate: any;

states = [
{id: 1, name: 'Created'},
{id: 2, name: 'Approved'},
{id: 3, name: 'Completed'},
];

collection = { count: 60, data: [
	{
        transition_obj : "Registration",
        state : "Approved",
        channel : "Email",
        template : "Template1",
        status : "Active",
        action : "None",
    },
    {
        transition_obj : "Campaign",
        state : "Created",
        channel : "SMS",
        template : "Template2",
        status : "Active",
        action : "None",
    },
    {
        transition_obj : "Payment",
        state : "Approved",
        channel : "SMS",
        template : "Template3",
        status : "Active",
        action : "None",
    },
    {
        transition_obj : "Campaign",
        state : "Created",
        channel : "SMS",
        template : "Template2",
        status : "Active",
        action : "None",
    },
    {
        transition_obj : "Payment",
        state : "Approved",
        channel : "SMS",
        template : "Template3",
        status : "Active",
        action : "None",
    },
    {
        transition_obj : "Campaign",
        state : "Created",
        channel : "SMS",
        template : "Template2",
        status : "Active",
        action : "None",
    },
    {
        transition_obj : "Payment",
        state : "Approved",
        channel : "SMS",
        template : "Template3",
        status : "Active",
        action : "None",
    },

] };

constructor() {
    this.editedChannel = "EMAIL";
    this.editedState = "Approved";
    this.editedTemplate = "Template3";
    this.editedTransitionObject = "Registration";
    this.editedCreatedDate = "15/08/2020";
}

ngOnInit(): void {
}

}
