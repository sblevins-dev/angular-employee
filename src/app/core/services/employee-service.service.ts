import { Injectable } from '@angular/core';
import Employee from '../models/Employee';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8000/api/Employee'

  private managerSource = new BehaviorSubject<Employee[]>([]);
  managers$ = this.managerSource.asObservable();

  private selectedManagerSource = new BehaviorSubject<Employee | null>(null);
  selectedManager$ = this.selectedManagerSource.asObservable();

  private managedEmployeesSource = new BehaviorSubject<Employee[]>([]);
  managedEmployees$ = this.managedEmployeesSource.asObservable();

  constructor(private http: HttpClient) { }

  getManagers(): void {
    this.http.get<Employee[]>(`${this.apiUrl}/admin`)
      .pipe(
        tap(managers => this.managerSource.next(managers))
      )
      .subscribe();
  }

  fetchManagedEmployees(managerId: number): void {
    this.http.get<Employee[]>(`${this.apiUrl}/admin/${managerId}/employees`)
      .pipe(
        tap(employees => this.managedEmployeesSource.next(employees))
      )
      .subscribe();
  }

  selectManager(manager: Employee): void {
    this.selectedManagerSource.next(manager);

    if (manager) {
      this.fetchManagedEmployees(manager.id);
    }
  }
}
