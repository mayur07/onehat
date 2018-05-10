import { Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: 'updateEmployee.component.html'
})

export class UpdateEmployeeComponent implements OnInit {
    employee:any;

    constructor(private router: Router) {
        this.employee = {
            name:null,
            contractor:null,
            phoneNumber:null,
            type:null,
            addressLine1:null,
            addressLine2:null,
            addressLine3:null,
            qualification:null,
            rate:null,
            super:null,
            complianceCards:null,
            drivingLicense:null,
            tickets:null,
            otherDetails:null,
            subContractorAmount:null
        }
    }

    ngOnInit(){

    }

    updateInfo(){
        this.cancel();
    }

    cancel(){
        this.router.navigate(['/employee']);
    }
}