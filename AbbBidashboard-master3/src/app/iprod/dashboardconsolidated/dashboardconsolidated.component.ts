import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboardconsolidated',
  templateUrl: './dashboardconsolidated.component.html',
  styleUrls: ['./dashboardconsolidated.component.scss']
})
export class DashboardconsolidatedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  elements: any = [
    { Unit: 'CB', Line: 'Line #1', OEE: '78', Availability: '87', Performance: '88', Quantity: '80' },
    { Unit: 'OVR', Line: 'Line #1', OEE: '78', Availability: '98', Performance: '90', Quantity: '80' },
    { Unit: 'MA', Line: 'Line #1', OEE: '78', Availability: '78', Performance: '92', Quantity: '80' },
  ];

  headElements = ['Unit', 'Line', 'OEE(%)', 'Availability(%)', 'Performance(%)', 'Quantity(%)', 'CPANEL'];

  elements1: any = [
    { Unit: 'CB', Line: 'Line #1', Planned: '20', Actuals: '18', Production: '78', FPY: '88', Uptime: '06:58:50', Downtime: '03:58:50', Losstime: '01:58:50' },
    { Unit: 'OVR', Line: 'Line #1', Planned: '20', Actuals: '18', Production: '78', FPY: '90', Uptime: '06:58:50', Downtime: '03:58:50', Losstime: '01:58:50' },
    { Unit: 'MA', Line: 'Line #1', Planned: '20', Actuals: '18', Production: '78', FPY: '92', Uptime: '06:58:50', Downtime: '03:58:50', Losstime: '01:58:50' },
  ];

  headElements1 = ['Unit', 'Line', 'Planned', 'Actuals', 'Production(%)', 'FPY%', 'Uptime(hh:mm:ss)', 'Downtime(hh:mm:ss)', 'Losstime(hh:mm:ss)'];

}
