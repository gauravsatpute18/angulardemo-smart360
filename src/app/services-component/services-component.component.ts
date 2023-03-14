import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'smart360-services-component',
  templateUrl: './services-component.component.html',
  styleUrls: ['./services-component.component.scss']
})
export class ServicesComponentComponent implements OnInit {

  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
