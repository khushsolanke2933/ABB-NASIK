import { BASE_URL } from './../const';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../users/user.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient, private router: Router, private toastrService: NbToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get currentUserSub() {
    return this.currentUserSubject;
  }

  login(username: string, password: string) {
    return this.http.post<User>(`${BASE_URL}/login/authenticate?userName=${username}&userPassword=${password}`,
      {}).subscribe((user: User) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        if (user != null) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.router.navigate(['../iprod/dashboardlive']);
          this.toastrService.success('', 'Login Success');
        }else{
          this.toastrService.danger('', 'Login Failed');
        }
        return user;
      }, 
      error => {
        this.toastrService.danger('', 'Login Failed');
      });
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.clear();
    this.currentUserSubject.next(null);
  }

}
