import { Component, OnInit } from '@angular/core';
import { faTrash, faCalendarAlt, faPrint, faFileCsv, faFilePdf, faFileExcel, faEye, faPen, faPlus} from '@fortawesome/free-solid-svg-icons';
import { Router,Routes, RouterModule } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'smart360-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
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
  faPen = faPen;
  showtoast = false;
  autohide = true;
  faPlus = faPlus;



  selectedformFactor:any;
  formFactor = [
    {id: 1, name: 'Factor 1'},
    {id: 2, name: 'Factor 2'},
  ];

  selectedPagination:any;
  pagination = [
    {id: 1, name: '50'},
    {id: 2, name: '100'},
    {id: 3, name: '200'},
  ];

  selectedCity: any;
  city = [
    {id: 1, name: 'City 1'},
    {id: 2, name: 'City 2'},
  ];
  selectedType:any;
  type = [
    {id: 1, name: 'Type 1'},
    {id: 2, name: 'Type 2'},
  ];

  selectedSubType:any;
  subtype = [
    {id: 1, name: 'SubType 1'},
    {id: 2, name: 'SubType 2'},
  ];

  selectedUtility: any;
  utility = [
    {id: 1, name: 'Utility 1'},
    {id: 2, name: 'Utility 2'},
  ];

  selectedStatus: any;
  status = [
    {id: 1, name: 'New'},
    {id: 2, name: 'Rejected'},
    {id: 2, name: 'Approved'},
  ];
  selectedDepartment: any;
  department = [
    {id: 1, name: 'Finance'},
    {id: 2, name: 'Marketing'},
    {id: 3, name: 'Billing'},
  ];
  selectedRole: any;
  role = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'Accounting'},
    
  ];
  selecteddept:any;
  dept = [
    {id: 1, name: 'Marketing'},
    {id: 2, name: 'Consumer Care'},
    
  ];

  collection = { count: 60, data: [] };

  constructor(private router: Router) {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          name: "Name" + (i + 1),
          userId: "0019924" + i,
          status: ['danger', 'success', 'warning'].sort((a, b) => .5 - Math.random())[0],
          cantact: "201-285-6456",
          email: "thomos@gmail.com",
          department: "Finance",
          role: "Admin",
          city:"Chicago",
          utility:"Beechnut Mud"
        }
      );
    }
   }

   renderDetail(id: number){
    this.router.navigateByUrl('/details');
    console.log(id);
  }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 50,
    };
    
    $("#proceed_4").on('click', function(){
      console.log("end-of-form");
    });
  }

}
