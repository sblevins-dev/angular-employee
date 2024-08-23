import { Component } from '@angular/core';
import { ManagerDropdownComponent } from "../../../shared/components/manager-dropdown/manager-dropdown.component";
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ManagerDropdownComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm = new FormGroup({
    internalId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    roles: new FormControl('')
  })
}
