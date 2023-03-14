import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'smart360-template-config',
  templateUrl: 'template-config.component.html',
  styleUrls: ['./template-config.component.scss']
})
export class TemplateConfigComponent implements OnInit {
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
    {id: 1, name: 'Mahavaitaran'},
    {id: 2, name: 'BGL'},
    {id: 3, name: 'MNGL'},
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
    
    created_date: any;

    create_date = [
      {id: 1,name:'8 August 2020'}
    ]
    collection = { count: 60, data: [
      {
            transition_obj : "Mahavitaran",
            state : "Approved",
            channel : "Email",
            template : "Template1",
            status : "Active",
            action : "None",
            create_date: '8 August 2020',
        },
        {
            transition_obj : "BGL",
            state : "Created",
            channel : "SMS",
            template : "Template2",
            status : "Active",
            action : "None",
            create_date: '8 August 2020',
        },
        {
            transition_obj : "Mahavitaran",
            state : "Approved",
            channel : "SMS",
            template : "Template3",
            status : "Active",
            action : "None",
            create_date: '8 August 2020',
        },
        {
            transition_obj : "MNGL",
            state : "Created",
            channel : "SMS",
            template : "Template2",
            status : "Active",
            action : "None",
            create_date: '8 August 2020',
        },
        {
            transition_obj : "BGL",
            state : "Approved",
            channel : "SMS",
            template : "Template3",
            status : "Active",
            action : "None",
            create_date: '8 August 2020',
        },
    
    ] };

    
    
    

    constructor() {
      this.editedChannel = "EMAIL";
      this.editedState = "Approved";
      this.editedTemplate = "Template3";
      this.editedTransitionObject = "BGL";
      this.editedCreatedDate = "15/08/2020";
  }

  ngOnInit(): void {
  }
  
  showtoast = false;
  autohide = true;

save_label() {
    this.showtoast = true;
}

addtoast = false;


add_label() {
    this.addtoast = true;
}
}