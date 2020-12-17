import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './iprod-menu';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'ngx-iprod',
  templateUrl: './iprod.component.html',
  styleUrls: ['./iprod.component.scss'],
})
export class IprodComponent implements OnInit {

   menu = MENU_ITEMS;

  constructor(private loginservice: AuthenticationService) { }

  ngOnInit() {

  }




}
