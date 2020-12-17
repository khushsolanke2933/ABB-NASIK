import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
  NbAuthComponent,
} from '@nebular/auth';
import { LoginComponent } from './auth/login/login.component';
import { IprodComponent } from './iprod/iprod.component';
import { DetailedReportsComponent } from './iprod/reports/detailed-report/det-reports.component';

const routes: Routes = [
  
  {
    path: 'iprod',
    loadChildren: () => import('./iprod/iprod.module')
      .then(m => m.IprodModule),
  },
  {
    path: 'auth',
    component: IprodComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
  { path:'topdf', component: DetailedReportsComponent},
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
