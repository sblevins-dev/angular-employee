import { Injectable } from '@angular/core';
import Employee from '../models/Employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8000/api/Employee'
  managers$: Employee[] = [];

  constructor(private http: HttpClient) { 
    // this.managers$ = [
    //   {
    //     id: 1,
    //     lastname: 'Smith',
    //     firstname: 'Tim',
    //   },
    //   {
    //     id: 2,
    //     lastName: 'Wozoski',
    //     firstName: 'Mike'
    //   }
    // ]
  }

  getEmployeeAdmins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin`);
  }

  getEmployeesByAdmin(adminId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/${adminId}/employees`);
  }
}
