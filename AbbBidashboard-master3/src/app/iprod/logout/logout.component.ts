import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticate: AuthenticationService, private route: Router) {

    this.authenticate.logout();
    this.route.navigate(['iprod/login']);
  }

  ngOnInit() {

  }

}
