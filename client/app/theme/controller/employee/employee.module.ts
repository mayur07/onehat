import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './../../layouts/layout.module';
import { DefaultComponent } from '../../pages/default/default.component';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './AddEmployee/addEmployee.component';
import { UpdateEmployeeComponent } from './UpdateEmployee/updateEmployee.component';

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': EmployeeComponent,
            },
            {
                'path': 'add-employee',
                'component': AddEmployeeComponent,
            },
            {
                'path': 'edit-employee/:id',
                'component': UpdateEmployeeComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
    ], exports: [
        RouterModule,
    ], declarations: [
        EmployeeComponent,
        AddEmployeeComponent,
        UpdateEmployeeComponent
    ],
})
export class EmployeeModule {
}