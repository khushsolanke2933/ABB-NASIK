import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IprodComponent } from './iprod.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { DashboardliveComponent } from './dashboardlive/dashboardlive.component';
import { DashboardhistoricalComponent } from './dashboardhistorical/dashboardhistorical.component';
import { DashboardconsolidatedComponent } from './dashboardconsolidated/dashboardconsolidated.component';
import { CustomerfeedbackComponent } from './customerfeedback/customerfeedback.component';
const routes: Routes = [
  {
    path: '',
    component: IprodComponent,
    // canActivate: [AuthGaurdService],
    children: [

      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGaurdService],
      },

      {
        path: 'dashboardlive',
        component: DashboardliveComponent,
        canActivate: [AuthGaurdService]
      },
      {
        path: 'DashboardHistorical',
        component: DashboardhistoricalComponent,
        canActivate: [AuthGaurdService]
      },
      {
        path: 'DashboardConsolidated',
        component: DashboardconsolidatedComponent,
        canActivate: [AuthGaurdService]
      },
      {
        path: 'CustomerFeedback',
        component: CustomerfeedbackComponent,
        canActivate: [AuthGaurdService]
      },

      {
        path: 'report',
        canActivate: [AuthGaurdService],
        loadChildren: () => import('../iprod/reports/report.module')
          .then(m => m.ReportModule),
      }
    ],
  },
  { path: '', redirectTo: 'dashboardlive', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboardlive' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IprodRoutingModule {
}
