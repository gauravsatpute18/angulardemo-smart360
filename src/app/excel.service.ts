import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  

  // constructor() { }

  // public getData(): any[] {
  //   let datajson;
  //   const workbook = XLSX.read('assets/data/data.xlsx', { type: 'binary' });
  //   const sheetName = workbook.SheetNames[0];
  //   const sheet = workbook.Sheets[sheetName];
  //   datajson = XLSX.utils.sheet_to_json(sheet, { header: 1 })
  //   console.log("ddddddddddddddddddddddddd",datajson)
  //   return XLSX.utils.sheet_to_json(sheet, { header: 1 });
  // }

  private dataUrl = 'assets/data/data.xlsx';

  constructor(private http: HttpClient) { }

  getData() {
    let datajson;
    return this.http.get(this.dataUrl, { responseType: 'arraybuffer' })
      .toPromise()
      .then((data) => {
        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
        // const sheetName = 'registration';
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        datajson = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
        console.log("ddddddddddddddddddddddddd",datajson)
        return XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      });
  }


}
