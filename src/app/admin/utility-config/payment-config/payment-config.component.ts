import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faPen, faMapMarkerAlt, faPrint, faTimesCircle, faTrash, faCalendarAlt, faFileCsv, faFilePdf, faFileExcel, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'smart360-payment-config',
  templateUrl: './payment-config.component.html',
  styleUrls: ['./payment-config.component.scss']
})
export class PaymentConfigComponent implements OnInit {

faChevronLeft = faChevronLeft;
faChevronRight = faChevronRight;
faPen = faPen;
faMapMarkerAlt = faMapMarkerAlt;
faPrint = faPrint;
faTimesCircle = faTimesCircle;
faTrash = faTrash;
faCalendarAlt = faCalendarAlt;
faFileCsv = faFileCsv;
faFilePdf = faFilePdf;
faFileExcel = faFileExcel;
faEye = faEye;
faPlus = faPlus;

scrollOptions = { 
autoHide: true, 
scrollbarMinSize: 67,
scrollbarMaxSize: 180,
};

selectedStatus: any;
status = [
{id: 1, name: 'status 1'},
{id: 2, name: 'status 2'},
];

selectedDepartment: any;
department = [
{id: 1, name: 'Finance'},
{id: 2, name: 'Marketing'},
{id: 3, name: 'Billing'},
];
model: NgbDateStruct;
dtOptions: DataTables.Settings = {};
paymode: FormGroup;

selectedYesNo = true;
adjustbilltype: FormGroup;

files: File[] = []; 
onSelect(event) {
	console.log(event);
	this.files.push(...event.addedFiles);
}
onRemove(event) {
	console.log(event);
	this.files.splice(this.files.indexOf(event), 1);
}

public showrcpt:boolean = false
public showbtn:boolean = true
submitBill() {
this.showrcpt = true;
this.showbtn = false;
}

selectedPayChannel = '';
payChannel = [
{id: 1, paychnl: 'Channel 1'},
{id: 2, paychnl: 'Channel 2'},
{id: 3, paychnl: 'Channel 3'},  
];
selectedPayType = 'Refund';
payType = [
{id: 1, paytp: 'Subscription'},
{id: 2, paytp: 'Refund'},
];
selectedPagination:any;
pagination = [
{id: 1, name: '10'},
{id: 2, name: '20'},
];

selectedMonth = '';
month = [
{id: 1, name: 'Jan'},
{id: 2, name: 'Feb'},
{id: 3, name: 'March'},  
];
dtOptions2 = {}
collection = { count: 12, data: [] };

constructor( private router: Router, private fb: FormBuilder ) { 
//Create dummy data
for (var i = 0; i < this.collection.count; i++) {
  this.collection.data.push(
    {
      utility: ['Infra mark'],
      channel: ['PayTm','Phonpe','Google Pay','PayU'].sort((a, b) => .5 - Math.random())[0],
      mode: ['Cash','Digital','Cheque','DD'].sort((a, b) => .5 - Math.random())[0],
      billPeriod: "27 Nov 2019 to 03 Mar 2020",
      created_by:'Admin',
      date: new Date(),
      status: ['active', 'inactive'].sort((a, b) => .5 - Math.random())[0],
    }
  );
this.adjustbilltype = this.fb.group({            
billtype: '',
});

this.dtOptions2 = {
  pageLength: 12,
};

this.paymode = this.fb.group({            
  paymodetype: 'cash',
});
}
}

ngOnInit(): void {

}

}
