import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NbToastrService, NbComponentStatus, NbGlobalPhysicalPosition } from '@nebular/theme';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  submitted = false;
  invalidLogin = false;
  authenticationService: any;
  title = 'Notification';
  content = `Login successfully!!`;
  error = 'login error';

  constructor(private router: Router, private formBuilder: FormBuilder,
    private loginservice: AuthenticationService, private toastrService: NbToastrService) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.loginform.controls;
  }

  // checkLogin() {
  //   this.loginservice.login({ username: this.loginform.get('username').value, password: this.loginform.get('password').value });

  //   const currentUser = this.loginservice.currentUserValue;

  //   if (currentUser && currentUser.jwtToken) {
  //     this.toastrService.success('', 'Login  successfully');
  //     this.router.navigate(['iprod/batch']);
  //   }
  // else{
  //       // tslint:disable-next-line: no-console
  //       // console.log('inside eerror');
  //       //  this.toastrService.danger('', 'Loginfff error');
  //       sessionStorage.clear();
  //   }
  // }



}
