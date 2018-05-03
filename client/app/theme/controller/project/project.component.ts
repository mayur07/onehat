import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem, MenuItem, Message } from 'primeng/api';
import { QuoteModel } from "../../model/quote.model";
import { projectModel, Address } from "../../model/project.model";

@Component({
    templateUrl: 'project.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
    constructor(private http: HttpClient, private _router: Router, ) {

    }
    employeeList: SelectItem[];
    quotes: QuoteModel[] = [];
    quoteInfo: QuoteModel;
    projectInfo: projectModel;
    projectForm = false;
    jobPrestart = false;
    isComplete = false;
    @ViewChild('docForm') el: ElementRef;
    projectTable = true;
    items: MenuItem[];
    selectedQuote;
    msgs: Message[] = [];

    activeIndex: number = 0;


    uploadedFiles: any[] = [];

    ngOnInit() {
        this.quoteInfo = new QuoteModel();
        this.projectInfo = new projectModel();
        this.projectInfo.address = new Address();
        this.setSteps();
        this.http.get('api/quote').subscribe(data => {
            this.http.get('api/project').subscribe(pdata => {
                let projects: projectModel[] = <projectModel[]>pdata;
                let quotes: QuoteModel[] = <QuoteModel[]>data;
                this.quotes = [];
                for (var i = quotes.length - 1; i >= 0; i--) {
                    if (quotes[i]['outcome'] == 'Success') {
                        quotes[i]['projectStatus'] = 'Incomplete';
                        if (projects) {
                            let pItem = projects.find(p => p['quoteId'] == quotes[i]['_id']);
                            this.projectInfo = pItem;
                            if (pItem) {
                                quotes[i]['projectStatus'] = 'Complete';
                            }
                        }
                        this.quotes.push(quotes[i]);
                    }
                }

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
        }
        ];
    }
    submit() {
        this.projectInfo.status = 'Complete';
        this.http.post('api/project', this.projectInfo).subscribe(data => {
            console.log('project', data);
            this.ngOnInit();
            this.projectForm = false;
        });
    }
    next() {
        this.jobPrestart = true;
        this.projectForm = false;
        this.activeIndex = 1;
    }


    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

    onRowDblclick(quote) {
        this.projectInfo = new projectModel();
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

        this.projectInfo.quote_date = quote['date'];
        this.projectInfo.quoteId = quote['_id'];
        this.projectInfo.name = quote['name'];
        this.projectInfo.scopeDetail = quote['scopeDetail'];
        this.projectInfo.cost = quote['totalCost'];
        this.projectForm = true;
        this.projectTable = false;
    }
    cancel() {
        this.projectInfo = new projectModel();
        this.projectForm = false;
        this.projectTable = true;
        this.selectedQuote = null;
    }
    getData() {
        return [{
            "_id": "5acfd2514f885b0cdc0b61e8",

            "cost": 1356,
            "srno": "0111",
            "name": "my quote",
            "date": "2018-04-13T00:00:00.000Z",
            "status": "Complete",
            "success": "No",
            "reject": "NA",
            "comment": "my first quote ",
            "tender": "adsdsd",
            "details": "<p>aasdasdasdasd<\/p><p>asdas<\/p><p>sadasd<\/p>",
            "quoteReason": "<p>asdsad<\/p><p>asd<\/p><p>a<\/p><p>d<\/p><p>a<\/p><p>dasdsadasds<\/p>",
            "scopeDetail": "<ul><li>asdasdsad<\/li><li>asd<\/li><li>ad<\/li><li>ad<\/li><li>asasd<\/li><\/ul>",
            "externalSubstrate": "<ol><li>asd<\/li><li>da<\/li><li>asdasdad<\/li><\/ol>",
            "gstCost": 135.6,
            "totalCost": 1356135.6,
            "__v": 0
        },
        {
            "_id": "5acfd6059ab0b10d68e9396a",
            "cost": 966,
            "srno": "00012",
            "name": "qw",
            "date": "2018-04-13T00:00:00.000Z",
            "status": "Pending",
            "success": "No",
            "reject": "NA",
            "comment": "my quotes first....",
            "details": "<p>\tqwwwqqwq\tw<\/p><p>q\tw<\/p><p>qw\tqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww<\/p>",
            "quoteReason": "<ol><li>\tqw\tqwq\tw<\/li><li class=\"ql-indent-1\">qw<\/li><li class=\"ql-indent-2\">qw<\/li><li class=\"ql-indent-3\">qw<\/li><li class=\"ql-indent-4\">qw<\/li><\/ol>",
            "scopeDetail": "<ul><li class=\"ql-indent-1\">qw\tw<\/li><li class=\"ql-indent-2\">qw<\/li><li class=\"ql-indent-3\">qw<\/li><li class=\"ql-indent-4\">qw<\/li><\/ul>",
            "gstCost": 96.6,
            "totalCost": 1062.6,
            "__v": 0
        },
        {
            "_id": "5acfd863ec3a3e0f005758bb",
            "cost": 963,
            "srno": "002",
            "name": "dasd",
            "date": "2018-04-13T00:00:00.000Z",
            "status": "Pending",
            "success": "Yes",
            "reject": "NA",
            "comment": "asdsadas",
            "tender": "sadds",
            "details": "<p>sadsadsdsassdas<\/p><p>asd<\/p>",
            "quoteReason": "<ol><li>sadsadsa<\/li><li>asdsad<\/li><\/ol>",
            "scopeDetail": "<ol><li>asdsadsad<\/li><li>asdsdsddsa<\/li><\/ol>",
            "gstCost": 96.3,
            "totalCost": 1059.3,
            "__v": 0
        },
        {
            "_id": "5acfd98ae437a10778e36fa6",
            "cost": 9632,
            "srno": "001",
            "name": "trytry",
            "date": "2018-04-12T00:00:00.000Z",
            "status": "Pending",
            "success": "No",
            "reject": "NA",
            "comment": "rtyryr",
            "tender": "rtyrty",
            "details": "<p>rtyrtyrtyytry<strong>rtyrtyry<\/strong><\/p>",
            "quoteReason": "<ol><li>rtyrtyty<\/li><li>tryty<\/li><\/ol>",
            "scopeDetail": "<ul><li>rtytry<\/li><\/ul>",
            "gstCost": 963.2,
            "totalCost": 10595.2,
            "__v": 0
        },
        {
            "_id": "5ad065556ca618001e59ed72",
            "cost": 3737,
            "srno": "1234",
            "name": "ABC",
            "date": "2018-04-13T00:00:00.000Z",

            "status": "Pending",
            "reject": "NA",
            "comment": "xyyz",
            "details": "<p>hususu<\/p>",
            "quoteReason": "<p>gdhdeywb<\/p>",
            "scopeDetail": "<p>gsywbvwg<\/p>",
            "externalSubstrate": "<p>hswbn<\/p>",
            "internalSubstrate": "<p>rw23r2<\/p>",
            "gstCost": 373.7,
            "totalCost": 4110.7,
            "__v": 0
        }]
    }
}

