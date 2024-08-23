import { Component, inject, Input, OnInit } from '@angular/core';
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
  managers: Employee[] = [];

  ngOnInit() {
    this.managers = this.employeeService.managers$;
  }
}
