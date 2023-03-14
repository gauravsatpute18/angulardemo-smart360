import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'smart360-salesandmarketing',
  templateUrl: './salesandmarketing.component.html',
  styleUrls: ['./salesandmarketing.component.scss']
})
export class SalesandmarketingComponent implements OnInit {

  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
