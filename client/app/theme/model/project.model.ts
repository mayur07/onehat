export interface employee {
    name: string,
    code: string
}
export class projectModel {
    quoteId: string;
    name: string;
    quote_date: Date;
    scopeDetail: string;
    projectInfo: string;
    address: Address = new Address();
    sightType: string;
    subcontractor: string;
    contractor: string;
    employeeType: string;
    employees: string[];
    cost: string;
    manager: string;
    startDate: Date;
    status: String;

}
export class Address {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}