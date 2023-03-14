import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'smart360-consumer-care-services',
  templateUrl: './consumer-care-services.component.html',
  styleUrls: ['./consumer-care-services.component.scss']
})
export class ConsumerCareServicesComponent implements OnInit {

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

  selectedServiceCategory = '';
  serviceCategory  = [
    {id: 1, srvccat: 'Category 1'},
    {id: 2, srvccat: 'Category 2'},
  ];

  selectedServiceSubCategory = '';
  serviceSubCategory  = [
    {id: 1, srvcsubcat: 'Category 1'},
    {id: 2, srvcsubcat: 'Category 2'},
  ];

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          srvcId: i + 199242,
          srvccat: "Maintenance",
          srvcsubcat: "Meter Fixing",
          reqOn: new Date(),
          status: ['resolved', 'unresolved', 'pending'].sort((a, b) => .5 - Math.random())[0],
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
