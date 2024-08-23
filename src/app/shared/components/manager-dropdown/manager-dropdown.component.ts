import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-manager-dropdown',
  standalone: true,
  imports: [NgFor],
  templateUrl: './manager-dropdown.component.html',
  styleUrl: './manager-dropdown.component.css'
})
export class ManagerDropdownComponent {
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
