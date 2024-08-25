import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./core/components/home/home.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { AddEmployeeComponent } from './core/components/add-employee/add-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, AddEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedManagerId: number | null = null;

  onManagerSelected(managerId: number): void {
    this.selectedManagerId = managerId;
  }

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
