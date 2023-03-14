import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'smart360-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  faPlus = faPlus;

  constructor() {}

  status: boolean = false;
  bClickEvent(){
      this.status = !this.status;
      $(".menubttn2").parents(".pr-side-navbar").toggleClass("open-slide");
      $(".main-container").toggleClass("add-w");
      $("body").toggleClass("hide-popover");
  }

  // public showModal: boolean = false;
  // public modalHovered() {
  //   this.showModal = false;
  // }
  // public modalNotHovered() {
  //   this.showModal = true;
  // }

  ngOnInit(): void {
    $(document).ready(function(){

      // $('body:not(.modal)').click(function (e) {    
      //   setTimeout(function () {
      //   }, 200);
      // });

      $(".menubttn2").parents(".pr-side-navbar").removeClass("open-slide");
      $('.menubttn2').click(function(){
        $(this).toggleClass('open');
      });

      // Disable modal show on click
      // $('.pr-side-navbar a[data-target="#sidebarSurveyModal"]').on( 'click', function(event) {
      //   event.preventDefault()
      //   event.stopPropagation()
      // });

      // For modal close on cross click
      $('.modal').find('.close').on('click', function() {
        $(this).parents('.modal').removeClass('show');
      });

      // For survey modal show on hover
      // $('a[data-target="#sidebarSurveyModal"]').hover(
      //   function() {
      //     $('#sidebarSurveyModal').addClass('show');
      //   }, function() {
      //     setTimeout(function(){ 
      //       $('#sidebarSurveyModal').removeClass('show');
      //     }, 300);
      //   }
      // );

      // For settings modal show on hover
      // $('a[data-target="#sidebarSettingsModal"]').hover(
      //   function(){
      //     $('#sidebarSettingsModal').addClass('show');          
      //   }, function(){
      //     setTimeout(function(){ 
      //       $('#sidebarSettingsModal').removeClass('show');
      //     }, 300); 
      //   }
      // );

      // For users modal show on hover
      // $('a[data-target="#sidebarUsersModal"]').hover(
      //   function(){
      //     $('#sidebarUsersModal').addClass('show');          
      //   }, function(){
      //     setTimeout(function(){ 
      //       $('#sidebarUsersModal').removeClass('show');
      //     }, 300);          
      //   }
      // );  

      // $('a[data-target="#sidebarSurveyModal"], #sidebarSurveyModal').mouseenter(function() { 
      //   $('#sidebarSurveyModal').addClass('show');
      //   $('body').addClass('modal-open');
      // });
      // $('a[data-target="#sidebarSurveyModal"], #sidebarSurveyModal').mouseleave(function() {
      //   setTimeout(function(){ 
      //     $('#sidebarSurveyModal').removeClass('show');
      //     $('body').removeClass('modal-open');
      //   }, 2000);
      // });

      // $('a[data-target="#sidebarSurveyModal"]').mouseover(function(){
      //   $('#sidebarSurveyModal').addClass('show');
      //     $('body').addClass('modal-open');
      // });
      // $('a[data-target="#sidebarSurveyModal"]').mouseout(function(){
      //   setTimeout(function() { 
      //         $('#sidebarSurveyModal').removeClass('show');
      //         $('body').removeClass('modal-open');
      //   }, 2000);
      // });


    });
  }  

}


