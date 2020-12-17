import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-editalert',
  templateUrl: './editalert.component.html',
})
export class EditalertComponent implements OnInit {

  constructor(protected refer: NbDialogRef<EditalertComponent>) { }

  ngOnInit() {
  }
  alertok() {
    this.refer.close(true);

  }
  notok() {
    this.refer.close(false);
  }

}
