import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ManagerDropdownComponent } from "../../../shared/components/manager-dropdown/manager-dropdown.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, ManagerDropdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  employees = [
    {
      id: 1,
      lastname: 'Smith',
      firstname: 'Tim',
    },
    {
      id: 2,
      lastname: 'Wozoski',
      firstname: 'Mike'
    }
  ]
}
