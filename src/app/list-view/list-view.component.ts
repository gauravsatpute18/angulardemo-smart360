import { Component, OnInit } from '@angular/core';
import { Router,Routes, RouterModule } from '@angular/router';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ExcelService } from '../excel.service';


@Component({
  selector: 'smart360-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
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

  datan: any[];
  headers: string[];

  selectedPagination:any;
  pagination = [
    {id: 1, name: '50'},
    {id: 2, name: '100'},
    {id: 3, name: '200'},
  ];

  selectedType:any;
  type = [
    {id: 1, name: 'Domestic 1'},
    {id: 2, name: 'Domestic 2'},
  ];

  selectedVendor:any;
  vendor = [
    {id: 1, name: 'Vendor 1'},
    {id: 2, name: 'Vendor 2'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
  ];

  selectedCategory: any;
  category = [
    {id: 1, name: 'PNG'},
    {id: 2, name: 'CNG'},
  ];

  selectedSubCategory: any;
  subCategory = [
    {id: 1, name: 'Domestic'},
    {id: 2, name: 'Commercial'},
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
    {id: 2, name: 'Rejected'},
  ];

  collection = { count: 6, data: [] };

  constructor(private router: Router, private excelService: ExcelService) { 
    //Create dummy data
    // for (var i = 0; i < this.collection.count; i++) {
    //   this.collection.data.push(
    //     {
    //       id: i + 1,
    //       name: "Name" + (i + 1),
    //       enquiryNo: "0019924" + i,
    //       status: ['danger', 'success', 'warning'].sort((a, b) => .5 - Math.random())[0],
    //       mobileNo: "201-285-6456",
    //       area: "Area 1",
    //       source: "Branch",
    //       raisedOn: new Date(),
    //       category:"PNG",
    //       sub_category:"Domestic"
    //     }
    //   );
    // }
  }

  abc;
  xyz;

  ngOnInit(): void {
    // this.datan = this.excelService.getData();
    // this.headers = this.datan.shift();

    this.excelService.getData().then(data => {
      this.datan = data;
      this.headers = this.datan.shift();

      console.log("printing data=========",this.datan)
      console.log("printing headers-=============",this.headers)
    });

    this.abc=this.datan
    this.xyz=this.headers

    console.log("printing cccdata=========",this.abc)
    console.log("printing ccheaders-=============",this.xyz)

    

    this.dtOptions = {
      pageLength: 50,
    };
    setTimeout(function(){
      $('.sec-ttl-wrap').addClass('hide-it');
    }, 5000);
  }


  getCellValue(row: any[], index: number): string {
    return row[index];
  }

  renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
  }
  
  // onPageChange(event) {
  //   console.log(event);
  //   this.config.currentPage = event;
  // }

}
