import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-edituseralert',
  templateUrl: './edituseralert.component.html',
})
export class EdituseralertComponent implements OnInit {

  constructor(protected refer: NbDialogRef<EdituseralertComponent>) { }

  ngOnInit() {
  }

  alertok() {
    this.refer.close(true);

  }
  notok() {
    this.refer.close(false);
  }

}
