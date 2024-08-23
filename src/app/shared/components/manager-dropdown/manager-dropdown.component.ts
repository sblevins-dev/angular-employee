import { Component, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import Employee from '../../../core/models/Employee';
import { EmployeeService } from '../../../core/services/employee-service.service';

@Component({
  selector: 'app-manager-dropdown',
  standalone: true,
  imports: [NgFor],
  templateUrl: './manager-dropdown.component.html',
  styleUrl: './manager-dropdown.component.css'
})
export class ManagerDropdownComponent implements OnInit {
  employeeService: EmployeeService = inject(EmployeeService);
  managers: Employee[] = [];
  
  ngOnInit(): void {
    this.managers = this.employeeService.managers$;
  }
}
