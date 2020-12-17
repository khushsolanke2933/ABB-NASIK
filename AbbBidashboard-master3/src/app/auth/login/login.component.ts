import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import {
  NbAuthSocialLink, NbAuthService, NB_AUTH_OPTIONS, NbAuthResult,
  getDeepFromObject,
} from '@nebular/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../iprod/services/authentication.service';
import { NbToastrService } from '@nebular/theme';
import { User } from '../../iprod/users/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private loggedUser: any;

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];
  rememberMe = false;

  constructor(protected service: NbAuthService, protected loginservice: AuthenticationService,
    private toastrService: NbToastrService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
    this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = false;
    this.loginservice.login(this.user.email, this.user.password);
    this.cd.detectChanges();
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }

  public get currentUserValue(): User {
    console.log(this.currentUserSubject.value);
    return this.currentUserSubject.value;
  }

  ngOnInit() {
  }

}
