import { Component, inject, OnInit } from '@angular/core';
import { ManagerDropdownComponent } from "../../../shared/components/manager-dropdown/manager-dropdown.component";
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import Employee from '../../models/Employee';
import { EmployeeService } from '../../services/employee-service.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ManagerDropdownComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  employeeService: EmployeeService = inject(EmployeeService);
  selectedManager$: Employee | null = null;
  selectedManagerId: number | undefined = undefined;

  employeeForm = new FormGroup({
    internalId: new FormControl<string>(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    roles: new FormControl('')
  })

  ngOnInit(): void {
    this.employeeService.selectedManager$.subscribe(manager => {
      this.selectedManagerId = manager?.id
    })
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const internalId = this.employeeForm.value;
      const firstname = this.employeeForm.get('firstname')?.value;
      const lastname = this.employeeForm.get('lastname')?.value;

      if (internalId && firstname && lastname && this.selectedManagerId) {
        const newEmployee: Employee = {
          internal_Id: Number(internalId),
          firstname: firstname,
          lastname: lastname,
          managerId: this.selectedManagerId
        }

        this.employeeService.addEmployee(newEmployee).subscribe(() => {
          this.employeeForm.reset();
        })
      }
    }
  }
}
