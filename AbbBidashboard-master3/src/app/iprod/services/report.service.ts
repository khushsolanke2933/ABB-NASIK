import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../const';


@Injectable({
  providedIn: 'root',
})
export class ReportService {

  constructor(private http: HttpClient) { } 

  getReportDataByCurrentDate(currentDate: string): Observable<any> {
    let param = new HttpParams();
    param = param.append('currentDate', currentDate);
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`${BASE_URL}/shortReport/dataByCurrentDate`, { params: param });
  }

  getMachineParameter(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`${BASE_URL}/machine-paramter/find-all`);
  }

  getReportDate(fromdate: string, toDate: string): Observable<any> {
    let param = new HttpParams();
    param = param.append('fromDate', fromdate);
    param = param.append('toDate', toDate);
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`${BASE_URL}/shortReport/serachByDate`, { params: param });
  }

  exportExcel(fromdate: string, toDate: string): Observable<Blob> {
    let param = new HttpParams();
    param = param.append('fromDate', fromdate);
    param = param.append('toDate', toDate);
    return this.http.get(`${BASE_URL}/shortReport/exportToExcel`, { responseType:'blob' ,params: param });
  }

  getReportSrNumber(serialNumber: string): Observable<any> {
    let param = new HttpParams();
    param = param.append('serialNumber', serialNumber);
    return this.http.get<any>(`${BASE_URL}/shortReport/serachBySrNumber`, { params: param });
  }
}
