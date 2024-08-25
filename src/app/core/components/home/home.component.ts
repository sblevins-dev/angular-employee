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
export class HomeComponent {
  // employeeService: EmployeeService = inject(EmployeeService);
  // employees: Employee[] = [];
  // @Input() managerId!: number;

  // selectedManagerId: number | null = null;

  // onManagerSelected(managerId: number): void {
  //   this.selectedManagerId = managerId;
  // }

  // // ngOnInit() {
  // //   this.loadManagedEmployees(3);
  // // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes['managerId'] && this.managerId) {
  //     this.loadManagedEmployees();
  //     console.log(this.managerId)
  //   }
  // }

  // loadManagedEmployees(): void {
  //   this.employeeService.getEmployeesByAdmin(this.managerId).subscribe(data => {
  //     this.employees = data;
  //     console.log(this.employees)
  //   })
  // }
}
