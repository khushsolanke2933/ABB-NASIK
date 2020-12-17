import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../iprod/services/authentication.service';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar id="sidebar" state="compacted" class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent implements OnInit {

  constructor(private login: AuthenticationService) {

  }
  ngOnInit() {
    const loggedUser = this.login.currentUserValue;

    let a = document.getElementById("sidebar");

    if (loggedUser) {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }


  }


}
