import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink],
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
