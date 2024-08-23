import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AddEmployeeComponent } from './core/components/add-employee/add-employee.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: "add",
        component: AddEmployeeComponent,
        title: "Add Employee"
    }
];
