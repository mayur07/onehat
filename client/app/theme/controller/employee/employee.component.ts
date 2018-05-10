import { Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: 'employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
    employeeList=[];
    selectedEmployee: any;

    constructor(private router: Router) {
        this.employeeList = [{name:'Mangesh', type:'PAYG', onProject:'YES',id:1},{name:'Mangesh', type:'SUB-CONTRACTOR', onProject:'YES',id:2},{name:'Mangesh', type:'SUB-CONTRACTOR', onProject:'NO',id:3}]
    }

    ngOnInit(){

    }

    addEmployee(){
        console.log('Hi In add employee');
        this.router.navigate(['/employee/add-employee']);
    }

    editEmployee(employee){
        console.log("Edit employee :-", employee);
        this.router.navigate(['/employee/edit-employee',employee.id]);
    }
}