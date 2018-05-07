import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem, MenuItem, Message } from 'primeng/api';
import { QuoteModel } from "../../model/quote.model";
import { projectModel, Address, MaterialOrderModel, material } from "../../model/project.model";

@Component({
    templateUrl: 'project.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
    constructor(private http: HttpClient, private _router: Router, ) {

    }
    employeeList: SelectItem[];
    activeQuotes: QuoteModel[] = [];
    selectedProject: projectModel;
    projectList: projectModel[] = [];
    step1_projectform = false;
    step2_jobprestart = false;
    step3_budget = false;
    step4_variations = false;
    step5_material = false;
    isComplete = false;
    @ViewChild('docForm') el: ElementRef;
    projectTable = true;
    items: MenuItem[];
    selectedQuote: QuoteModel;
    msgs: Message[] = [];
    budgetList: any[] = [];
    activeIndex: number = 0;
    materialList: material[]=[];
    materialOrderList: MaterialOrderModel[];
    uploadedFiles: any[] = [];
    today=Date.now();
    ngOnInit() {

        this.selectedProject = new projectModel();
        this.selectedProject.address = new Address();
        this.setSteps();
        this.http.get('api/quote').subscribe(quoteData => {
            this.http.get('api/project').subscribe(projectData => {
                this.projectList = <projectModel[]>projectData;
                let quotes: QuoteModel[] = <QuoteModel[]>quoteData;
                this.activeQuotes = quotes.filter(q => q.outcome == 'Success');
                this.activeQuotes = this.activeQuotes.map(q => {
                    q.projectStatus = 'Incomplete';
                    if (this.projectList.filter(p => p.quoteId == q._id).length) {
                        q.projectStatus = 'Complete';
                    }
                    return q;
                })
            });
        });

        // let data = this.getData();
        // for (var i = data.length - 1; i >= 0; i--) {
        //     if (data[i]['status'] == 'Complete')
        //         this.quotes.push(data[i]);
        // }

        this.employeeList = [{
            label: 'jack',
            value: '001'
        },
        {
            label: 'peter',
            value: '002'
        },
        {
            label: 'parker',
            value: '003'
        }, {
            label: 'sundar',
            value: '004'
        },
        {
            label: 'kyle',
            value: '005'
        }];
    }
    setSteps() {
        this.items = [{
            label: 'Proect Detail',
            command: (event: any) => {
                this.activeIndex = 0;
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Job Prestart',
            command: (event: any) => {
                this.activeIndex = 1;
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            }
        },
        {
            label: 'Budget',
            command: (event: any) => {
                this.activeIndex = 2;
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        },
        {
            label: 'Variation',
            command: (event: any) => {
                this.activeIndex = 3;
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        },
        {
            label: 'Material Order',
            command: (event: any) => {
                this.activeIndex = 4;
                this.msgs.length = 0;
                this.msgs.push({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
        ];
    }
    submit() {
        this.selectedProject.status = 'Complete';
        this.http.post('api/project', this.selectedProject).subscribe(data => {
            console.log('project', data);
            this.ngOnInit();
            this.step1_projectform = false;
            this.projectTable = true;
            window.scrollTo(0, 0);
        });
    }
    next(key) {
        switch (key) {
            case 1:
                this.step1_projectform = false;
                this.step2_jobprestart = true;
                this.step3_budget = false;
                this.step4_variations = false;
                this.step5_material = false;
                this.activeIndex = 1;
                break;
            case 2:
                this.step1_projectform = false;
                this.step2_jobprestart = false;
                this.step3_budget = true;
                this.step4_variations = false;
                this.step5_material = false;
                this.activeIndex = 2;
                this.addBudget();
                break;
            case 3:
                this.step1_projectform = false;
                this.step2_jobprestart = false;
                this.step3_budget = false;
                this.step4_variations = true;
                this.step5_material = false;
                this.activeIndex = 3;
                break;
            case 4:
                this.step1_projectform = false;
                this.step2_jobprestart = false;
                this.step3_budget = false;
                this.step4_variations = false;
                this.step5_material = true;
                this.activeIndex = 4;
                this.addMaterial();
                break;
            case 5:
                this.step1_projectform = false;
                this.step2_jobprestart = false;
                this.step3_budget = false;
                this.step4_variations = false;
                this.step5_material = false;
                this.activeIndex = 5;
                break;
            default:
                break;
        }

        window.scrollTo(0, 0);
    }

    addMaterial() {
        this.materialList.push({ name: '', quantity: 0 });
    }
    addMaterialOrder() {
        this.materialOrderList.push({ defectId: '001', material: new material(), orderRequester: '', supplier: '', expectedDeliverydate: <any>Date.now() });
    }
    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

    onRowDblclick(quote) {
        this.selectedProject = new projectModel();
        if (quote) {
            this.selectedQuote = quote;
        } else {
            quote = this.selectedQuote;
        }
        if (quote['projectStatus'] == 'Complete') {
            //alert('Not Allowed!!');
            this.isComplete = true;

        } else {
            this.isComplete = false;

        }
        this.step1_projectform = true;
        this.projectTable = false;
        if (this.projectList.find(p => p.quoteId == quote['_id'])) {
            this.selectedProject = this.projectList.find(p => p.quoteId == quote['_id']);
            return;
        }
        this.selectedProject.quote_date = quote['date'];
        this.selectedProject.quoteId = quote['_id'];
        this.selectedProject.name = quote['name'];
        this.selectedProject.scopeDetail = quote['scopeDetail'];
        this.selectedProject.cost = quote['totalCost'];
        this.selectedProject.address = new Address();
    }
    cancel() {
        this.selectedProject = new projectModel();
        this.step1_projectform = false;
        this.projectTable = true;
        this.selectedQuote = null;
        window.scrollTo(0, 0);
    }

    addBudget() {
        this.budgetList.push('');
    }
}

