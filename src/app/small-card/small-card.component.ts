import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {NameOrTitleData} from '../Interfaces/universal-data';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-small-card',
    templateUrl: './small-card.component.html',
    styleUrls: ['./small-card.component.sass']
})
export class SmallCardComponent implements OnInit {
    @Input() private url: string;
    @Input() private resources: string;
    private dataResults = {
        name: '',
        title: ''
    } as NameOrTitleData;

    constructor(private service: SearchService, private appcomp: AppComponent) {
    }

    ngOnInit() {
        this.searchFromUrl();
    }

    searchFromUrl() {
        this.service.getSearchFromUrl(this.url).subscribe(results => {
            if (results) {
                this.dataResults = results;
            }
        });
    }

    private search(searchParams) {
        this.appcomp.getSearch(searchParams);
    }
}
