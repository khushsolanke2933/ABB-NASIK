import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-oeemodal',
  templateUrl: './oeemodal.component.html',
  styleUrls: ['./oeemodal.component.scss']
})
export class OeemodalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  elements1: any = [
    { Unit: 'CB', Line: 'Line #1', Planned: '20', Actuals: '18', Production: '78', FPY: '88', Uptime: '06:58:50', Downtime: '03:58:50', Losstime: '01:58:50' },
    { Unit: 'OVR', Line: 'Line #1', Planned: '20', Actuals: '18', Production: '78', FPY: '90', Uptime: '06:58:50', Downtime: '03:58:50', Losstime: '01:58:50' },
    { Unit: 'MA', Line: 'Line #1', Planned: '20', Actuals: '18', Production: '78', FPY: '92', Uptime: '06:58:50', Downtime: '03:58:50', Losstime: '01:58:50' },
  ];

  headElements1 = ['Unit', 'Line', 'Planned', 'Actuals', 'Production(%)', 'FPY%', 'Uptime(hh:mm:ss)', 'Downtime(hh:mm:ss)', 'Losstime(hh:mm:ss)'];

}
