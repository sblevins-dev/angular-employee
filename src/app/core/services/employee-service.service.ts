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

  // Get all employees who are an admin
  getManagers(): void {
    this.http.get<Employee[]>(`${this.apiUrl}/admin`)
      .pipe(
        tap(managers => this.managerSource.next(managers))
      )
      .subscribe();
  }

  // Fetch employees supervised by selected manager in dropdown
  fetchManagedEmployees(managerId: number): void {
    this.http.get<Employee[]>(`${this.apiUrl}/admin/${managerId}/employees`)
      .pipe(
        tap(employees => this.managedEmployeesSource.next(employees))
      )
      .subscribe();
  }

  // Dropdown select for manager
  selectManager(manager: Employee | null): void {
    if (manager) {
      this.selectedManagerSource.next(manager);

    if (manager.id !== undefined && manager.id !== null) {
      this.fetchManagedEmployees(manager.id);
    } else {
      console.error('Manager ID is not available')
    }
    } else {
      console.error('Manager is null')
    }
    
  }

  addEmployee(employee: Omit<Employee, 'id'>): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}`, employee)
  }
}
