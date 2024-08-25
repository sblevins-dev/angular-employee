import { Component, inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ManagerDropdownComponent } from "../../../shared/components/manager-dropdown/manager-dropdown.component";
import { EmployeeService } from '../../services/employee-service.service';
import Employee from '../../models/Employee';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, ManagerDropdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  employeeService: EmployeeService = inject(EmployeeService);
  managedEmployees: Employee[] = [];

  ngOnInit(): void {
      this.employeeService.managedEmployees$.subscribe(employees => {
        this.managedEmployees = employees;
      })
  }
}
