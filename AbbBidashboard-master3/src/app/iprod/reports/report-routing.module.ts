import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGaurdService } from '../services/auth-gaurd.service';
import { ReportComponent } from './report.component';
import { DetailedReportsComponent } from './detailed-report/det-reports.component';
import { ShortReportsComponent } from './short-report/short-reports.component';
const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    // canActivate: [AuthGaurdService],
    children: [
      {
        path: 'detailed',
        component: DetailedReportsComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: 'short',
        component: ShortReportsComponent,
        canActivate: [AuthGaurdService],
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {
}
