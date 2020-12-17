
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NbMenuModule, NbInputModule, NbLayoutModule, NbTabsetModule, NbSidebarModule,
    NbCardModule, NbCheckboxModule, NbIconModule, NbButtonModule, NbSelectModule,
    NbDialogModule, NbDatepickerModule, NbAlertModule, NbToastrService, NbToastrModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DetailedReportsComponent } from './detailed-report/det-reports.component';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ShortReportsComponent } from './short-report/short-reports.component';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [DetailedReportsComponent, ReportComponent, ShortReportsComponent],
    imports: [
        ReportRoutingModule,
        CommonModule,
        FormsModule,
        ThemeModule,
        NbMenuModule,
        NbInputModule,
        NbTabsetModule,
        NbCheckboxModule,
        NbLayoutModule,
        NbSidebarModule,
        Ng2SmartTableModule,
        NbCardModule,
        NbIconModule,
        NbButtonModule,
        NbSelectModule,
        NbDatepickerModule,
        NgxEchartsModule,
        NbEvaIconsModule,
        RouterModule,
        ReactiveFormsModule,
        NbToastrModule.forRoot(),
        NbDialogModule.forChild(),
    ],
    entryComponents: [DetailedReportsComponent, ReportComponent, ShortReportsComponent],
})
export class ReportModule { }
