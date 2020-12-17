import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerFeedback } from '../customerfeedback/customerfeedback.model';
import { Observable } from 'rxjs';
import { BASE_URL } from '../const';

@Injectable({
  providedIn: 'root'
})
export class CustomerFeedbackService {

  constructor(private http: HttpClient) { }

  getAllCustomerFeedbacks(): Observable<CustomerFeedback[]> {
    return this.http.get<CustomerFeedback[]>(`${BASE_URL}/CustomerFeedback/view`);
  }
}
