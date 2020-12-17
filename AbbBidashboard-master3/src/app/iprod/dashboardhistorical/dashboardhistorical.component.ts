import { Component, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-dashboardhistorical',
  templateUrl: './dashboardhistorical.component.html',
  styleUrls: ['./dashboardhistorical.component.scss']
})
export class DashboardhistoricalComponent implements OnInit {

  elements: any = [
    { Shift: 'A', Planned: '20', Actuals: '18', Production: '87', FPY: '88', Capacity_Utilization: '80', Uptime: '06:58:50', CPANEL: '' },
    { Shift: 'B', Planned: '20', Actuals: '18', Production: '98', FPY: '90', Capacity_Utilization: '80', Uptime: '06:58:50', CPANEL: '' },
    { Shift: 'C', Planned: '20', Actuals: '18', Production: '78', FPY: '92', Capacity_Utilization: '80', Uptime: '06:58:50', CPANEL: '' },
  ];

  headElements = ['Shift', 'Planned', 'Actuals', 'Production(%)', 'FPY(%)', 'Capacity_Utilization(%)', 'Uptime(hh:mm:ss)', 'CPANEL'];


  ngOnInit() {
  }

  min: Date;
  max: Date;
  selectedItem = '';

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addMonth(this.dateService.today(), -1);
    this.max = this.dateService.addMonth(this.dateService.today(), 1);
  }


}
