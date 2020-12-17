import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { DefaultsService } from '../../services/defaults.service';
import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'ngx-short',
  templateUrl: './short-reports.component.html',
  styleUrls: ['./short-reports.component.scss'],
})
export class ShortReportsComponent implements OnInit {
  ngOnInit() {}
}
/*  machine: Machine[];
  reportDataMap: any[];
  registerForm: FormGroup;
  srForm: FormGroup;
  machineParameterMap: any[];
  datePipe: DatePipe = new DatePipe('en-US');
  result: any[];

  constructor(private dialog: NbDialogService, private defaults: DefaultsService, private router: Router,
    private formbuilder: FormBuilder, private reportService: ReportService, private batchService: BatchService) {
  }

  ngOnInit() {

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

      submitDateFilter () {
    let fromDate = this.datePipe.transform(new Date(this.registerForm.get('fromDate').value), 'dd MMM yyyy').toString();
    let toDate = this.datePipe.transform(new Date(this.registerForm.get('toDate').value), 'dd MMM yyyy').toString();

    this.reportService.getReportDate(fromDate, toDate).subscribe(res => {
      this.reportDataMap = res;
    });
  }

  submitSrSearch() {
    let serialNumber = this.srForm.get('serialNumber').value;
    this.reportService.getReportSrNumber(serialNumber).subscribe(res => {
      this.reportDataMap = res;
    })
  }
}*/
