import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { faTrash, faCalendarAlt, faMapMarkerAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'smart360-add-contracts',
  templateUrl: './add-contracts.component.html',
  styleUrls: ['./add-contracts.component.scss']
})
export class AddContractsComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf;
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;
  
  surveyName = 'Contract XYWS';
  contractPeriod = '90 Days';
  potentialDemand = '';
  rate = '';
  contractAmount = '';
  // toaster
  showtoast = false; 
  autohide = true;

  public surveyDetailsCollapse = false;
  public assignVendorCollapse = true;

  selectedSurveyType = 'Source A'; 
  selectedSurveyObj = '';
  selectedUtility: any;
  selectedCity: any;
  selectedCurrency: any;
  selectedCategory:any;
  selectedConsumerNo = '500';

  surveyType = [
    {id: 1, srvy: 'Source A'},
    {id: 2, srvy: 'Source B'},
  ];
  surveyObj = [
    {id: 1, name1: 'XYZ'},
    {id: 2, name1: 'ABC'},
  ];
  currency = [
    {id: 1, name: 'USD'},
    {id: 2, name: 'INR'},
    {id: 3, name: 'YEN'},
  ];
  category=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ];
  utility=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ];
  city=[
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
  ];
  consumerNo=[
    {id: 1, consno: '500'},
    {id: 2, consno: '1000'},
    {id: 3, consno: '2000'},
  ];

  scrollOptions = { 
    autoHide: true, 
    scrollbarMinSize: 67,
    scrollbarMaxSize: 180,
  };

  files: File[] = []; 
  contractSubType: any;
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  // toaster    
  close() {
    this.autohide = false;
    // setTimeout(() => this.autohide = true, 5000);
  }
  addCustomUser = (term) => ({id: term, name: term});


  ngOnInit(): void { 
  
    $(document).ready(function(){
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('a[data-toggle="tab"]').parent(".list-group-item").removeClass("active").removeClass("finished");
      })
      $('#survey-dtls-tab').on('shown.bs.tab', function(e) {  
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#survey-assgnvendor-tab').on('shown.bs.tab', function(e) {
        $('#survey-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");        
        $(this).parent(".list-group-item").addClass("active");
      });
      $('#contract-rvw-sbmt-tab').on('shown.bs.tab', function(e) {
        $('#survey-dtls-tab').parent(".list-group-item").removeClass("active").addClass("finished");    
        $('#survey-assgnvendor-tab').parent(".list-group-item").removeClass("active").addClass("finished");            
        $(this).parent(".list-group-item").addClass("active");
      });



      $("#proceed_assgnvendor").on('click', function(){
        $('#survey-assgnvendor-tab').trigger( "click" );
      });
      $("#survey_vendor_assign").on('click', function(){
        $('#contract-rvw-sbmt-tab').trigger( "click" );
      });
      $("#contract_preview").on('click', function(){
        console.log("end-of-form");
      });
      setTimeout(function(){
      }, 5000);
    });
    
  }

  addContractSubTypeForm(labelName:string, inputType:string) : void{
    
    const div = this.renderer.createElement('div');

    const label = this.renderer.createElement('label');
    const labeltext = this.renderer.createText(labelName);
    this.renderer.appendChild(label, labeltext);
    this.renderer.appendChild(div, label);

    const input = this.renderer.createElement(inputType);
    this.renderer.addClass(input,'form-control');
    this.renderer.appendChild(div, input);

    this.renderer.addClass(div,'col-6');

    this.renderer.appendChild(this.elRef.nativeElement.querySelector('#contract-sub-type'), div);

  }

  addContractSubType(): void{

    this.addContractSubTypeForm("Sub Type","input");
    this.addContractSubTypeForm("Potential Demand","input");
    this.addContractSubTypeForm("Rate","input");
    this.addContractSubTypeForm("Cost Center City","input");
    this.addContractSubTypeForm("Currency","input");
    this.addContractSubTypeForm("Contract Amount","input");
    //alert('Added');

  }

}

