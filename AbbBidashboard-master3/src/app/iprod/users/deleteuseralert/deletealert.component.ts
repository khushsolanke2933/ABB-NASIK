import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-deleteuseralert',
  templateUrl: './deletealert.component.html',
})
export class DeleteUseralertComponent implements OnInit {

  constructor(protected ref: NbDialogRef<DeleteUseralertComponent>) { }

  ngOnInit() {
  }

  alertok() {
    this.ref.close(true);

  }
  notok() {
    this.ref.close(false);
  }

}
