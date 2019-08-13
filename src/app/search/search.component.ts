import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from '../app.component';
import {UniversalData} from '../Interfaces/universal-data';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
    private countResults: number;
    private dataResults: UniversalData[];
    private resources: string;

    constructor(private service: SearchService,
                private fb: FormBuilder,
                private route: ActivatedRoute,
                private appcomp: AppComponent) {
    }

    private searchForm: FormGroup;

    ngOnInit() {
        this.initForm();
        if (this.searchForm.valid) {
            this.search();
        }
        this.route.queryParamMap.subscribe(params => {
            this.updateValue(params.get('resource'), params.get('search'));
        });
    }
    private initForm() {
        this.searchForm = this.fb.group({
            resources: ['', Validators.required],
            searchQuery: ['', Validators.required],
        });
    }

    updateValue(resource: string, search: string) {
        return this.searchForm.setValue({resources: resource, searchQuery: search});
    }

    search() {
        this.appcomp.getSearch(this.searchForm.value.resources, this.searchForm.value.searchQuery);
        this.resources = this.searchForm.value.resources;
        this.countResults = null;
        this.service.getSearch(this.searchForm.value.resources, this.searchForm.value.searchQuery)
            .subscribe(results => {
                this.countResults = results.count;
                this.dataResults = results.results;
                console.log(results);
            });
    }
}
