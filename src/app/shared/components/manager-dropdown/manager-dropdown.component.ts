import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import Employee from '../../../core/models/Employee';
import { EmployeeService } from '../../../core/services/employee-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manager-dropdown',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './manager-dropdown.component.html',
  styleUrl: './manager-dropdown.component.css'
})
export class ManagerDropdownComponent implements OnInit {
  employeeService: EmployeeService = inject(EmployeeService);
  managers$ = this.employeeService.managers$;

  selectedManager: Employee | null = null;

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.employeeService.getManagers();
  }

  onSelectManager(selectedManager: Employee | null): void {
    if (selectedManager) {
      this.employeeService.selectManager(selectedManager);
    }
  }
}
