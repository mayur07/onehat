import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteModel } from "./../../../model/quote.model";
import { QuoteService } from "../quote.service";


@Component({
    templateUrl: 'quote-doc.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../quote.component.css']
})

export class QuoteDocComponent implements OnInit {
    display = false;
    quote: QuoteModel;
    @ViewChild('downloadForm') el: ElementRef;
    constructor(private http: HttpClient, private _router: Router, private route: ActivatedRoute, private quoteService: QuoteService) { }
    ngOnInit() {
        this.display = true;
        this.quote = this.quoteService.selectedQuote;
    }
    print() {
        debugger;
        this.http.post('api/quote/saveDocx', { html: this.el.nativeElement['innerHTML'] }).subscribe((objecturl: string) => {
            debugger;
            let url = objecturl.replace('/app/client', '');
            window.open(url);
            console.log(objecturl, '......');
            //window.open(url);
        })
    }
    cancel() {
        this.display = false;
        this._router.navigate(['/quotes'], { relativeTo: this.route });
    }
}