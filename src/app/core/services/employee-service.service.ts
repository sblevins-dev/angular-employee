import { Injectable } from '@angular/core';
import Employee from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  managers$: Employee[] = [];

  constructor() { 
    this.managers$ = [
      {
        id: 1,
        lastName: 'Smith',
        firstName: 'Tim',
      },
      {
        id: 2,
        lastName: 'Wozoski',
        firstName: 'Mike'
      }
    ]
  }
}
