import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import * as $ from 'jquery';

@Component({
  selector: 'smart360-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.scss']
})
export class TenantsListComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  mainData = [];
  table;

  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  // dtOptions: DataTables.Settings = {};
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

  selectedUtility: any;
  utility = [
    {id: 1, name: 'utility 1'},
    {id: 2, name: 'utility 2'},
  ];

  selectedCity: any;
  city = [
    {id: 1, name: 'City 1'},
    {id: 2, name: 'City 2'},
  ];

  selectedType: any;
  type = [
    {id: 1, name: 'Source Type 1'},
    {id: 2, name: 'Source Type 2'},
  ];
  selectedStatus:any;
  status = [
    {id: 1, name: 'success'},
    {id: 2, name: 'unfinished'},
    {id: 2, name: 'warning'},
  ];

  selectedRegion:any;
  region = [
    {id: 1, name: 'Region 1'},
    {id: 2, name: 'Region 2'},
    {id: 2, name: 'Region 3'},
  ];
  selectedCountry :any;
  country = [
    {id: 1, name: 'Country 1'},
    {id: 2, name: 'Country 2'},
    {id: 2, name: 'Country 3'},
  ];
  selectedSubscription:any;
  subscription = [
    {id: 1, name: 'subscription 1'},
    {id: 2, name: 'subscription 2'},
    {id: 2, name: 'subscription 3'},
  ];
  collection = { count: 60, data: [] };

  constructor(private router: Router) { 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          tenant: "Tenant " + (i + 1),          
          no: "0015" + (i + 1),
          utility: "Gas",
          Subsciption:"Subsciption 1",
          status: ['rejected', 'success', 'warning', 'unfinished'].sort((a, b) => .5 - Math.random())[0],
          mobile: "+91 145 546 785" + (i + 1),
          email: "frank@gmail.com",
          area: "New Jersey",
          date: new Date(),
          consumers:"500",
          type:"Type 1",
          country:"USA",
        }
      );
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
    $(document).ready(function(){
      $('.child-table').each(function() {
        $(this).addClass('foo');
      });
    });    
  };

  ngAfterViewInit() {
    this.datatableElement.dtInstance.then(table => {
      // console.log(table);
      this.table = table;
    });
  };

  addChildTable(rowInstance) {
    const row = this.table.row(rowInstance);
    const data = this.table.row(rowInstance).data()
    // console.log(data);
    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
    }
    else {
      const childTable = this.getTable();
      row.child(childTable).show();
    }    
  };

  getTable() {
    return `
    <table class="pr-datatable table child-table">
      <thead>
        <th class="sm-col">&nbsp;</th>
        <th>Address</th>
        <th>Street</th>
        <th>State/Province/Region </th>
        <th>City</th>
        <th>Postal Code</th>
        <th>Area</th>
        <th>Sub Area</th>
      </thead>
      <tbody>
        <td class="sm-col">&nbsp;</td>
        <td>Lorem ipsum dolor</td>
        <td>3964 Small Street</td>
        <td>USA</td>
        <td>New York</td>
        <td>568923</td>
        <td>AL- 35573</td>
        <td>AL- 35573</td>
      </tbody>
    </table>`};

}
