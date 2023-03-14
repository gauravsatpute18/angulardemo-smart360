import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'smart360-meter-data',
  templateUrl: './meter-data.component.html',
  styleUrls: ['./meter-data.component.scss']
})
export class MeterDataComponent implements OnInit {

  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
