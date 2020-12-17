import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {

  constructor(protected refer: NbDialogRef<AlertComponent>) { }

  ngOnInit() {
  }

  alertok() {
    this.refer.close(true);

  }
  notok() {
    this.refer.close(false);
  }

}
