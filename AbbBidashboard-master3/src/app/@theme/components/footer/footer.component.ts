import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <div><img src="./assets/images/IPROD_logo.png" style="width:150px"></div>
  <div class="created-by">All rights reserved. © Copyright
    <b><a href="https://id4-realms.com/" target="_blank"> iD4 Realms</a></b>2020</div>
    <div class="socials created-by">
       <p href="#">{{ date | date:'MMM d, y | h:mm:ss a' }}</p>
    </div>
    `,
})
export class FooterComponent {

  currentLocale: any;
  isTwelveHrFormat: false;
  date: Date;

  constructor() {
    Observable.interval(1000)
      .subscribe((val) => { this.date = new Date(); });

  }
}
