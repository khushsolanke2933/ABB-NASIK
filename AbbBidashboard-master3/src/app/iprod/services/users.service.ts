import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user.model';
import { Observable } from 'rxjs';
import { BASE_URL } from '../const';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/User/view`);
  }
  createUser(value: any): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/login/add`, value);
  }
  updateUser(value: any): Observable<any> {
    return this.http.put<any>(`${BASE_URL}/User/update`, value);
  }
  removeUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/User/delete?userId=` + userId);
  }
  changePassword(value: any): Observable<any> {
    return this.http.put<any>(`${BASE_URL}/User/changePassword`, value);
  }

}
