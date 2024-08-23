import { Component } from '@angular/core';
import { ManagerDropdownComponent } from "../../../shared/components/manager-dropdown/manager-dropdown.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ManagerDropdownComponent, RouterLink],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

}
