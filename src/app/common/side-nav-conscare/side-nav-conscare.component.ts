import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'smart360-side-nav-conscare',
  templateUrl: './side-nav-conscare.component.html',
  styleUrls: ['./side-nav-conscare.component.scss']
})
export class SideNavConscareComponent implements OnInit {

  faPlus = faPlus;

  constructor() {}

  status: boolean = false;
  bClickEvent(){
      this.status = !this.status;
      $(".menubttn").parents(".pr-side-navbar").toggleClass("open-slide");
      $(".main-container").toggleClass("add-w");
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $(".menubttn").parents(".pr-side-navbar").removeClass("open-slide");    
      // $(".pr-side-navbar .nav-item .nav-link").on('click', function(){
      //   $(".pr-sidebar-modal .close").trigger("click");
      // });  
    });
  }  

}
