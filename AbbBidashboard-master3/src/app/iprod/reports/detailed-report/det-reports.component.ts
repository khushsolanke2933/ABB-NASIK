import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { DefaultsService } from '../../services/defaults.service';
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-detailed',
  templateUrl: './det-reports.component.html',
  styleUrls: ['./det-reports.component.scss'],
})
export class DetailedReportsComponent implements OnInit {
  ngOnInit():void {
}
}
 
  /* machine: Machine[];
  reportDataMap: any[];
  reportDataMapBySrNo: any[];
  registerForm: FormGroup;
  srForm: FormGroup;
  machineParameterMap: any[];
  datePipe: DatePipe = new DatePipe('en-US');
  result: any[];
  isSubmitted: boolean;

  constructor(private dialog: NbDialogService, private defaults: DefaultsService, private router: Router,
    private formbuilder: FormBuilder, private reportService: ReportService, private batchService: BatchService) {
  }

  ngOnInit() {

    this.isSubmitted =false;

    this.registerForm = this.formbuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
    });

    this.srForm = this.formbuilder.group({
      serialNumber: ['', Validators.required],
    });

    this.batchService.getMachine().subscribe(res => {
      this.machine = res;
    });

    let date: Date = new Date(); 
    let currentDate = this.datePipe.transform(date, 'dd MMM yyyy').toString();
     this.reportService.getReportDataByCurrentDate(currentDate).subscribe(res => {
      this.reportDataMap = res;
      this.reportDataMapBySrNo =res;
     })

    this.reportService.getMachineParameter().subscribe(res => {
      this.machineParameterMap = res.object;
    })

  }

  getLength(str){
if(str==null){
  return 0;
}
else{
 let len = str.length;
 return len;
}
  }

  submitDateFilter() {
    let fromDate = this.datePipe.transform(new Date(this.registerForm.get('fromDate').value), 'dd MMM yyyy').toString();
    let toDate = this.datePipe.transform(new Date(this.registerForm.get('toDate').value), 'dd MMM yyyy').toString();
    this.reportService.getReportDate(fromDate, toDate).subscribe(res => {
      this.reportDataMapBySrNo = res;
      this.isSubmitted =true;
      });

  }
  
  exportToExcel() {

    let fromDate = this.datePipe.transform(new Date(this.registerForm.get('fromDate').value), 'dd MMM yyyy').toString();
    let toDate = this.datePipe.transform(new Date(this.registerForm.get('toDate').value), 'dd MMM yyyy').toString();

    this.reportService.exportExcel(fromDate, toDate).subscribe( x => {
      const blob = new Blob([x], {type: 'application/application/vnd.openxmlformats-officedocument.spreadsheetml.template'});
 
      if(window.navigator && window.navigator.msSaveOrOpenBlob){
       window.navigator.msSaveOrOpenBlob(blob);
       return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      let date: Date = new Date(); 
      let currentDate = this.datePipe.transform(date, 'yyyy-MM-dd_HH:mm:ss').toString();
      link.download = `DetailReport_${currentDate}.xlsx`;
      link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
 
      setTimeout(function(){
        window.URL.revokeObjectURL(data);
        link.remove();
      },100);
 
      });
    }

  submitSrSearch() {
    let serialNumber = this.srForm.get('serialNumber').value;
    this.reportService.getReportSrNumber(serialNumber).subscribe(res => {
      this.reportDataMap = res;
    })
  }} */
