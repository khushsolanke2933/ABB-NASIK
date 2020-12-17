
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IprodComponent } from './iprod.component';
import { IprodRoutingModule } from './iprod-routing.module';
import {
  NbMenuModule, NbInputModule, NbLayoutModule, NbTabsetModule, NbSidebarModule,
  NbCardModule, NbCheckboxModule, NbIconModule, NbButtonModule, NbSelectModule,
  NbDialogModule, NbDatepickerModule, NbAlertModule, NbToastrService, NbToastrModule, NbAccordionComponent, NbAccordionModule, NbRadioModule,
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add/add.component';
import { EditUserComponent } from './users/edit/edit.component';
import { KeyComponent } from './users/key/key.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { AlertComponent } from './alert/alert.component';
import { EditalertComponent } from './editalert/editalert.component';
import { EdituseralertComponent } from './users/edit/edituseralert/edituseralert.component';
import { DeleteUseralertComponent } from './users/deleteuseralert/deletealert.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LogoutComponent } from './logout/logout.component';
import { ReportModule } from './reports/report.module';
import { WidgetComponent } from './widget/widget.component';
import { DashboardliveComponent } from './dashboardlive/dashboardlive.component';
import { OeeComponent } from './oee/oee.component';
import { FpyComponent } from './fpy/fpy.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { PlanneddowntimeComponent } from './planneddowntime/planneddowntime.component';
import { CapacityutilizationComponent } from './capacityutilization/capacityutilization.component';
import { UnplanneddowntimeComponent } from './unplanneddowntime/unplanneddowntime.component';
import { PlannedactualComponent } from './plannedactual/plannedactual.component';
import { DashboardhistoricalComponent } from './dashboardhistorical/dashboardhistorical.component';
import { DashboardconsolidatedComponent } from './dashboardconsolidated/dashboardconsolidated.component';
import { AvailabilityComponent } from './oee/availability/availability.component';
import { PerformanceComponent } from './oee/performance/performance.component';
import { QualityComponent } from './oee/quality/quality.component';
import { CustomerfeedbackComponent } from './customerfeedback/customerfeedback.component';
import { OeemodalComponent } from './oee/oeemodal/oeemodal.component';
import { FpymodalComponent } from './fpy/fpymodal/fpymodal.component';



// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [IprodComponent, UsersComponent,
    AddUserComponent, EditUserComponent, KeyComponent
    , AlertComponent,
    EditalertComponent, EdituseralertComponent, DeleteUseralertComponent,

    LogoutComponent,

    WidgetComponent,

    DashboardliveComponent,

    OeeComponent,

    FpyComponent,

    ProductivityComponent,

    PlanneddowntimeComponent,

    CapacityutilizationComponent,

    UnplanneddowntimeComponent,

    PlannedactualComponent,

    DashboardhistoricalComponent,

    DashboardconsolidatedComponent,

    AvailabilityComponent,

    PerformanceComponent,

    QualityComponent,

    CustomerfeedbackComponent,

    OeemodalComponent,

    FpymodalComponent,

  ],
  imports: [
    ReportModule,
    IprodRoutingModule,
    CommonModule,
    FormsModule,
    ThemeModule,
    NbMenuModule,
    NbInputModule,
    NbTabsetModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbAccordionModule,
    NbSidebarModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbRadioModule,
    NbSelectModule,
    NbDatepickerModule,
    NgxEchartsModule,
    NbEvaIconsModule,
    RouterModule,
    ReactiveFormsModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forChild(),

  ],
  entryComponents: [AddUserComponent, EditUserComponent,
    KeyComponent, AlertComponent,
    EditalertComponent, EdituseralertComponent, DeleteUseralertComponent, OeemodalComponent, FpymodalComponent
  ],
})
export class IprodModule { }
