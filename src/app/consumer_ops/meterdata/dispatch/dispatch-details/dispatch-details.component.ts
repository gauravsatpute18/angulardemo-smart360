import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus, faRedoAlt, faChevronLeft, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-dispatch-details',
  templateUrl: './dispatch-details.component.html',
  styleUrls: ['./dispatch-details.component.scss']
})
export class DispatchDetailsComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;
  faRedoAlt = faRedoAlt;
  faUser = faUser;

  selectedArea: any;
  area = [
    {id: 1, sarea: 'MR 1'},
    {id: 2, sarea: 'MR 2'},
  ];
  selectedPagination:any;
  pagination = [
    {id: 1, name: '100'},
    {id: 2, name: '200'},
  ];
  selectedStatus: any;
  status = [
    {id: 1, stts: 'status 1'},
    {id: 2, stts: 'status 2'},
  ];

  collection1 = { count: 60, data: [] };
  collection2 = { count: 60, data: [] };
  collection3 = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection1.count; i++) {
      this.collection1.data.push(
        {
          billcycle: i*30 + 10,
          area: "Old Alwal-30",
          status: ['partial', 'complete', 'dispatched', 'notdispatched' ].sort((a, b) => .5 - Math.random())[0],
          duedt: new Date(),
        }
      );
    }
    for (var j = 0; j < this.collection2.count; j++) {
      this.collection2.data.push(
        {
          mru: j + 1,
          consumer: 1353 * 10 *j,
          reading: 378 + 2*j,
          mr: "Rivka Frank",
          status: ['partial', 'complete', 'dispatched', 'notdispatched' ].sort((a, b) => .5 - Math.random())[0],
          disptchdt: new Date(),
          duedt: new Date(),
        }
      );
    }
    for (var k = 0; k < this.collection3.count; k++) {
      this.collection3.data.push(
        {
          id: k+1,
          nme: "Rivka Frank ",
          assign: "50",
          cntc: "+91 562356890" + k,
        }
      );
    }
  };

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  ngOnInit(): void {
  }

}
