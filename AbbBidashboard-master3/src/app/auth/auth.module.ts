import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import {
  NbMenuModule, NbInputModule, NbTabsetModule, NbCheckboxModule, NbLayoutModule,
  NbSidebarModule, NbCardModule, NbIconModule, NbButtonModule, NbSelectModule, NbAlertModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { IprodModule } from '../iprod/iprod.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from '../iprod/services/authentication.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbMenuModule,
    NbInputModule,
    NbTabsetModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    NbEvaIconsModule,
    RouterModule,
    NbAlertModule,
    IprodModule,
  ],
  providers: [AuthenticationService]
  
})
export class AuthModule { }
