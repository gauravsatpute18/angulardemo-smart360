import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'smart360-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  selected;
  dtOptions: DataTables.Settings = {};
  model: NgbDateStruct;
  date: {year: number, month: number}; 



  faTrash = faTrash;
  faCalendarAlt = faCalendarAlt;
  faPrint = faPrint;
  faFileCsv = faFileCsv;
  faFilePdf = faFilePdf; 
  faFileExcel = faFileExcel;
  faEye = faEye;
  faPlus = faPlus;

  selectedGroup:any;
  group = [
    {id: 1, name: 'Group 1'},
    {id: 2, name: 'Group 2'},
  ];

  selectedType:any;
  type = [
    {id: 1, name: 'Domestic'},
    {id: 2, name: 'Commercial'},
  ];

  selectedPagination:any;
  pagination = [
    {id: 1, name: '50'},
    {id: 2, name: '100'},
    {id: 3, name: '200'},
  ];


  selectedUtility: any;
  utility = [
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
  ];

  selectedSubCategory: any;
  subCategory = [
    {id: 1, name: 'SubCategory 1'},
    {id: 2, name: 'SubCategory 2'},
  ];

  selectedCity: any;
  city = [
    {id: 1, name: 'City 1'},
    {id: 2, name: 'City 2'},
  ];

  selectedArea: any;
  area = [
    {id: 1, name: 'Area 1'},
    {id: 2, name: 'Area 2'},
  ];

  selectedSubArea: any;
  subArea = [
    {id: 1, name: 'SubArea 1'},
    {id: 2, name: 'SubArea 2'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'Finished'},
    {id: 2, name: 'Pending'},
    {id: 3, name: 'Rejected'},
  ];

  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          name: "Name" + (i + 1),
          campaignid: "0019924" + i,
          _type:"Domestic",
          status: ['danger', 'success', 'warning'].sort((a, b) => .5 - Math.random())[0],
          consumers: "500",
          area: "Area 1",
          source: "Vendor x",
          raisedOn: new Date(),
        }
      );
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 50,
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
  }
  renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
  }

}
